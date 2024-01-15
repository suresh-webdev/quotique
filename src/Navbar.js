import {Link,useNavigate} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import "./Navbar.css"

function Navbar(){
    const navigate = useNavigate();


    const [isChecked, setIsChecked] = useState(false);

  const handleNavClick = () => {
    console.log(isChecked);
    setIsChecked((prevState) => !prevState);
  };

    const handleNavigateAndScroll = (path, section) => {
        navigate(path);
        setTimeout(() => {
            scrollIntoView(section);
        }, 1000); 
    };

    const scrollIntoView = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return( 
        <>
        <div className='nav-background' />
        <span className='res-logo'>Quotique</span>
            <nav className="navbar">
                <input type="checkbox" id="check" />
                <label className="checkbtn" checked={isChecked} htmlFor='check'>
                    <FaBars onClick={handleNavClick} className="Fabars"/>
                </label>
                <ul className='nav-ul'>
                    <li><Link to="/">Home</Link></li>
                    <li onClick={() => handleNavigateAndScroll('/', 'connect-section')}>Contact</li>
                    <li className='logo-li'><span className='Logo'>Quotique</span></li>
                    <li><Link to="/topic">Topics</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;