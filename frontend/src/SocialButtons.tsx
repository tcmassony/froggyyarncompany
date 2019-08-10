import React from "react";
import { FaPinterest, FaInstagram, FaTwitter, FaYoutube, FaRavelry } from "react-icons/fa";

class SocialButtons extends React.Component {
    render() {
        return(
            <div >
                <FaPinterest size="3em"/>
                <FaInstagram size="3em"/>
                <FaTwitter size="3em"/>
                <FaYoutube size="3em"/>
                <FaRavelry size="3em"/>
            </div>
        )
    }
}
export default SocialButtons;