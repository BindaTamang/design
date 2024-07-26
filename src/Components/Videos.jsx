import React from 'react'
import './Videos.scss'

const Videos = ({video}) => {
  return (
    <div className='videos-container'>
        <div className='vieos-card'>
           
                <div className='video-item'>
                    <div className='video-image'>
                    <img src={video.image} alt='video' className='image'/>
                    <div className='video-info'>
                      <img src={video.profilepic } alt='' className='profile-pic'/>
                      <div className='video-text'>
                      <span>{video.description}</span>
                      <p>{video.name}</p>
                      </div>
                      
                    </div>
                </div>
                </div>
                
        
        </div>
    </div>
  )
}

export default Videos