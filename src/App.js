import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SingleCard from './pages/SingleCard';
import Details from './pages/Details';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import Carousel from './pages/Carousel';


const App = () => {
  let location = useLocation();

  return (
        <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={location.pathname} >
                <Route index path="/" element={<SingleCard />} />
                <Route path="/details" element={<Details />} /> 
                <Route path="/cards" element={<Cards />} /> 
                <Route path="/profile/:id" element={<Profile />} /> 
                <Route path="/carousel/" element={<Carousel />} /> 
            </Routes>
        </AnimatePresence>
  );
}

export default App