"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

export default function page() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef1 = useRef(null);
  // Show button when user scrolls down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };
  
  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      
      
        <h1 className=' text-center font-extrabold text-6xl mt-10'>Projects</h1>
        <p className='   text-lg text-slate-500 text-center'>Projects that I created or maintaining.</p>
        <div class="flex flex-wrap justify-center gap-2 mt-20">

    <button  type="button" 
                class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-2 py-1 text-sm ">Html
            </button>
    
    <button type="button"
                class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-2 py-1 text-sm ">Nextjs
            </button>
    <button type="button" onClick={() => scrollToDiv(divRef1)}
                class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-2 py-1 text-sm ">ReactNative
            </button>

            
</div>

        <div className='grid  justify-items-stretch h-full'>
          
<h1 style={{fontFamily:"Londrina Outline"}} className=' text-center ml-18  mt-20 text-8xl'>NextJs</h1>





        </div>
        <div className='      mr-20  w-full'>
<div className='      '>
<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-3 xl:gap-3" style={{padding:'10px', margin:'20px'}}>
            
            <a href="https://abuustore.netlify.app/"
                class="group relative w-200 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/porfollio%20items%2FScreenshot%202024-06-18%20070349.png?alt=media&token=662a0583-70a7-4af1-84a8-c876846a4936" loading="lazy" width={200}  height={200} alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white  md:ml-5 md:text-lg">ABUSTORE</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
           
            <a href="https://simpletracker2.netlify.app/"
                class="group relative  w-30 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/porfollio%20items%2FScreenshot%202024-06-21%20165442.png?alt=media&token=43844a36-0750-4be1-ba4a-f503b0285a41" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Shipment Tracker</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
           
            <a href="https://namitsingh.netlify.app"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/porfollio%20items%2FScreenshot%202024-07-09%20192546.png?alt=media&token=2188dfba-f25c-4373-9979-d31cf2c88a1a" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-2 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">LandingPage</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
           
            <a href="https://abupets.netlify.app"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/porfollio%20items%2FScreenshot%202024-05-16%20161048.png?alt=media&token=6eaf5859-b955-462d-bffc-30f5429dd8fe" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">ABUPETS</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
             {/* <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2772922.png&f=1&nofb=1&ipt=a8b08766b18a7746ab3d09aab44197f05eaf019dfaea5e0a00dcfec1206b534a&ipo=images" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Lorem ipsum</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
             */} 
            <a href="https://nirwanvilla.netlify.app/#/"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/porfollio%20items%2FScreenshot%202024-07-09%20192820.png?alt=media&token=da3eebd3-263a-4c3f-a6a7-3bc349c9ab97" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Nirwan Villa</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>


            
            
        </div>



</div>

<h1 style={{fontFamily:"Londrina Outline"}} className=' text-center ml-18  mt-20 text-8xl'>React Native</h1>


<div  ref={divRef1} className='      '>
<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-3 xl:gap-3" style={{padding:'10px', margin:'20px'}}>
            
            <a href="https://x.com/vpnwan/status/1810327824969982401"
                class="group relative w-200 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/porfollio%20items%2FScreenshot%202024-06-18%20070349.png?alt=media&token=662a0583-70a7-4af1-84a8-c876846a4936" loading="lazy" width={200}  height={200} alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white  md:ml-5 md:text-lg">ABUSTORE</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>

            <a href="https://github.com/vpnwann/AmazonClone"
                class="group relative w-200 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/Screenshot%202024-08-04%20124213.png?alt=media&token=9ebda645-e349-41e2-a232-6d3caf0b1933" loading="lazy" width={200}  height={200} alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white  md:ml-5 md:text-lg">AmazonClone</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
           
          


            
            
        </div>

        



</div>

        </div>
        {isVisible && (
        <div
          className="fixed bottom-20 right-4 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg z-50 cursor-pointer"
          onClick={scrollToTop}
        > ⬆️
          <faArrowUp size={24}  />
        </div>
      )}
        


    </div>
    
  )
}
