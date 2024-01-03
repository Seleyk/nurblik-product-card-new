import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SingleCard from './pages/SingleCard';
import Details from './pages/Details';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import Carousel from './pages/Carousel';
import SliderNew from './pages/SliderNew';
import Register from './pages/Register';
import Login from './pages/Login';


const App = () => {
  let location = useLocation();

  return (
        <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={location.pathname} >
                <Route index path="/singlecard" element={<SingleCard />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} /> 
                <Route path="/details" element={<Details />} /> 
                <Route path="/cards" element={<Cards />} /> 
                <Route path="/profile/:id" element={<Profile />} /> 
                <Route path="/carousel/" element={<Carousel />} />
                <Route path="/slider/" element={<SliderNew/>} />
            </Routes>
        </AnimatePresence>
  );
}

export default App