import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer(){
    return (
        <>  
        <div className="main-footer">
            <footer className="footer-container">
                <ul>
                    <li><a href="https://www.instagram.com/suresh.05_/"><FaInstagram /></a></li>
                    <li><a href="mailto:asmiusdummy@gmail.com"><FaGoogle /></a></li>
                    <li><a href="https://www.linkedin.com/in/s-u-r-e-s-h/"><FaLinkedin /></a></li>
                </ul>
                <p>© 2024  All Rights Reserved. Designed by Suresh S</p>
            </footer>
                <div className='footer-background' />
        </div>
        </>
    );

}

export default Footer;