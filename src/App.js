import React from "react";
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch, Route
  } from "react-router-dom";

import { GlobalStyle } from "./globalstyles";
import { productData, productDataTwo, productDatathree } from './components/Products/Data.js';
import Footer from './components/Footer';
import Hamburgers from './components/Hamburgers';
import Home from "./components/Home";
function App() {
  console.log (productData)
  console.log (productDataTwo)
  console.log (productDatathree)
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
     
      <Switch/>
      <Route path='/' exact component={Home}/>
      <Route path='/HAMBURGUESAS'  component={Hamburgers} />
      
       
       
      <Switch/>
      
    
      <Footer/>
      </Router>
  );
}

export default App;