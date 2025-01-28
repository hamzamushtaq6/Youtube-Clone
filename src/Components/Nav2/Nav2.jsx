import React, { useRef } from 'react';
// import './Nav2.css';

const categories = [
  'All', 'Wickets', 'Music', 'Podcasts', 'Skills',
  'Mixes', 'OnePlus', 'FC Barcelona', 'Gaming',
  'Live', 'Restaurants', 'Movies', 'Technology',
  'Fashion', 'Travel', 'Health', 'Sports','Youtube','Babar Azam',
  'Information','Programming','Physics','Mathematics', 'Data',
  'Films','Upskill','ML','AI','Cats',
];


const Nav2 = ({selectedCategory,setSelectedCategory}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 5; 
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  function onClickItem (e) {
    setSelectedCategory(e)
  }

  return (
    <div className="category-container">
      <button className="scroll-button left" onClick={() => scroll('left')}>
        &#8249;
      </button>
      <div className="category" ref={scrollRef}>
        <div className="cat">
          {categories.map((category, index) => (
           <button
              key={index}
              onClick={() => onClickItem(category)} // Pass the clicked category
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <button className="scroll-button right" onClick={() => scroll('right')}>
        &#8250;
      </button>
    </div>
  );
};

export default Nav2;