import React from "react";
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch, Route
  } from "react-router-dom";

import { GlobalStyle } from "./globalstyles";
import { productData, productDataTwo, productDatathree, productDatafour, productDatafive, productDatasix, productDataseven } from './components/Products/Data.js';
import Footer from './components/Footer';
import Hamburgers from './components/Hamburgers';
import Home from "./components/Home";
import Burgerscombos from "./components/Burgerscombos";
import Sausages from "./components/Sausages";
import Specials from "./components/Specials/";
import Drinks from "./components/Drinks/";

function App() {
  console.log (productData)
  console.log (productDataTwo)
  console.log (productDatathree)
  console.log (productDatafour)
  console.log (productDatafive)
  console.log (productDatasix)
  console.log (productDataseven)
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
     
      <Switch/>
      <Route path='/' exact component={Home}/>
      <Route path='/Hamburguesas'  component={Hamburgers} />
      <Route path='/CombosHamburguesas' component={Burgerscombos}/>
      <Route path='/Chorizos'  component={Sausages} />
      <Route path='/Especiales'  component={Specials} />
      <Route path='/Bebidas'  component={Drinks} />
       
       
      <Switch/>
      
    
      <Footer/>
      </Router>
  );
}

export default App;