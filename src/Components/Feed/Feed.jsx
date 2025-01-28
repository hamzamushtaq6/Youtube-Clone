import React from 'react';
// import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';
import Nav2 from '../Nav2/Nav2';

const Feed = ({selectedCategory = ""}) => {
  // Array of thumbnails with unique titles
  const thumbnails = [
    { id: 1, src: thumbnail1, title: 'Learn Full Stack Development', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Technology'] },
    { id: 2, src: thumbnail2, title: 'Web Development for Beginners', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Technology'] },
    { id: 3, src: thumbnail3, title: 'Master React in 30 Days', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Music'] },
    { id: 4, src: thumbnail4, title: 'JavaScript Tips and Tricks', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Cricket'] },
    { id: 5, src: thumbnail5, title: 'Python Programming for Everyone', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Fashion'] },
    { id: 6, src: thumbnail6, title: 'Build Your First Mobile App', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Music'] },
    { id: 7, src: thumbnail7, title: 'Introduction to Machine Learning', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','OnePlus'] },
    { id: 8, src: thumbnail8, title: 'Become a Data Scientist', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Travel'] },
    { id: 9, src: thumbnail1, title: 'Learn Full Stack Development', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Cats'] },
    { id: 10, src: thumbnail2, title: 'Web Development for Beginners', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Music'] },
    { id: 11, src: thumbnail3, title: 'Master React in 30 Days', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Music'] },
    { id: 12, src: thumbnail4, title: 'JavaScript Tips and Tricks', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','AI'] },
    { id: 13, src: thumbnail5, title: 'Python Programming for Everyone', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','ML'] },
    { id: 14, src: thumbnail6, title: 'Build Your First Mobile App', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Upskill'] },
    { id: 15, src: thumbnail7, title: 'Introduction to Machine Learning', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Films'] },
    { id: 16, src: thumbnail8, title: 'Become a Data Scientist', channel: 'GreatStack', views: '16k views; 2 days ago',category:['All','Data'] },
  ];

  console.log(selectedCategory)
  return (
    <div className='feed'>
    {/* {JSON.stringify(selectedCategory)} */}
    
      {thumbnails.filter((i)=>( 
          i.category.includes(selectedCategory)
        ))
      .map((thumbnail) => (
         <Link to="/video" key={thumbnail.id}>
        <div className='card'>
          <img src={thumbnail.src} alt='' />
          <h2>{thumbnail.title}</h2>
          <h3>{thumbnail.channel}</h3>
          <p>{thumbnail.views}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;










