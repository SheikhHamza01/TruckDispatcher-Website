import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <header>
        <nav className="navi">
            <Link to="/" className="logo">
              <p>Dispatcher</p>
            </Link>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>                  
                <Link to="/Plans">Plans and Pricing</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Team">Our Team</Link>
              </li>
              <li>
                <Link to="/Affilate">Affiliate Program</Link>
              </li>
              <li>
                <Link to="/">
                  <button className="btn">+1 (234) 567-8901</button>
                </Link>
              </li>
            </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
