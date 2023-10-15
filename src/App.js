import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SingleCard from './pages/SingleCard';
import Details from './pages/Details';
import Cards from './pages/Cards';



const App = () => {
  let location = useLocation();

  return (
        <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={location.pathname} >
                <Route index path="/" element={<SingleCard />} />
                <Route path="/details" element={<Details />} /> 
                <Route path="/cards" element={<Cards />} /> 
            </Routes>
        </AnimatePresence>
  );
}

export default App