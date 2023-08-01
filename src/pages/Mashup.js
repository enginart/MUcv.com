import React, {useState} from 'react'
import data from '../Fixed/fixedlist.json'
import { Button } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'

const Mashup = () => {

  let sAs = data.map((val) => val.sA)
  let unique_sAs = [...new Set(sAs)]
  const navigate = useNavigate();

  
  let [sAchoice, setsAchoice] = useState("--------")
  let [sBoptions, setsBoptions] = useState([])
  let [sBchoice, setsBchoice] = useState("--------")

  let handleSAChange = (e) => {
    setsAchoice(e.target.value)
    handlesBoptions(e.target.value)
    console.log(e.target.value)
  }
  let handleSBChange = (e) => {
    setsBchoice(e.target.value)
  }
  
  let handlesBoptions = (sAopt) => {
    let newsBoptions = data.filter(val => {
      return val.sA === sAopt
    })
    let sBnewNames = newsBoptions.map((val) => val.sB)
    setsBoptions(sBnewNames)
    console.log(sAchoice, sBoptions)
  }

  let handleSubmit = () => {
    console.log(sAchoice, sBchoice)
    let mashuppath = data.filter(val => {
      return val.sA === sAchoice && val.sB === sBchoice
    })
    console.log(mashuppath[0].muName)
    navigate('/MUcv.com/ViewMashups/' + mashuppath[0].muName)

  }

  return (
    <div className='bod'>
    <br />
    <div className='body-box'>
    <div className='about-title'>
    Make a Mashup
    </div>
    <hr style={{color: 'yellow', top: '12px'}}></hr>
    <div className='song-choices'>
      <div className='song-choice'>
        <div className='song-choice-label'>Choose Song A</div>
        <select onChange={handleSAChange} name="sA" className='song-choice-option'> 
        <option value="Select song A" className='song-choice-option'> -- Select songA --</option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
        {unique_sAs.map((val, ind) => <option className='song-choice-option' value={val} key={ind}>{val}</option>)}
    </select>
      </div>
      <div className='song-choice'>
      <div className='song-choice-label'>Choose Song B</div>
      <select onChange={handleSBChange} name="sB" className='song-choice-option'>
      <option value="Select song B" className='song-choice-option'> -- Select songB-- </option>
      {sBoptions.map((val, ind) => <option className='song-choice-option' value={val} key={ind}>{val}</option>)}
      </select>

      </div>
      <hr></hr>
    </div>



    <div className='mashup-reveal'>
    {sAchoice} <br></br>X<br></br> {sBchoice}
    
    
   
    </div>
    {((sAchoice !== "--------"  && sAchoice !== "Select song A")
    && (sBchoice !== "--------") && sBchoice !== "Select song B") &&
    
    <div className='mashup-button-container'>
      <Button className='mashup-button' onClick={handleSubmit}>Make A Mashup</Button>

    </div>

}
    </div>


    </div>
  

  )
}

export default Mashup