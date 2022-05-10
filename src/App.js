import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Card from "./Components/Card/Card";
import Carousel from "./Components/Carousel/Carousel";
import { Route, Navigate, Routes} from 'react-router-dom';
import Card2 from './Components/Card/Card2';
import Footer from './Components/Footer/Footer';
export default function App() { 
  return (
    <div>
      
     <Routes>
       <Route path='/' element={<Navigate to="/homepage"/>}/>
       <Route path="/homepage" element={<><Navbar/><Carousel/><Card/><Footer/></>}/>
    
      
   </Routes>
    </div>
  )
}
