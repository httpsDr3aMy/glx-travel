import React, { Component } from 'react'

export class HeroImage extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="hero-image__shadow" />
        <div className="hero-image__content" data-aos="zoom-in-right">
            <h2 className="hero-image__content__title">{this.props.heading}</h2>
            <p className="hero-image__content__description">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default HeroImage