import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <a href="App.tsx">Home</a>
                    <a href="Yarn.tsx">Yarn</a>
                    <a href="Patterns.tsx">Patterns</a>
                    <a href="About.tsx">About</a>
                    <a href="Contact.tsx">Contact</a>
                </ul>
            </nav>
        )
    }
}
export default NavBar;