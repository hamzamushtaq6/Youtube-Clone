import React,{useState} from 'react'
import '../../index.css'
import icon from '../../assets/thumbnail3.png'
import Bell from '../../assets/bell.jpg'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'
import Share from '../../assets/share.png'
import Download from  '../../assets/dwn.jpg'
import theater from '../../assets/TIC.png'
const Play = () => {
  const [isTheaterMode, setIsTheaterMode]= useState(false);
  const toggleTheaterMode = ()=>{
    setIsTheaterMode(!isTheaterMode);
  };
  
  return (
    <div className={`container ${isTheaterMode ? "theater-mode":""}`}>
      {/* Video Player Area */}
      <div className="play-area">
        <button className="theater-button" onClick={toggleTheaterMode}>
        {isTheaterMode ? "Exit Theater Mode":"Theater Mode"}
        </button>
        <video controls className="video-player">
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3>First Video Area for my YouTube Project</h3>
      </div>
      <div className="channel-info">
      {/* Channel Info Section */}
      <div className="channel-details">
        <img
          src={icon}
          alt="Channel Icon"
          className="channel-icon"
        />
        <div className="channel-text">
          <h4 className="channel-name">Towards Eternity</h4>
          <p className="subscribers-count">2.6M subscribers</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="channel-actions">
        <button className="join-button">Join</button>
        <button className="subscribe-button"> <img src={Bell}/>Subscribe</button>
        <button className="interaction-button"><img src={Like}/>35K<img src={Dislike}/></button>
        <button className="share-button"><img src={Share}/>Share</button>
        <button className="download-button"><img src={Download}/>Download</button>
        <button className="more-button">...</button>
      </div>
      
    </div>
    </div>
  );
}

export default Play
