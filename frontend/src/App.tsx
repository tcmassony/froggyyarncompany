import * as React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Btn from "./Btn";
import Logo from "./Logo";
import NavBar from "./NavBar";
import SocialButtons from "./SocialButtons";
import imageA from "./img.webp";
import CssUnits from "./CssUnits";

const theme = {
   background: "linear-gradient(45deg #FE6B8B 30%, FF8E53 90%"
};

class App extends React.Component {
    
    render() {
        return (
            <ThemeProvider>
                <header>
                    <Logo size={100} units={CssUnits.Percent}/>
                    <Btn text="Sign up" excite />
                    <Btn text="Log-in" />
                </header>
                <div className="NavBar">
                    < NavBar />
                </div>
                <div className="Creator">
                    <img src={imageA} alt="lineart"/>
                    <h2 className="banner">Creator of the Week</h2>
                    <p className="Bio">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim repellendus sed fugit hic, deleniti consequatur numquam laborum perspiciatis ipsa magni ratione necessitatibus? Iusto, illum. Ullam quos eius nisi voluptates vero molestiae velit eos consequuntur, sit autem doloremque iure quam quaerat quibusdam vel totam asperiores cum?</p>
                    <SocialButtons />
                    <p className="creatorLinks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, accusamus? Quas maiores in expedita obcaecati.</p>
                </div>
                <footer>
                    <div className="footer-logo">
                        <Logo size={25} units={CssUnits.Percent}/>
                    </div>
                </footer>
            </ThemeProvider>
        );
    }
}
export default App;
