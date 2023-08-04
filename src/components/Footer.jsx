import React from 'react'
import { FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="footer-container--left">
                <div className="location">
                    <FaSearchLocation />
                    <div className='location__addresses'>
                        <p>123 Acme St.</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone />
                        1-800-123-1234
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk />
                        trips@galaxy.com
                    </h4>
                </div>
            </div>
            <div className="footer-container--right">
                <h3 className='footer-container--right__title'>
                    About the company
                </h3>
                <p className="footer-container--right__description">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est, consequatur, illo corporis necessitatibus nostrum corrupti ea exercitationem, inventore accusamus voluptatum culpa aliquid maiores asperiores molestias praesentium quos reiciendis quisquam!"
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer