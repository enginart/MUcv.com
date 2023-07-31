import React, {useState} from 'react'
import data from '../Fixed/fixedlist.json'

const Mashup = () => {

  let sAs = data.map((val) => val.sA)
  let unique_sAs = [...new Set(sAs)]

  
  let [sAchoice, setsAchoice] = useState(": Select Song A :")
  let [sBoptions, setsBoptions] = useState([])
  let [sBchoice, setsBchoice] = useState(": Select Song B :")

  let handleSAChange = (e) => {
    setsAchoice(e.target.value)
    handlesBoptions(e.target.value)
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

  return (
    <div className='bod'>
    <br />
    {sAchoice}
    {sBchoice}
    <select onChange={handleSAChange} name="sA"> 
      <option value="Select song A" > -- Select songA --</option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {unique_sAs.map((val, ind) => <option value={val} key={ind}>{val}</option>)}
    </select>

    <select onChange={handleSBChange} name="sB">
    <option value="Select song B"> -- Select songB-- </option>
    {sBoptions.map((val, ind) => <option value={val} key={ind}>{val}</option>)}
    </select>

    {(sAchoice !== ": Select Song A :"  && sBchoice !== ": Select Song B :" )&&
    "choice made"}

    </div>
  

  )
}

export default Mashup