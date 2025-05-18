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

 import { BrowserRouter, Routes, Route, useInRouterContext } from "react-router-dom";

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