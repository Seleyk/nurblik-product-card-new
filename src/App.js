import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SingleCard from './pages/SingleCard';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import Carousel from './pages/Carousel';
import SliderNew from './pages/SliderNew';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Slideshow from './pages/Slideshow';
import CardDetails from './pages/Details';


const App = () => {
  let location = useLocation();

  return (
        <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={location.pathname} >
                <Route index path="/" element={<Home />} />
                <Route path="/singlecard" element={<SingleCard />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} /> 
                <Route path="/details" element={<CardDetails />} /> 
                <Route path="/cards" element={<Cards />} /> 
                <Route path="/profile/:id" element={<Profile />} /> 
                <Route path="/carousel/" element={<Carousel />} />
                <Route path="/slider/" element={<SliderNew/>} />
                <Route path="/slideshow" element={<Slideshow/>} />
            </Routes>
        </AnimatePresence>
  );
}

export default App