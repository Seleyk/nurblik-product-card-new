import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SingleCard from "./pages/SingleCard";
import Cards from "./pages/Cards";
import Profile from "./pages/Profile";
import Carousel from "./pages/Carousel";
import SliderNew from "./pages/SliderNew";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Slideshow from "./pages/Slideshow";
import CardDetails from "./pages/Details";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Grid from "./pages/Grid";
import NewFooter from "./pages/NewFooter";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  let location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index path="*" element={<NotFound />} />
        <Route index path="/" element={<Home />} />
        <Route path="/singlecard" element={<SingleCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<CardDetails />} />
        <Route path="/collections/:id" element={<Cards />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/carousel/" element={<Carousel />} />
        <Route path="/slider/" element={<SliderNew />} />
        <Route path="/slideshow" element={<Slideshow />} /> 
        <Route path="/grid" element={<Grid />} /> 
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <NewFooter />
    </AnimatePresence>
  );
};

export default App;
