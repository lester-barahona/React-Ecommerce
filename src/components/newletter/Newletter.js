import React from 'react';
import './Newletter.scss';

const Newletter = () => {
    return (
        <section className="newsletter section" id="suscribed">
            <div className="newsletter_container bd-grid">
                <div className="newsletter__suscribe">
                    <h2 className="section-title">OUR NEWSLETTER</h2>
                    <p className="newsletter__description">Promotion new products and sales. Directly to your</p>

                    <form action="" className="newsletter__form">
                        <input type="text" className="newsletter__input" placeholder="Enter your email"/>
                        <a href="/" className="button">SUSCRIBE</a>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Newletter;
