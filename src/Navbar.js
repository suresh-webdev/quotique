import {Link} from 'react-router-dom';
import "./Navbar.css"
function Navbar(){
    return( 
        <>
        <div className='nav-background' />
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Language</li>
                    <li><span className='Logo'>Quotique</span></li>
                    <li><Link to="/topic">Topics</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;