import React from "react";
// import "../Shorts/shorts.css";
import st_logo from "../../assets/Shorts.png"
import dawa from "../../assets/DWW.jpeg"
import sauceImage from "../../assets/sauce.jpeg"
import morty from '../../assets/Morty.jpg'
import amir from '../../assets/Amir.jpeg'
import leo from '../../assets/LEO.jpeg'
import fit from '../../assets/MM.jpeg'
import ShortsCategoryBar from "./shortsbar";
// Dummy data for shorts



const ShortsSection = ({selectedCategory = ""}) => {
  const shortsData = [
  {
    id: 1,
    thumbnail: dawa,
    title: "Muslim and Jew, Interesting discussion | Hashim",
    views: "134K views",
    category: ["Islam","All"], // Corrected category assignment
  },
  {
    id: 2,
    thumbnail: sauceImage,
    title: "Fish and Chips with Tartar Sauce",
    views: "1.9M views",
    category: ["Fitness","All"], // Corrected category assignment
  },
  {
    id: 3,
    thumbnail: morty,
    title: "Morty went to island #rickandmorty",
    views: "623K views",
    category: ["Fitness","All"], // Corrected category assignment
  },
  {
    id: 4,
    thumbnail: fit,
    title: "Proven method to grow muscle",
    views: "137K views",
    category:["Cricket","All"], // Corrected category assignment
  },
  {
    id: 5,
    thumbnail: amir,
    title: "Starc Messing with Amir 😈",
    views: "4.1M views",
    category: ["Islam", "All"], // Corrected category assignment
  },
  {
    id: 6,
    thumbnail: leo,
    title: "Argentina are World Champions",
    views: "41M views",
    category: ["Cricket","All"], // Corrected category assignment
  },
];
  console.log(selectedCategory)
  return (
    <div className="shorts-section">
      <div className="shorts-header">
        <h2>
          <span className="shorts-logo">
            <img src={st_logo} alt="Shorts Logo" className="shorts-logo-img" />
          </span> 
          Shorts
        </h2>
      </div>
      {/* {JSON.stringify(shortsData)} */}

      <div className="shorts-grid">
        {shortsData.filter((i)=>( 
          i.category.includes(selectedCategory)
        )).map((short) => (
          <div key={short.id} className="short">
            <img src={short.thumbnail} alt={short.title} className="short-thumbnail" />
            <div className="short-info">
              <h4 className="short-title">{short.title}</h4>
              <p className="short-views">{short.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsSection;
