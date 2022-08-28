import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadCards from './components/HeadCards';
import Food from './components/Food';
import Category from './components/Category';
import Footer from './components/Footer';
import EndFooter from './components/EndFooter';

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeadCards/>
        <Food/>
        <Category/>
        <Footer/>
        <EndFooter/>
    </div>
  );
}

export default App;
