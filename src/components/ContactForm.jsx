import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form" data-aos="zoom-in-up">
        <form onSubmit={() => alert('Nieaktywny formularz')} method="post">
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" name='name'/>
          </label>
          <label htmlFor="email">
            
            <span>Email</span>
            <input type="text" name='email'/>
          </label>
          <label htmlFor="subject">
            <span>Subject</span>
            
            <input type="text" name='subject'/>
          </label>
          <label htmlFor="details">
            <span>Details</span>
            
            <textarea name="details" placeholder='Type a short message here ...'/>
          </label>
          <button type="submit">SEND</button>
        </form>
    </div>
  )
}

export default ContactForm