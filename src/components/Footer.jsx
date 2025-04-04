import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaCopyright } from "react-icons/fa";
function Footer() {
  return (
    <div className='w-full h-[200px] bg-[#3E3F5B] flex flex-col text-[17px] text-white'>
        <div className='w-full h-[33%]  flex justify-center items-center gap-8'>
            <div>About</div>
            <div>Blog</div>
            <div>Jobs</div>
            <div>Press</div>
            <div>Accesibility</div>
            <div>Parteners</div>
        </div>
        <div className='w-full h-[33%] flex justify-center items-center gap-8 text-[30px]'>
        <FaFacebook />
        <FaInstagram />
        <FaSquareXTwitter />
        <FaGithub />
        <IoLogoYoutube />
        </div>
        <div className='w-full h-[33%] flex justify-center items-center'>
        <FaCopyright />
        <h1>2024 Your Company, Inc. All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer;