import React from 'react'

const Exhibit = () => {
  return (
    <div className='bod'>
      <div className='body-box'>
      <div className="exhibit-title">Exhibit</div>
      <div className="home-video-box">
      <iframe className="home-video" src="https://www.youtube.com/embed/7p4oKeCWfZA" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
            </div>
      </div>
    </div>
  )
}

export default Exhibit