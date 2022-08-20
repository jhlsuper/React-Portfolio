import React from "react";
import "./header.css";
import CTA from "./CTA";

// import ME from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";
function Header() {
  return(
    <header>
      <div className="container header__container">
        <h5>Hello its raining</h5>
        <h1>Jeff Lee</h1>
        <h5 className="text-light">어쩌고 developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          {/* <img src='{ME}' alt='me'/> */}
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
        
      </div>
    </header>
  )
}

export default Header;
