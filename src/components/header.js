import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo-designcode.svg";
import "./Header.css";

const Header = ({ siteTitle }) => (
  <div className='Header'>
    <div className='HeaderGroup'>
      <Link to='/'>
        <img src={logo} width='30' />
      </Link>
      <Link to='https://www.linkedin.com/in/valentinakuzmych/'>
        LinkedIn Profile
      </Link>
      <Link to='https://djinni.co/q/5b97768d1f/'>DJinni Profile</Link>
      <Link to='https://valiaku.github.io/cv/index.html'>Online CV</Link>
      {/* <Link to='/buy'>
        <button>Buy</button>
      </Link> */}
    </div>
  </div>
);

export default Header;
