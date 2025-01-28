import React, { useState } from 'react';
import Nav2 from '../Nav2/Nav2';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/index'
import Shorts from '../Shorts/shorts'
import ShortsCategoryBar from '../Shorts/shortsbar';
import index from '../Video';
const Home = () => {
    const [selectedCategory, setSelectedCategory]= useState("All")
    return (
        <div>
            <Navbar/>
            <Nav2 selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Sidebar />
            <Feed selectedCategory={selectedCategory} />
            {/* <ShortsCategoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> */}
            {selectedCategory =="All"? <Shorts selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />:undefined}
            
        </div>
    );
};

export default Home;