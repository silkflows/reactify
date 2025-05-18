import { Link } from "react-router-dom";

let Home=()=>{

return(

    <div className=" bg-gradient-to-br from-indigo-900 to-black  mt-0 text-black  absolute top-5 left-0  w-screen  md:h-screen -z-30">


<div className="grid grid-cols-1 md:flex md:justify-between my-20 md:mx-10 ">

<div className=" grid grid-cols-1 place-items-center w-full md:flex md:justify-start ">


<img className="scale-100 w-100 rounded-[10px] " src="https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"></img>



</div>
    <div className=" md:flex md:flex-col md:place-items-start md:z-100 md:mr-20   ">

<h1 className=" capitalize my-2 mx-25  text-6xl text-white font-bold ">hello</h1>
<h1 className=" capitalize my-2 mx-25 text-3xl text-white font-bold">i am react dev</h1>
<p className="  md:mx-0  mx-25 font-mediam text-white  md:ml-25 ">Lorem ipsum dolor sit amet consectetur  tenetur!</p>
<button className=" md:hover:bg-indigo-700 md:hover:border-indigo-50  md:w-40 md:py-2 md:px-5 md:ml-25  bg-indigo-900 w-80 px-auto ml-13  text-white my-7  mx-auto rounded px-12 py-2 text-center"> explore me </button>

    </div>





</div>
{/* section two services */}
{/* intaan hoosteed wxii ka furm waa section two */}

<div className=" w-full h-[40vh]  my-60 ">
    <h1 className="font-semibold text-2xl text-cyan-200 text-center"> We Provide</h1>

<div id="parent_div"
className="flex flex-col items-center text-center md:grid md:grid-cols-2 mx-10 md:gap-x-5 md:my-10 md:h-50  md:mx-30 "

> 
   
   <div id="childOne"
   className="flex flex-col my-5 border-indigo-900 bg-[#1b263b] text-zinc-50  md:p-7 space-y-7 p-2 px-4 rounded-[5px] h-68"
   >

   <i class="   fa-solid fa-terminal"></i>
   <h2 className="font-semibold text-2xl text-cyan-200 ">Custom React Development</h2>
<p className="text-left ml-5 ">Build scalable, high-performance web applications with modern React (including hooks,
     context API, and functional components). I create tailored solutions 
     optimized for your business needs.</p>
   </div>

     
   <div id="childtwo"
    className="flex flex-col my-5 border-indigo-900 bg-[#1b263b] text-zinc-50 space-y-7 p-2 px-4 rounded-[5px] md:p-7 h-68"
   >

<i class="fa-solid fa-laptop-code"></i>
   <h2 className="font-semibold text-2xl text-cyan-200 "> Responsive UI/UX Design</h2>
<p className="text-left ml-5">Craft pixel-perfect, mobile-first interfaces with React libraries like Material-UI, TailwindCSS,
     or Styled Components. Focus on accessibility 
     and seamless user experiences across devices..</p>
   </div>
   
   <div id="childthree"
    className="flex flex-col my-5 border-indigo-900 bg-[#1b263b] text-zinc-50 space-y-7 p-2 px-4 md:p-7 rounded-[5px] h-68"
   >

<i class="fa-solid fa-arrows-turn-to-dots"></i>
   <h2 className="font-semibold text-2xl text-cyan-200 "> State Management Solutions</h2>
<p className="text-left ml-5">Implement robust state management using Redux, Zustand, or
     React Query to ensure smooth data flow
      and minimize unnecessary re-renders in complex applications.</p>
   </div>

   <div id="childfour"
    className="flex flex-col my-5 border-indigo-900 bg-[#1b263b] text-zinc-50 md:p-7 space-y-7 p-2 px-4 rounded-[5px] h-68"
   >

<i class="fa-solid fa-server"></i>
   <h2 className="font-semibold text-2xl text-cyan-200 ">API Integration & Optimization</h2>
<p className="text-left ml-5">Connect your React app to REST/GraphQL 
    APIs, handle authentication (JWT/OAuth), and optimize performance with lazy loading, caching, and error handling.</p>
   </div>
     
 
     
  


    
</div>



</div>
{/* section three tesmonialis */}


<div className=" w-full h-[60vh]  md:my-130 my-280 ">
    <h1 className="font-semibold text-2xl text-cyan-200 text-center"> Client`s Feedback</h1>

<div id="parent_div"
className=" rounded-8xl  flex flex-col items-center text-center md:grid md:grid-cols-2 mx-10 md:gap-x-5 md:my-10 md:h-50  md:mx-30 "

> 
   
   <div id="child2"
   className=" flex flex-col place-items-center my-10 bg-[#1b263b] 
      hover:bg-gray-900
  text-zinc-50  md:p-7 
   space-y-5 p-2 px-4 rounded-[5px] h-90"
   >

  <img className=" border-2 size-20 rounded-full items-center" src="./src/img1.png" alt="" />
   <h2 className="font-semibold text-2xl text-cyan-200 ">Hani Elmi </h2>
   <h2 className="font-semibold  text-cyan-200 ">AI dev</h2>
<p className="text-left ml-5 ">"Working with Iconify was a game-changer! They built our MVP in React with a stunning UI and seamless state management. The app
     launched ahead of schedule, and their code was so clean we scaled effortlessly."</p>
   </div>

 
   <div id="child2"
   className=" flex flex-col place-items-center my-10  hover:bg-gray-900 border-indigo-900 bg-[#1b263b] text-zinc-50  md:p-7 
   space-y-5 p-2 px-4 rounded-[5px] h-90"
   >

  <img className=" border-2 size-20  rounded-full items-center bg-center bg-cover object-center " src="./src/assets/img2.png" alt="" />
   <h2 className="font-semibold text-2xl text-cyan-200 ">Serien Hashimi </h2>
   <h2 className="font-semibold  text-cyan-200 ">Product Designer</h2>
<p className="text-left ml-5 ">"Working with Iconify was a game-changer! They built our MVP in React with a stunning UI and seamless state management. The app
     launched ahead of schedule, and their code was so clean we scaled effortlessly."</p>
   </div>
   <div id="child3"
   className=" flex flex-col place-items-center my-10  hover:bg-gray-900 border-indigo-900 bg-[#1b263b] text-zinc-50  md:p-7 
   space-y-5 p-2 px-4 rounded-[5px] h-90"
   >

  <img className=" border-2 size-20 rounded-full items-center" src="./src/img4.png" alt="" />
   <h2 className="font-semibold text-2xl text-cyan-200 ">Fuad malik </h2>
   <h2 className="font-semibold  text-cyan-200 ">IT eng</h2>
<p className="text-left ml-5 ">"Working with Iconify was a game-changer! They built our MVP in React with a stunning UI and seamless state management. The app
     launched ahead of schedule, and their code was so clean we scaled effortlessly."</p>
   </div>
   <div id="child4"
   className=" flex flex-col place-items-center my-10  hover:bg-gray-900 border-indigo-900 bg-[#1b263b] text-zinc-50  md:p-7 
   space-y-5 p-2 px-4 rounded-[5px] h-90"
   >

  <img className=" border-2 size-20 rounded-full items-center" src="./src/img3.jpg" alt="" />
   <h2 className="font-semibold text-2xl text-cyan-200 ">Danil sami </h2>
   <h2 className="font-semibold  text-cyan-200 ">UI,UX Designer</h2>
<p className="text-left ml-5 ">"Working with Iconify was a game-changer! They built our MVP in React with a stunning UI and seamless state management. The app
     launched ahead of schedule, and their code was so clean we scaled effortlessly."</p>
   </div>


     
     
 
     
  


    
</div>



</div>

{/* section 3 CTA section with img/btn/heading/social icnsr */}

<div id="parent_panner"
className="bg-gradient-to-l from-indigo-900 to-black  my-380
flex flex-col  mx-5 place-items-center items-center
py-10
text-center
md:my-160
space-y-10
rounded-2xl

"

>

<div id="item1">

<h1 className=" capitalize font-semibold text-4xl text-cyan-200 text-center">get full access to your apps </h1>


</div >
<div id="item2"
className="flex flex-col w-full items-center space-y-6.5"

>

<img className=" rounded-2xl  w-200 border-1 border-indigo-300" src="./src/banner.png " alt="" />
<button className=" mx-6  py-1 px-10 w-50  rounded  border bg-cyan-100"> Get Now  </button>
<div 
className="flex justify-center space-x-10 text-indigo-300">

<i class="fa-brands fa-discord"></i>
<i class="fa-brands fa-linkedin">  </i>
<i class="fa-brands fa-github"></i>


</div>

</div>

</div>

{/* footer */}
<div id="prent" 
className="    md:h-15 flex flex-col items-center text-center  w-screen  absolute md:w-screen  top-1160  md:top-790 md:flex md:flex-col md:items-center md:text-center">
<div>
<div className=" md:flex md:justify-center flex  space-x-5 text-white md:space-x-6">
   <Link className="font-bold ..." to="/">Iconify</Link> 

    <Link className="hover:underline" to="/">Home</Link>
    <Link className="navlinks" to="/projects">Projects</Link>
    <Link className="navlinks" to="/contact">Contact</Link>
    <Link className="navlinks" to="/blog">Blog</Link>
</div>

<div className=" text-white p-4 text-center">
    &copy; {new Date().getFullYear()} Iconify. All rights reserved.
</div>
</div>
</div>

    </div>
)
}

export default Home;