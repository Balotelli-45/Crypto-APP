import React from 'react';
import fb from "../images/facebook-f 1.png";
import insta from "../images/instagram 1.png";
import yout from "../images/youtube 1.png";
import twitt from "../images/twitter 1.png";
import link from "../images/linkedin 1.png";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className='down-link'>
                <div className="copy-right">
                    <p>© 2022 dynamic. All rights reserved</p>
                    <p>Parivacy</p>
                    <p>Terms</p>
                    <p>Sitemap</p>
                </div>
                <div className="socials">
                    <img src={fb} alt="facebook" />
                    <img src={insta} alt="instagram" />
                    <img src={yout} alt="youtube" />
                    <img src={twitt} alt="twitter" />
                    <img src={link} alt="linkedin" />
                </div>
            </div>
        </div>
    );
}

export default Footer; 