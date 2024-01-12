import {Link,useNavigate} from 'react-router-dom';
import "./Navbar.css"

function Navbar(){
    const navigate = useNavigate();

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
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li onClick={() => handleNavigateAndScroll('/', 'connect-section')}>Contact</li>
                    <li><span className='Logo'>Quotique</span></li>
                    <li><Link to="/topic">Topics</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;