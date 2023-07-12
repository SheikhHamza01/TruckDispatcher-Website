import React from "react";
import basic from "./images/basiclogo.jpg";
import dispatch from "./images/dispatchlogo.jpg";
import dat from "./images/datlogo.jpg";
import trucklogo from "./images/trucklogo.png";
import ignious from "./images/ignious-bg-remove.png";
import Affiliate from "./Affilate";
// import {Link} from "react-router-dom";


function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Part1">
        <h1>
          Always loaded <br /> and profitable
        </h1>
        <img className="footer-img" src={dat} alt="dat-logo" />
        <img className="footer-img-2" src={trucklogo} alt="truck-logo" />
        <br />
        <br />
        <img src={dispatch} alt="dispatch-logo" />
        <br />
        <p>We are working with: </p>
        <img src={basic} alt="basic-logo" />
        <br />
        <br />
        <button value={<Affiliate />} className="footer-btn">
          Affiliate Program
        </button>
        <br />
        <p className="footer-para">Dispatch is a company from</p>
        <img src={ignious} alt="ignious-logo" />
      </div>
      <div className="Footer-Part2">
        <nav className="navi">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Plans">Plans and Pricing</a>
            </li>
            <li>
            <input
              type="text"
              list="options"
              className="pt10bar"
              placeholder="More"
              
            />
              <datalist id="options">
              <option value="Team" />
              <option value="Services" />
              <option value="Affiliate Program" />
            </datalist>
            </li>
          </ul>
        </nav>
        <a href="">sales@distacher.com</a>
        <br />
        <br />
        <p>Phone: (+1)123 456 78910</p>
        <br />
        <p>
          Working Hours: <br />
          Mon-Fri:7am-5pm <br />
          Dispatcher 24/7
        </p>
        <br />
        <br />
        <p>
          370 W 400 N #9
          <br />
          PROVO, UT 84601
        </p>
        <br />
        <br />
        <p>
          © 2023 Genius Dispatch by Ingenious Industry LLC. Powered by
          insignecreative.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
