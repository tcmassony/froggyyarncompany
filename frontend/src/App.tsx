import React from "react";
import { Grommet } from "grommet";
import logo from "./logo.svg";
import "./App.css";

const theme = {
    global: {
        font: {
            family: "Roboto",
            size: "14px",
            height: "20px"
        }
    }
};

class App extends React.Component {
    render() {
        return (
            <Grommet theme={theme}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </Grommet>
        );
    }
}
export default App;
