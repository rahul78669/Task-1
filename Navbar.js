import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Gallery from "./Gallery";
import "./index.css";

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <h2>Food's Resturant</h2>
            </div>
            <div className="gallery">
                <h1>Welcome to Food's Kitchen</h1>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="Gallery" element={<Gallery />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};
export default Navbar;