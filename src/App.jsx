import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/index';
import Video from './Components/Video';

const App = () => {
    return (
        <Router>
            <div>
                {/* Define Routes */}
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route path="/video" element={<Video />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                    {/* <Route path='' */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;



