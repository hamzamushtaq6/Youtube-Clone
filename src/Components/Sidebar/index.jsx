import React from 'react'
import home from '../../assets/home.png'
import shorts from '../../assets/Shorts.png'
import subs from '../../assets/subscriprion.png'
import ytm from '../../assets/YTM.png'
import me from '../../assets/profile.jpg'
import dwn from '../../assets/dwn.jpg'
import { Link } from 'react-router-dom'
function index() {
  return (
    <div className='dummy'>
    <div className='shortcut-links'>
     <div className='side-link'> 
    <Link to="/">
    <img src={home} alt='' /><p>Home</p>
     </Link>
      
     </div> 
     <div className='side-link'>
      <img src={shorts} alt='' /><p>Shorts</p>
     </div>
     <div className='side-link'>
      <img src={subs} alt='' /><p>Subscriprion</p>
     </div>
     <div className='side-link'>
      <img src={ytm} alt='' /><p>Youtube Music</p>
     </div>
     <div className='side-link'>
      <img src={me} alt='' /><p>Me</p>
     </div>
     <div className='side-link'>
      <img src={dwn} alt='' /><p>Downloads</p>
     </div>
    </div> 
    </div>
  )
}

export default index
