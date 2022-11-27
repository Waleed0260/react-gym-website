import './App.css';
import React from 'react';
import Hero from "./components/Hero/Hero"
import Programs from "./components/Programs/Programs"
import Reasons from "./components/Reasons/Reasons"
import Plans from "./components/Plans/Plans"
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Foter from './components/Footer/Footer';
import Contact from './components/Contact/Contact'
import { Route, Routes } from "react-router-dom"


const App = ()=> {
  return (
    <div className="App">
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Foter/>
    </>
    </div>
  );
}

export default App;









// 
// {/* <Hero/>
// <Programs/>
// <Reasons/>
// <Plans/>
// <Testimonials/>
// <Join/>
// <Footer/>     </div>
// */}