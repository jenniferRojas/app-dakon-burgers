import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router } 
from 'react-router-dom';
import { GlobalStyle } from "./globalstyles";
import Body from './components/Body';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Body />
      <Products heading='FAVORITAS DAKON' data={productData} />
      <Feature />
      
      <Products heading='LA MEJOR COMPAÑIA' data={productDataTwo} />
     <Footer/>
    </Router>
  );
}

export default App;