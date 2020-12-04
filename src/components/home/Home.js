import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                {/* letters */}
                <div className="home__data">
                    <h1 className="home__title">NEW <br/><span>ARRIVALS</span></h1>
                    <a href="#featured" className="button">GO SHOPPING</a>
                </div>
                {/* img */}
                <img src="./assets/img/iphone.png" alt="" className="home__img"/>
            </div>
        </section>
    )
}

export default Home
