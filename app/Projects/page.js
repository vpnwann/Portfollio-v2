import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <h1 className=' text-center font-extrabold text-6xl mt-10'>Projects</h1>
        <p className='   text-lg text-slate-500 text-center'>Projects that I created or maintaining.</p>

        <div className='grid  justify-items-stretch h-full'>
          
<h1 style={{fontFamily:"Londrina Outline"}} className=' text-center ml-18  mt-20 text-8xl'>NextJs</h1>





        </div>
        <div className='      mr-20  w-full'>
<div className='      '>
<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-3 xl:gap-3" style={{padding:'10px', margin:'20px'}}>
            
            <a href="https://abuustore.netlify.app/"
                class="group relative w-200 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/Screenshot%202024-06-21%20132239.png?alt=media&token=61919656-fe41-4e73-a7de-6d038bfafd0a" loading="lazy" width={200}  height={200} alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

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
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/Screenshot%202024-06-21%20165442.png?alt=media&token=296d7087-64ee-4cdb-9573-c769064c8461" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

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
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/port.png?alt=media&token=b1619424-e98d-4d04-ad74-7176263a25ae" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

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
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/pet.png?alt=media&token=ac802ff4-af83-43ae-b016-95494f03daf4" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

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
            <a href="https://freetreeabu.netlify.app/"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://firebasestorage.googleapis.com/v0/b/abup-e3b67.appspot.com/o/sdx.png?alt=media&token=e0d90612-9507-485c-8092-53dab751cf5a" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tree Site</span>
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
        


    </div>
    
  )
}
