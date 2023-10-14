import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './pages/Card';
import Details from './pages/Details';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AnimatePresence initial={false} mode='wait'>
            <Routes>
                <Route path="/" element={<Card />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App