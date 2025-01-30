import React from 'react';
import '../../index.css';
import sort from '../../assets/sort.jpg';
import cmt from '../../assets/DWW.jpeg';
import comment1 from '../../assets/tom.png';
import comment2 from '../../assets/Amir.jpeg';
import comment3 from '../../assets/simon.png';
import comment4 from '../../assets/Create.jpg';
import comment5 from '../../assets/YTM.png';
import comment6 from '../../assets/MM.jpeg';
import comment7 from '../../assets/blogs.png';
import comment8 from '../../assets/cameron.png';
import comment9 from '../../assets/cast.png';
import comment10 from '../../assets/entertainment.png';
import comment11 from '../../assets/thumbnail8.png';
import comment12 from '../../assets/thumbnail6.png';
import comment13 from '../../assets/thumbnail3.png';
import options from '../../assets/TD.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import reply from '../../assets/reply.png';
import recommendedVideo1 from '../../assets/mike.png';
import recommendedVideo2 from '../../assets/thumbnail8.png';
import recommendedVideo3 from '../../assets/thumbnail2.png';
import short1 from "../../assets/LEO.jpeg"
import short2 from "../../assets/Amir.jpeg"
import short3 from "../../assets/thumbnail2.png"
import yts from "../../assets/Shorts.png"
const Comments = () => {
  // Array of comments with user details
  const comments = [
    {
      id: 1,
      username: 'JMEstrada-x4o',
      time: '8 months ago',
      text: 'I am a Catholic before and for the love of Jesus I study about his life and background, that leads me to Islam. Now I am a Muslim for 3 yrs and I am very happy and contented.',
      likes: 7000,
      replies: 170,
      src: comment1,
    },
    {
      id: 2,
      username: 'Shushmita_Guhathakurta',
      time: '9 months ago',
      text: "I'm originally a Hindu woman and after studying the Bible and Quran for two years, I converted to Islam last year on April 21, 2023, at age 64.",
      likes: 14000,
      replies: 589,
      src: comment2,
    },
    {
      id: 3,
      username: '27298',
      time: '9 months ago',
      text: 'My wife reverted 20 years ago, and today, she is able to read the Quran, prays five times a day, and never misses Tahajud.',
      likes: 4800,
      replies: 115,
      src: comment3,
    },
    {
      id: 4,
      username: '98271',
      time: '1 year ago',
      text: 'This video changed my perspective!',
      likes: 52000,
      replies: 230,
      src: comment4,
    },
    {
      id: 5,
      username: '47362',
      time: '6 months ago',
      text: 'Can someone explain this part? 🤔',
      likes: 36000,
      replies: 90,
      src: comment5,
    },
    {
      id: 6,
      username: '11082',
      time: '3 weeks ago',
      text: 'Loved it! 🔥',
      likes: 15000,
      replies: 45,
      src: comment6,
    },
    {
      id: 7,
      username: '75924',
      time: '2 months ago',
      text: 'The visuals here are stunning!',
      likes: 28000,
      replies: 120,
      src: comment7,
    },
    {
      id: 8,
      username: '20493',
      time: '5 days ago',
      text: 'Amazing content as always!',
      likes: 8000,
      replies: 18,
      src: comment8,
    },
    {
      id: 9,
      username: '11938',
      time: '4 months ago',
      text: 'Why isnt this going viral?!!',
      likes: 19000,
      replies: 75,
      src: comment9,
    },
    {
      id: 10,
      username: '37856',
      time: '11 months ago',
      text: 'This made my day. Thank you! 😊',
      likes: 62000,
      replies: 300,
      src: comment10,
    },
    {
      id: 11,
      username: '59312',
      time: '2 years ago',
      text: 'I learned so much from this.',
      likes: 80000,
      replies: 410,
      src: comment11,
    },
    {
      id: 12,
      username: '84721',
      time: '10 days ago',
      text: 'Anyone else watching this on repeat?',
      likes: 10000,
      replies: 32,
      src: comment12,
    },
    {
      id: 13,
      username: '69230',
      time: '8 months ago',
      text: 'Legendary upload 🔥🔥',
      likes: 45000,
      replies: 200,
      src: comment13,
    },
  ];

  const recommendedVideos = [
    {
      id: 1,
      title: 'React Tutorial for Beginners',
      channel: 'CodeWithHarry',
      views: '1.2M views',
      time: '2 weeks ago',
      thumbnail: recommendedVideo1,
    },
    {
      id: 2,
      title: 'JavaScript Crash Course',
      channel: 'Traversy Media',
      views: '950K views',
      time: '1 month ago',
      thumbnail: recommendedVideo2,
    },
    {
      id: 3,
      title: 'CSS Grid Layout Tutorial',
      channel: 'Web Dev Simplified',
      views: '780K views',
      time: '3 months ago',
      thumbnail: recommendedVideo3,
    },
  ];
  const shorts = [
    {
      id: 1,
      title: 'Quick React Tips',
      views: '500K views',
      thumbnail: short1,
    },
    {
      id: 2,
      title: 'JavaScript in 60 Seconds',
      views: '450K views',
      thumbnail: short2,
    },
    {
      id: 3,
      title: 'CSS Tricks You Should Know',
      views: '300K views',
      thumbnail: short3,
    },
  ];




  return (
    <div className="main-container">
      <div className="comments-section">
        {/* Heading with the total number of comments */}
        <h3>7,892 Comments</h3>

        {/* Sort-by section */}
        <div className="sort-by">
          <img src={sort} alt="Sort" className="sort-icon" />
          <p>Sort by</p>
        </div>

        {/* Add comment input */}
        <div className="can-comment">
          <img src={cmt} alt="User" className="user-icon1" />
          <input type="text" placeholder="Add a comment..." className="comment-input" />
        </div>

        {/* Render each comment using map */}
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            {/* Comment header */}
            <div className="comment-header">
              <img src={comment.src} alt="User" className="user-icon" />
              <p className="username">{comment.username}</p>
              <p className="time">{comment.time}</p>
              <img src={options} alt="Options" className="options-icon" />
            </div>

            {/* Comment text */}
            <p className="comment-text">{comment.text}</p>

            {/* Comment actions */}
            <div className="comment-actions">
              <img src={like} alt="Like" className="action-icon" />
              <p>{comment.likes}</p>
              <img src={dislike} alt="Dislike" className="action-icon" />
              <p>Reply</p>
              <img src={reply} alt="Replies" className="action-icon" />
              <p>{comment.replies} replies</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Videos Section */}
      <div className="right-hand-section">
        <div className="video-section">
          {recommendedVideos.map((video) => (
            <div className="recommended-video" key={video.id}>
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <div className="video-info">
                <h4 className="video-title">{video.title}</h4>
                <p className="video-channel">{video.channel}</p>
                <p className="video-stats">{video.views} • {video.time}</p>
              </div>
            </div>
          ))}
        </div>
      
      {/* SHORTS */}
 <div className="shorts-section">
        <h3>Shorts</h3>
        <img src={yts} alt="Shorts" className="shorts-image" />
        <div className="shorts-container">
          {shorts.map((short) => (
            <div className="short" key={short.id}>
              <img src={short.thumbnail} alt={short.title} className="short-thumbnail" />
              <h4 className="short-title">{short.title}</h4>
              <p className="short-stats">{short.views}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Comments;
