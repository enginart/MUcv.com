import React from 'react'
import tou from '../images/tou.pdf'

const Footer = () => {
  return (
    <footer>
    <div className='foot'>
    <div className='foot-title'>
        Powered by EnginArt® software.
    </div>
    <div className='foot-bottom'>
        <a href={tou} className='terms-of-use' rel="noreferrer" target='_blank'>Terms of Use</a>
    </div>
    </div>
    </footer>
  )
}

export default Footer