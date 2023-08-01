import React from 'react'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className="bod">
        <div className='home-container'>
          <h1 className='home-title'>Canto<i>Vario</i></h1>
          <div className="body-box">
            {/* Video */}
            <div className="home-video-box">
            <iframe className="home-video" src="https://www.youtube.com/embed/xrrLNykHNao?mute=0&showinfo=1&controls=0&start=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>

            <div className="home-descrip">
            This demo is an experimental site. If you'd like to stay connected with CantoVario, please use the contact link in the header.
            </div>
            <div  className='home-button-container'>
            <Button href="/MUcv.com/Mashup" className='home-button'>Make a Mashup</Button>

            {/* <Button href="" className='home-button'>Listen to a Mashup</Button> */}

            </div>
            
            
          </div>

        </div>


    </div>
  )
}

export default Home