import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import MainPage from './components/pages/MainPage';
import ShoppingCart from './components/pages/ShoppingCart';
import Formular from './components/pages/Formular';
import Navbar from './components/pages/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';


function App()
{
  return(
  <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes> 
      <Route path="/" element={<MainPage/>}/>
      <Route path="/ShoppingCart" element={<ShoppingCart id={0} title={''} author={''} pages={0} price={0}/>}/>
      <Route path="/Form" element={<Formular/>}/>
      </Routes>
    </Container>
  </ShoppingCartProvider>
  );
}



export default App;