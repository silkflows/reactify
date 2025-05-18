
import { Link } from "react-router-dom";


let Projects = ()=>{
 



    const projects = [
        {
          id: 1,
          title: "E-Commerce Website",
          description: "A full-stack e-commerce platform with React, Node.js, and MongoDB.",
          tags: ["React", "Node.js", "MongoDB"],
          link: "/projects/ecommerce",
        },
        {
          id: 2,
          title: "Portfolio Website",
          description: "A responsive portfolio built with Next.js and Tailwind CSS.",
          tags: ["Next.js", "Tailwind CSS"],
          link: "/projects/portfolio",
        },
        {
          id: 3,
          title: "Machine Learning Course",
          description: "Completed an advanced ML course with TensorFlow and Python.",
          tags: ["Python", "TensorFlow", "AI"],
          link: "/courses/ml",
        },
      ];
    
      return (
        <div className="min-h-screen  bg-gradient-to-br from-indigo-900 to-black mt-5 md:mt-10  text-black   py-12 px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">My Projects & Courses</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              A collection of my work, personal projects, and completed courses.
            </p>
          </div>
    
          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1b263b] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
    
          {/* Call-to-Action Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Want to Collaborate?
            </h2>
            <Link
              to="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>

          {/* footer */}
          <div id="prent" 
className="    md:h-15 flex flex-col items-center text-center  w-screen  absolute md:w-screen  top-300  md:top-170 md:flex md:flex-col md:items-center md:text-center">
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
      );
}

export default Projects;