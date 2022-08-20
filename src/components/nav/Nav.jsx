import React from "react";
import "./nav.css";
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {TbMessageDots} from 'react-icons/tb'

function Nav() {
  return (
    <nav>
      <a href="#"><BiHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookAlt/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><TbMessageDots/></a>
    </nav>
  )
}

export default Nav;
