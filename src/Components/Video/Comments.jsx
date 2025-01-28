import React from 'react';
import '../../index.css';
import sort from '../../assets/sort.jpg';
import cmt from '../../assets/DWW.jpeg';
import comment1 from '../../assets/tom.png';
import comment2 from '../../assets/Amir.jpeg';
import comment3 from '../../assets/simon.png';
import comment4  from '../../assets/Create.jpg' ;
import comment5 from '../../assets/YTM.png' ;
import comment6 from '../../assets/MM.jpeg' ;
import comment7 from '../../assets/blogs.png'; 
import comment8 from '../../assets/cameron.png'; 
import comment9 from '../../assets/cast.png' ;
import comment10 from '../../assets/entertainment.png'; 
import comment11 from '../../assets/thumbnail8.png' ;
import comment12 from '../../assets/thumbnail6.png' ;
import comment13 from '../../assets/thumbnail3.png'  ;
import options from '../../assets/TD.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import reply from '../../assets/reply.png'
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
      text: "I'm originally a Hindu woman and after studying Bible and Quran for two years I had converted to Islam last year on 21 April 2023 at age 64.",
      likes: 14000,
      replies: 589,
      src: comment2,
    },
    {
      id: 3,
      username: '27298',
      time: '9 months ago',
      text: 'My wife reverted 20 years ago, and today, she is able to read Quran Prays 5 times a day and never misses tahajud.',
      likes: 4800,
      replies: 115,
      src: comment3,
    },
    
  {
    id: 4,
    username: '98271',
    time: '1 year ago',
    text: 'This video changed my perspective!',
    likes: '52k',
    replies: 230,
    src: comment4,
  },
  {
    id: 5,
    username: '47362',
    time: '6 months ago',
    text: 'Can someone explain this part? 🤔',
    likes: '36k',
    replies: 90,
    src: comment5,
  },
  {
    id: 6,
    username: '11082',
    time: '3 weeks ago',
    text: 'Loved it! 🔥',
    likes: '15k',
    replies: 45,
    src: comment6,
  },
  {
    id: 7,
    username: '75924',
    time: '2 months ago',
    text: 'The visuals here are stunning!',
    likes: '28k',
    replies: 120,
    src: comment7,
  },
  {
    id: 8,
    username: '20493',
    time: '5 days ago',
    text: 'Amazing content as always!',
    likes: '8k',
    replies: 18,
    src: comment8,
  },
  {
    id: 9,
    username: '11938',
    time: '4 months ago',
    text: 'Why isn’t this going viral?!!',
    likes: '19k',
    replies: 75,
    src: comment9,
  },
  {
    id: 10,
    username: '37856',
    time: '11 months ago',
    text: 'This made my day. Thank you! 😊',
    likes: '62k',
    replies: 300,
    src: comment10,
  },
  {
    id: 11,
    username: '59312',
    time: '2 years ago',
    text: 'I learned so much from this.',
    likes: '80k',
    replies: 410,
    src: comment11,
  },
  {
    id: 12,
    username: '84721',
    time: '10 days ago',
    text: 'Anyone else watching this on repeat?',
    likes: '10k',
    replies: 32,
    src: comment12,
  },
  {
    id: 13,
    username: '69230',
    time: '8 months ago',
    text: 'Legendary upload 🔥🔥',
    likes: '45k',
    replies: 200,
    src: comment13,
  }
]


  return (
    <div className='main-container'>
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
      <div className="right-hand-section">
        <nav>
        <ul>
          <li>All</li>
          <li>Technology</li>
          <li>JavaScript</li>
          <li>Library</li>
          <li>Cricket</li>
        </ul>
      </nav>
      </div>
    </div>

  );
};

export default Comments;
