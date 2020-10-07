import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
       <footer className="footer section">
           <div className="footer__container bd-grid">

               <div className="footer__box">
                   <h3 className="footer__title">KUTY</h3>
                   <p className="footer__deal">Products store</p>
                   <a href="/"><img src="assets/img/footerstore1.png" alt="" className="footer__store"/></a>
                   <a href="/"><img src="assets/img/footerstore2.png" alt="" className="footer__store"/></a>
               </div>

               <div className="footer__box">
                   <h3 className="footer__title">EXPLORE</h3>
                   <ul>
                       <li><a href="/" className="footer__link">Home</a></li>
                       <li><a href="/" className="footer__link">Featured</a></li>
                       <li><a href="/" className="footer__link">New</a></li>
                       <li><a href="/" className="footer__link">Suscribe</a></li>
                   </ul>
               </div>

               <div className="footer__box">
                   <h3 className="footer__title">OUR SERVICES</h3>
                   <ul>
                       <li><a href="/" className="footer__link">Pricing</a></li>
                       <li><a href="/" className="footer__link">Free Shipping</a></li>
                       <li><a href="/" className="footer__link">Gift Cards</a></li>
                      
                   </ul>
               </div>

               <div className="footer__box">
                   <h3 className="footer__title">FOLLOW</h3>
                   <a href="/" className="footer__social"><i className="bx bxl-facebook-square"></i></a>
                   <a href="/" className="footer__social"><i className="bx bxl-instagram-alt"></i></a>
                   <a href="/" className="footer__social"><i className="bx bxl-twitter"></i></a>
               </div>
           </div>

           <p className="footer__copy">
               &#169;2020 copyright all right reserved
           </p>
       </footer>

    )
}

export default Footer
