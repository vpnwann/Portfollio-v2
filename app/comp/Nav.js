"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div>
       
            {/* Navbar */}
            <nav className=" p-1">
              
                <div className="container mx-auto flex  lg:flex-row justify-between items-center">
                <Link href="/">   <div  style={{fontFamily:"Londrina Outline"}} className=  "  cvc text-white font-bold text-3xl mb-4 font-mono typing-text  mt-9 ml-5  hover:text-orange-600 ">NS </div></Link>

                    

                    {/* Navigation links */}
                    <div className={`lg:flex  lg:flex-row   lg:mt-0 mt-4 flex  items-center text-base`}>
                    <Link href="/Blogs" className="text-white  px-4 py-2  hover:text-orange-600">Blogs</Link>
                        <Link href="/Projects" className="text-white  px-4 py-2  hover:text-orange-600">Projects</Link>
             

                        <ul className="flex justify-around gap-9 m-3">
        
        
      </ul>



                    </div>
                </div>
                
            </nav>


        </div>
  )
}
