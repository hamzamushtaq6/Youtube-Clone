import React from 'react'
import '../../index.css' 
import menu_icon from '../../assets/hmbrg.png'
import logo from '../../assets/YOT.jpg'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/mike.png'
import more_icon from '../../assets/Create.jpg'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/HMZZ.jpg'

const navplay = () => {
  return (
    <nav className='flex-div'>
    <div className='nav-left flex-div'>
        <img className='menu-icon' src={menu_icon} alt="" />
        <img className='logo' src={logo} alt="" />
    </div>  

    <div className='nav-middle flex-div'>
    <div className='search-box flex-div' >
    <input type='text' placeholder = 'Search' />
    <img src={search_icon} alt="" />
    
    </div>
    
    </div>    

    <div className='nav-right flex-div'>
    <div className='plus'>
        <img src={upload_icon} alt=''/>
        </div>
    <div className='minus'>   
        <img src={more_icon} alt=''/>
        <img src={notification_icon} alt=''/>
        <img src={profile_icon} className='user-icon' alt=''/>
        </div> 

    </div>
    </nav>
  )
  
}

export default navplay
