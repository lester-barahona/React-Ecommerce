import React,{useState} from 'react'
import './Header.scss';
const Header = () => {

    const [show,setShow]=useState(false);

    const showMenu=()=>{
        setShow(!show);
    }

    const showMenuResize=()=>{
        if(window.innerWidth>=768){
            setShow(false);
        }
    }
    window.addEventListener('resize',showMenuResize);


    const cleanLinks=()=>{
        var links = document.querySelectorAll('.nav__link');
        links.forEach(link=>link.classList.remove('active'));
    }

    const activeHandler=(e)=>{
        if(e.target.classList.contains('nav__link')){
            cleanLinks();
            e.target.classList.add('active');
            showMenu();
        }
    }
   

    return (
        <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="/" className="nav__logo">KUTY</a>
                    </div>
                    <div className={show?'nav__menu show':'nav__menu '} id="nav-menu">
                        <ul className="nav__list" onClick={activeHandler}>
                            <li className="nav__item"><a href="#home" className="nav__link active" >Home</a></li>
                            <li className="nav__item"><a href="#featured" className="nav__link">Featured</a></li>
                            <li className="nav__item"><a href="#new" className="nav__link">New</a></li>
                            <li className="nav__item"><a href="#suscribed" className="nav__link">Suscribed</a></li>
                        </ul>
                    </div>
                    <div>
                        <i className="bx bx-cart nav__cart"></i>
                        <i className="bx bx-menu nav__toggle {}" onClick={showMenu}></i>
                    </div>
                </nav>
        </header>
    )
}

export default Header
