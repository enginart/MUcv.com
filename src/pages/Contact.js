import React from 'react'

const Contact = () => {
  return (
    <div className='bod'>

      <h2>Student Contact Form</h2>
      <form action="mailto:emailid@example.com" method="post" enctype="text/plain">
         Student Name:<br/><input type="text" name="sname" /> <br/>
         Student Subject:<br/><input type="text" name="ssubject" /><br/>
         <input type="submit" value="Send" />
      </form>

    </div>
  )
}

export default Contact