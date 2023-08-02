import React from 'react'
import data from '../SongFiles/List/fixedlist.json'
import { Button } from 'react-bootstrap';


export const BrowseMashups = () => {

    // Shuffle array
    const shuffled = data.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0,7);
    


    return (
        <div className='bod'>
            <div className='body-box'>
                <div className='about-title'>
                Listen to a Mashup
                </div>
                <div className='view-mashup-list'>
                {selected.map((val, ind) => 
                
                <Button href={`/MUcv.com/ViewMashups/${val.muName}`} className='home-button'>
                    {`${val.sAatitle}`} + { `${val.sBatitle}`}
                </Button>
                )}
                </div>
            </div>
        </div>
    )
    }
