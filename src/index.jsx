import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Blog from './pages/blog';
import Contact from './pages/contact';
import Home from './pages/home';
import Navigation from './pages/header';
import Projects from './pages/projects';

 import './index.css'
 
 
let App =()=>{

  return(
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route   path='/' element={<Home/>}/>
    <Route   path='projects' element={<Projects/>}/>
    <Route   path='blog' element={<Blog/>}/>
    <Route   path='contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )

  
}

   

  





export default App;