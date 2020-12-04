import React from 'react'
import './New.scss';

import {Link } from "react-router-dom";

const New = () => {
    return (
        <section className="new section" id="new">
            <h2 className="section-title">NEW ARRIVALS</h2>
            <a href="/" className="section-all">View All</a>

            <div className="new__container bd-grid">
                <div className="new__box">
                    <img src="assets/img/new1.png" className="new__img md" alt=""/>
                    <div className="new__link">
                        <Link
                            to={
                                {
                                pathname:"/compras",
                                state:{
                                    nombre:'Airpods',
                                    precio:100,
                                    descripcion:'Apple Airpods 2 Generation Mustard Color',
                                    url:'new1.png'
                                }
                                }
                            }
                            className="button"   
                        >
                            VIEW PRODUCT
                        </Link>
                    </div>
                </div>

                <div className="new__box">
                    <img src="assets/img/new2.png" className="new__img md" alt=""/>
                    <div className="new__link">
                    <Link
                            to={
                                {
                                pathname:"/compras",
                                state:{
                                    nombre:'Homepod Mini ',
                                    precio:200,
                                    descripcion:'Apple Black Homepod Mini Speaker',
                                    url:'new2.png'
                                }
                                }
                            }
                            className="button"   
                        >
                            VIEW PRODUCT
                        </Link>
                    </div>
                </div>

                <div className="new__box">
                    <img src="assets/img/new3.png" className="new__img" alt=""/>
                    <div className="new__link">
                    <Link
                            to={
                                {
                                pathname:"/compras",
                                state:{
                                    nombre:'Play Station 5',
                                    precio:500,
                                    url:'new3.png',
                                    descripcion:`4K/120 gameplay,8K/60 support
                                    PS Plus Collection is great value
                                    Revolutionary controller haptics
                                    Beautiful, fast new UI
                                    Significantly faster load times`
                                }
                                }
                            }
                            className="button"   
                        >
                            VIEW PRODUCT
                        </Link>
                    </div>
                </div>

                <div className="new__box">
                    <img src="assets/img/new4.png" className="new__img md" alt=""/>
                    <div className="new__link">
                    <Link
                            to={
                                {
                                pathname:"/compras",
                                state:{
                                    precio:400
                                }
                                }
                            }
                            className="button"   
                        >
                            VIEW PRODUCT
                        </Link>
                    </div>
                </div>
                <div className="new__box">
                    <img src="assets/img/new5.png" className="new__img md" alt=""/>
                    <div className="new__link">
                    <Link
                            to={
                                {
                                pathname:"/compras",
                                state:{
                                    nombre:'Xbox X Series',
                                    precio:500,
                                    descripcion:'Console Xbox X Series',
                                    url:'new5.png'
                                }
                                }
                            }
                            className="button"   
                        >
                            VIEW PRODUCT
                        </Link>
                    </div>
                </div>
                <div className="new__box">
                    <img src="assets/img/new6.png" className="new__img md" alt=""/>
                    <div className="new__link">
                    <Link
                            to={
                                {
                                pathname:"/compras",
                                state:{
                                    precio:600
                                }
                                }
                            }
                            className="button"   
                        >
                            VIEW PRODUCT
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default New
