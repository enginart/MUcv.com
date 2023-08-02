import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AudioPlayer from './audioplayer/AudioPlayer';
import { Button } from 'react-bootstrap';

const data = require('../SongFiles_DD/List/fixedlist.json')

const ViewMashup = () => {

    const [soundFile, setSoundFile] = useState(null);

    let {mashup} = useParams();

    let mashupobj = data.filter(val => val.muName === mashup)
    console.log(mashupobj)

    // Shuffle array
    const shuffled = data.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0,4);

    console.log(selected)
    
    useEffect(() => {
        const file = require(`../SongFiles_DD/${mashup}`);
        setSoundFile(file);
      }, []);


    return (
    <div className='bod'>

        <div className='body-box'>
        <div className='listen-to-your-mashup'>
          Listen to your mashup!
        </div>
        <div className='view-mashup-title'>
          {mashupobj[0].sAatitle} <br /> + <br /> {mashupobj[0].sBatitle}
        </div>

        <AudioPlayer url={soundFile} />

        <div className='view-mashup-title'>
        <Button href="/MUcv.com/Mashup" className='home-button'>Make Another Mashup</Button>
        </div>

        <div>

        </div>
        


        </div>
        


    </div>
    )
}

export default ViewMashup