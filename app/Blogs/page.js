 import React from 'react'
 import Link from 'next/link'
 
 export default function page() {
   return (
    <>
     <div>
         <h1 className=' text-center font-extrabold text-6xl mt-10'>Blogs</h1>
       
     </div>
    
     <div class="container mx-auto px-4 py-8 mt-36 m-12">
    <div class="relative wrap overflow-hidden">
    <h1 className=' text-left font-extrabold text-4xl mt-10'>Recent Activity</h1>
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div class="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-500 text-xl">May 22</h3>
                <Link  href="https://vpnwan.hashnode.dev/react-native-skills-with-cheatsheets-a-quick-view-guide-using-image-as-text"><p class="text-gray-500 leading-tight">React Native Skills with Cheatsheets: A Quick-View Guide + Using Image as Text</p></Link>
            </div>
        </div>
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div class="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-500 text-xl">May 21</h3>
                <Link href="https://vpnwan.hashnode.dev/how-to-remove-eslint-errors-in-nextjs"><p class="text-gray-700 leading-tight">How to Remove Eslint Errors in Nextjs.</p></Link>
            </div>
        </div>
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                
            </div>
            <div class="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-500 text-xl">May 20</h3>
               <Link href="https://vpnwan.hashnode.dev/integrate-firebase-forms-to-nextjs"> <p class="text-gray-700 leading-tight">Integrate Firebase Forms to Nextjs</p></Link>
            </div>
        </div>
        
        <div class="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4">
        
                <h3 class="mb-3 font-bold text-gray-500 text-xl">May 07</h3>
                <Link href="https://hashnode.com/@vpnwan"><p class="text-gray-700 leading-tight">Joined HashNode Started Blog</p></Link>
                
            </div>
            
            
            
    </div>
    
   
</div>
<h1 className=' text-center font-bold text-gray-500  text-5xl'>END</h1>
     </>
   )
 }
 