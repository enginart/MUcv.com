import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
const data = require('../Fixed/fixedlist.json')

const ViewMashup = () => {

    const [soundFile, setSoundFile] = useState(null);

    let {mashup} = useParams();

    let mashupobj = data.filter(val => val.muName === mashup)
    console.log(mashupobj)
    
    useEffect(() => {
        const file = require(`../Fixed/${mashup}`);
        setSoundFile(file);
      }, []);


    return (
    <div className='bod'>

        <div className='body-box'>

        <ReactAudioPlayer
          src={soundFile}
          autoPlay
          controls/>


        </div>
        


    </div>
    )
}

export default ViewMashup