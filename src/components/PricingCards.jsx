import React from 'react'
import { Link } from 'react-router-dom'

const PricingCards = () => {
  return (
    <div className="pricing-cards">
        <div className="card" data-aos="zoom-in" data-aos-once="true">
            <h3 className="card__title">- Basic -</h3>
            <span className="card__underline" />
            <p className="card__price">1 btc</p>
            <ul className="list">
                <li className="list__point">- 3 Days -</li>
                <li className="list__point">- Views -</li>
                <li className="list__point">- Featured -</li>
                <li className="list__point">- Private Quaters -</li>
            </ul>
            <Link to={'/contact'} className='card__button-redirect'>book</Link>
        </div>

        <div className="card" data-aos="zoom-in" data-aos-delay="50" data-aos-once="true">
            <h3 className="card__title">- Suite -</h3>
            <span className="card__underline" />
            <p className="card__price">1 btc</p>
            <ul className="list">
                <li className="list__point">- 3 Days -</li>
                <li className="list__point">- Views -</li>
                <li className="list__point">- Featured -</li>
                <li className="list__point">- Private Quaters -</li>
            </ul>
            <Link to={'/contact'} className='card__button-redirect'>book</Link>
        </div>

        <div className="card" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <h3 className="card__title">- Executive -</h3>
            <span className="card__underline" />
            <p className="card__price">1 btc</p>
            <ul className="list">
                <li className="list__point">- 3 Days -</li>
                <li className="list__point">- Views -</li>
                <li className="list__point">- Featured -</li>
                <li className="list__point">- Private Quaters -</li>
            </ul>
            <Link to={'/contact'} className='card__button-redirect'>book</Link>
        </div>
    </div>
  )
}

export default PricingCards