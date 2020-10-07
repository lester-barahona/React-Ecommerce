import React from 'react'
import './New.scss';

const New = () => {
    return (
        <section className="new section" id="new">
            <h2 className="section-title">NEW ARRIVALS</h2>
            <a href="/" className="section-all">View All</a>

            <div className="new__container bd-grid">
                <div className="new__box">
                    <img src="assets/img/new1.png" className="new__img" alt=""/>
                    <div className="new__link">
                        <a href="/" className="button">VIEW PRODUCT</a>
                    </div>
                </div>

                <div className="new__box">
                    <img src="assets/img/new2.png" className="new__img" alt=""/>
                    <div className="new__link">
                        <a href="/" className="button">VIEW PRODUCT</a>
                    </div>
                </div>

                <div className="new__box">
                    <img src="assets/img/new3.png" className="new__img" alt=""/>
                    <div className="new__link">
                        <a href="/" className="button">VIEW PRODUCT</a>
                    </div>
                </div>

                <div className="new__box">
                    <img src="assets/img/new4.png" className="new__img" alt=""/>
                    <div className="new__link">
                        <a href="/" className="button">VIEW PRODUCT</a>
                    </div>
                </div>
                <div className="new__box">
                    <img src="assets/img/new5.png" className="new__img" alt=""/>
                    <div className="new__link">
                        <a href="/" className="button">VIEW PRODUCT</a>
                    </div>
                </div>
                <div className="new__box">
                    <img src="assets/img/new6.png" className="new__img" alt=""/>
                    <div className="new__link">
                        <a href="/" className="button">VIEW PRODUCT</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default New
