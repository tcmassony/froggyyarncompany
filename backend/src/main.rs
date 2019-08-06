use actix_web::{http, web, App, HttpResponse, HttpServer};
use actix_web_prom::PrometheusMetrics;

#[macro_use] extern crate juniper;

use futures::future::Future;
use juniper::http::graphiql::graphiql_source;
use juniper::http::GraphQLRequest;

mod schema;

use crate::schema::{create_schema, Schema};

fn health() -> HttpResponse {
    HttpResponse::Ok().finish()
}

fn graphiql() -> HttpResponse {
    let html = graphiql_source("http://127.0.0.1:8080/graphql");
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(html)
}
fn graphql(
    st: web::Data<std::sync::Arc<Schema>>,
    data: web::Json<GraphQLRequest>,
) -> impl Future<Item = HttpResponse, Error = actix_web::Error> {
    web::block(move || {
        let res = data.execute(&st, &());
        Ok::<_, serde_json::error::Error>(serde_json::to_string(&res)?)
    })
    .map_err(actix_web::Error::from)
    .and_then(|user| {
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .body(user))
    })
}

fn main() -> Result<(),failure::Error> {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    let prometheus = PrometheusMetrics::new("api", "/metrics");

    // Create Juniper schema
    let schema = std::sync::Arc::new(create_schema());

    HttpServer::new(move || {
        App::new()
            .data(schema.clone())
            .wrap(actix_web::middleware::Logger::default())
            .wrap(prometheus.clone())
            .wrap(
                actix_cors::Cors::new() // <- Construct CORS middleware builder
                .allowed_origin("http://localhost:8080")
                .allowed_methods(vec!["GET", "POST", "OPTIONS"])
                //.allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
                //.allowed_header(http::header::CONTENT_TYPE)
                .max_age(3600)
            )
            .service(web::resource("/health").to(health))
            .service(web::resource("/graphql").route(web::post().to_async(graphql)))
            .service(web::resource("/graphiql").route(web::get().to(graphiql)))
    })
    .bind("127.0.0.1:8080")?
    .run()?;
    Ok(())
}

