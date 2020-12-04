import React from 'react'
import './Collection.scss'

const Collection = () => {
    return (
        <section className="collection section" id="collection">
            <div className="collection__container bd-grid">
                <div className="collection__box">
                    <img src="assets/img/new3.png" alt="" className="collection__img xl"/>
                    <div className="collection__data">
                        <h2 className="collection__title"><span className="collection__subtitle">SONY</span><br/>PS5</h2>
                        <a href="/" className="collection__view">View collection</a>
                    </div>
                </div>

                <div className="collection__box">
                    <div className="collection__data">
                        <h2 className="collection__title"><span className="collection__subtitle">MICROSOFT</span><br/>XBOX X</h2>
                        <a href="/" className="collection__view">View collection</a>
                    </div>
                    <img src="assets/img/new5.png" alt="" className="collection__img"/>
                </div>
            </div>
        </section>
    )
}

export default Collection
