import React from 'react'
import './Offer.scss';
const Offer = () => {
    return (
        <section className="offer section">
            <div className="offer__bg">
                <div className="offer__data">
                    <h2 className="offer__title">Special Offer</h2>
                    <p className="offer__description">Special offerts discounts for women this week only</p>
                    <a href="/" className="button">SHOP NOW</a>
                </div>
            </div>
        </section>
    )
}

export default Offer
