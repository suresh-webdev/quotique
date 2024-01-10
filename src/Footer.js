import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer(){
    return (
        <>  
        <footer className="footer-container">
            <ul>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaGoogle /></a></li>
                <li><a href="#"><FaLinkedin /></a></li>
            </ul>
            <p>© 2024  All Rights Reserved. Designed by Suresh S</p>
        </footer>
            <div className='footer-background' />
        </>
    );

}

export default Footer;