import '../header';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <h1 className='navbar-logo'>
                    <a>Saurabh Singh</a>
                </h1>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a className='nav-links'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-links'>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-links'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
