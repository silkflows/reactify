import {Link} from "react-router-dom"

import ReactDOM from 'react-dom/client'; // For React 18+ rendering
import { 
  useState, // local state managment like input values
  useEffect, // side Effects like timers,call api and direct dom manipulate
  createContext,// alternative to props but is best practice than props
  useContext,// works with createContext() // is used to acces data from parent component
  useReducer,// to avoid unnecessary rerenders
  useCallback,useMemo, // sommohe similar and also works // for performance optize
  useRef, // acces dom elements 
  Component

 } from 'react'


// let navlinks=()=>{
//     return(
//       p 
//     )
// }
//  navigations 


let Navigation = ()=>{



 
function menu(){
    document.getElementById("menu").style.visibility="hidden"
    //  document.getElementById("closeIcon").style.display="block"
      document.getElementById("closeIcon").style.visibility="visible"
      document.getElementById("link").style.visibility="visible"

}



function Show(){
    // shwoing menu and hiding it self
    document.getElementById("closeIcon").style.visibility="hidden"
     document.getElementById("menu").style.visibility="visible"
     document.getElementById("link").style.visibility="hidden"
}


function hideLinks(){
      document.getElementById("link").style.visibility="hidden"
       document.getElementById("menu").style.visibility="visible"
        document.getElementById("closeIcon").style.visibility="hidden"

}



  function visibility (){

    
    let navs = document.getElementById("link")
    let root = document.getElementById("root")

   if(navs){
    navs.style.display="flex"
    root.style.columnGap="40px"
     navs.style.marginInline="50px"
      root.style.rowGapGap="100px"

      navs.style.height="70vh"
      
       navs.style.borderRadius="10px"
        

    
  
   }
  
  }

    
    
    const display = () => {
        return"hidden";
    }
   
        
    
    
    
    
        
    
      

// 
    return(

        
        
<div className=" container   ">


<div className="   md:grid md:grid-cols-3  bg-[#06010e] fixed top-0 z-1000  h-15 w-full px-15

py-3 items-center
"

>


<div className="flex justify-start pt-1 ">
    {/* logo */}



<Link className=" font-bold font-sans  capitalize text-white  " to="/">  Iconify</Link>
    </div>
            
        <div 
        id="links"
      
        className={` ${display()}  bg-[#06010e] md:flex md:justify-center text-white md:space-x-6  `}>
            {/* links */}

        <Link id="roots" className=" hover:underline  " to="/"> Home</Link>

        <Link id="roots" className="navlinks  " to="/projects"> Projects</Link>
        <Link id="roots" className="navlinks   " to="/contact"> Contact</Link>

        <Link  id="roots"className="navlinks   " to="/blog"> Blog</Link>
       

       
        </div>





<div className="flex justify-end items-center text-center  text-white">
  {/* button and menu icon */}
  <button className={`bg-indigo-800 text-white py-2 mt-0 px-10 rounded capitalize ${display()} md:block`}> 
    Get Started 
  </button>
  
  <i id="menu"
  onClick={()=>{visibility(),menu()}}
 
 
   className={`fa-solid fa-bars md:invisible self-center absolute top-6 lg:${display()}   cursor-pointer`}></i>

   <i id="closeIcon"
    onClick={()=>Show()} className={`  lg:${display()}  invisible fa-solid fa-xmark fa-solid fa-bars md:hidden self-center absolute top-6 text-white  cursor-pointer`}></i>
</div> 











 
 </div>

<div>



</div>

{/* hided navs */}



<div 
        id="link"
      
        className={` ${display()} text-white   bg-gray-800 flex flex-col items-center text-center my-15   `}>
            {/* links */}

        <Link onClick={()=>hideLinks()} id="root" className=" hover:underline  mt-7 " to="/"> Home</Link>

        <Link onClick={()=>hideLinks()} id="root" className="navlinks mt-7 " to="/projects"> Projects</Link>
        <Link  onClick={()=>hideLinks()}id="root" className="navlinks mt-7 " to="/contact"> Contact</Link>

        <Link  onClick={()=>hideLinks()} id="root"className="navlinks mt-7  " to="/blog"> Blog</Link>
    

       
        </div>



        </div>



    )
}

export default Navigation

