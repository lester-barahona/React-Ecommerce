import React from 'react'
import './Featured.scss';
const Featured = () => {
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED PRODUCTS</h2>
            <a href="/" className="section-all">View All</a>

            <div className="featured__container bd-grid">
                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="assets/img/feature1.png" alt="" className="featured__img"/>
                    </div>
                    
                    <div className="faetured__data">
                        <h3 className="featured__name">Headphone One Black</h3>
                        <span className="featured__preci">$29</span>
                    </div>

                </div>
                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="assets/img/feature2.png" alt="" className="featured__img"/>
                    </div>
                    
                    <div className="faetured__data">
                        <h3 className="featured__name">Speaker Beats Pill</h3>
                        <span className="featured__preci">$180</span>
                    </div>

                </div>
                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="assets/img/feature3.png" alt="" className="featured__img"/>
                    </div>
                    
                    <div className="faetured__data">
                        <h3 className="featured__name">Apple Air Pods</h3>
                        <span className="featured__preci">$210</span>
                    </div>

                </div>
                <div className="featured__product">
                    <div className="featured__box">
                        <div className="featured__new">NEW</div>
                        <img src="assets/img/feature4.png" alt="" className="featured__img"/>
                    </div>
                    
                    <div className="faetured__data">
                        <h3 className="featured__name">Smartwacth F9 Black </h3>
                        <span className="featured__preci">$100</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Featured
