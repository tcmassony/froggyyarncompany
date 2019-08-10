import React from "react";
import CssUnits from "./CssUnits";


interface LogoProps{
    size: number;
    units: CssUnits;
}

class Logo extends React.Component<LogoProps,{}> {
    render() {
        return(
        <h1 style={{fontSize:`${this.props.size}${this.props.units}`}}>Froggy Yarn Company</h1>
        );
    }
}
export default Logo;