import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Envelope, GeoAlt } from 'react-bootstrap-icons';
const Contact = () => {
  return (
    <div className='bod'>
      <div className='body-box'>
        <div className='contact-container'>
        <div className="contact-info">
        <h2 className='contact-title'>Our Info</h2>
        <hr></hr>
        <h4 className="contact-dets">
          <Envelope style={{marginBottom: "10px"}}/>
          <br></br>
          cvmufb@gmail.com</h4>
        <h4 className='contact-dets'>
          <GeoAlt style={{marginBottom: "10px"}}/>
          <br></br>
          1000 Olin Way, Needham MA 02492
        </h4>
        </div>
        <div className='contact-form'>
          <h1 style={{color: "#EFAB47"}}>Contact Us!</h1>
          <form target="_blank" action="https://formsubmit.co/cvmufb@gmail.com" method="POST">
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                </div>
                <div className="col">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
          </form>
        </div>
        </div>
        

      </div>

    </div>
  )
}

export default Contact