import { Link } from "react-router-dom";

let Blog=()=>{

    return(
    

<div className=" bg-gradient-to-br from-indigo-900 to-black">

<div id="heading-praent" className="
flex flex-col items-center text-center
    text-white   w-screen mx-auto
    mt-10 pt-20
    space-y-3
">

<h1 className="text-white text-5xl font-bold"> Recent Blogs & More </h1>
<p className=" text-white font-bold "> Get the lettest Blogs  and track  to develope your self </p>

</div>



<div id="tegs" className="
md:flex md:justify-center md:space-x-20 md:mt-10 cursor-pointer grid grid-cols-3 space-y-4 mt-15 place-items-center text-center">
<h2 className="bg-gray-300 w-10 h-5 rounded-3xl text-center"> ALL</h2>
<h2 className="bg-gray-300 w-10 h-5 rounded-3xl text-center"> Ai</h2>
<h2 className="bg-gray-300 w-10 h-5 rounded-3xl text-center"> IT</h2>
<h2 className="bg-gray-300 w-30 h-7 rounded-3xl text-center"> Programming</h2>
<h2 className="bg-gray-300 w-38 h-7 rounded-3xl text-center "> Mechine Learning</h2>
<h2 className="bg-gray-300 w-15 h-5 rounded-3xl text-center"> UI?UX</h2>



</div>
<div id="blog-cards"
className="  md:grid md:grid-cols-3 grid grid-cols-1 
space-y-2.5 md:place-items-center w-screen


"

>

<div
className=" text-white  border-black  md:h-100 md:w-80  md:grid md:grid-rows-[50%_30%_20%]
h-110 mx-14 space-x-1 md:space-x-4
rounded-[6px]
grid grid-rows-[50%_30%_20%]
mt-4
md:mt-14
bg-gray-900
">
<img className="rounded-t-md  self-center  w-full   " src="./src/js.png" alt="" />
<h2 className=" md:mt-10 mt-6 ml-3  text-white md:ml-2"> "10 Must-Know JavaScript Tips to Boost Your Coding Efficiency in 2024" </h2>

<i class="fa-solid fa-arrow-right ml-3   text-white md:mt-4 md:ml-2"> </i>
</div>
{/*  */}
<div
className=" text-white bg-gray-900 border-black  md:h-100 md:w-80  md:grid md:grid-rows-[50%_30%_20%]
h-110 mx-14 space-x-1 md:space-x-4
rounded-[6px]
grid grid-rows-[50%_30%_20%]
mt-4
md:mt-14
">
<img className="rounded-t-md p-[0.5px]" src="./src/digit.png" alt="" />
<h2 className=" md:mt-10 mt-6 ml-3  text-white md:ml-2"> "How to Leverage AI for Smarter Digital Marketing Campaigns"</h2>

<i class="fa-solid fa-arrow-right ml-3   text-white md:mt-4 md:ml-2"> </i>
</div>

<div
className=" text-white bg-gray-900 border-black  md:h-100 md:w-80  md:grid md:grid-rows-[50%_30%_20%]
h-110 mx-14 space-x-1 md:space-x-4
rounded-[6px]
grid grid-rows-[50%_30%_20%]
mt-4
md:mt-14
">
<img className="rounded-t-md p-[0.5px]" src="./src/pro.png" alt="" />
<h2 className=" md:mt-10 mt-6 ml-3  text-white md:ml-2"> he Science-Backed Morning Routine for Peak Productivity and Mental Clarity </h2>

<i class="fa-solid fa-arrow-right ml-3   text-white md:mt-4 md:ml-2"> </i>
</div>
<div
className=" text-white bg-gray-900 border-black  md:h-100 md:w-80  md:grid md:grid-rows-[50%_30%_20%]
h-110 mx-14 space-x-1 md:space-x-4
rounded-[6px]
grid grid-rows-[50%_30%_20%]
mt-4
md:mt-14
">
<img className="rounded-t-md p-[0.5px]" src="./src/stra.png" alt="" />
<h2 className=" md:mt-10 mt-6 ml-3  text-white md:ml-2">"Crypto vs. Stocks: Which Investment Strategy Wins in 2024?"</h2>

<i class="fa-solid fa-arrow-right ml-3   text-white md:mt-4 md:ml-2"> </i>
</div>
<div
className="md:m-2 text-white   md:h-100 md:w-80  md:grid md:grid-rows-[50%_30%_20%]
h-110 mx-14 space-x-1 md:space-x-4
rounded-[6px]
grid grid-rows-[50%_30%_20%]
mt-4
md:mt-14
bg-gray-900
">
<img className="rounded-t-md p-[0.5px]" src="./src/min.png" alt="" />
<h2 className=" md:mt-10 mt-6 ml-3  text-white md:ml-2">"Minimalism for Beginners: How to Declutter Your Life and Reduce Stress"</h2>

<i class="fa-solid fa-arrow-right ml-3   text-white md:mt-4 md:ml-2"> </i>
</div>
<div
className=" text-white bg-gray-900 border-black  md:h-100 md:w-80  md:grid md:grid-rows-[50%_30%_20%]
h-110 mx-14 space-x-1 md:space-x-4
rounded-[6px]
grid grid-rows-[50%_30%_20%]
mt-4
md:mt-14
">
<img className="rounded-t-md p-[0.5px]" src="./src/disti.png" alt="" />
<h2 className=" md:mt-10 mt-6 ml-3  text-white md:ml-2"> "Hidden Gems in Europe: 5 Underrated Destinations You Need to Visit" </h2>

<i class="fa-solid fa-arrow-right ml-3   text-white md:mt-4 md:ml-2"> </i>
</div>




</div>
{/* foo */}

<div id="prent" 
className="    md:h-15 flex flex-col items-center text-center  w-screen  absolute md:w-screen  top-1160  md:top-340 md:flex md:flex-col md:items-center md:text-center">
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

export default Blog;