//import React
// Import Link to navigate between pages
// Import the CSS file for styling

const Navbar = () => {
        return (
            <nav className="navbar">
                <ul className="nav-list">
                    <li className='nav-item'>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/not-home" className="nav-link">NotHome</Link>
                    </li>
                </ul>
            </nav>
        )
     // fill in the rest here!
     // add Home and NotHome, including links (after routing established)
  };
  
  export default Navbar;
  // Always export your components so they can be imported in other files
  