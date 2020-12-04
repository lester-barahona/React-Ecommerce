import React from 'react'
import Home from './../components/home/Home';
import Collection from './../components/collection/Collection';
import Featured from './../components/featured/Featured';
import Offer from './../components/offer/Offer';
import New from './../components/new/New';
import Newletter from './../components/newletter/Newletter';
import Sponsors from './../components/sponsors/Sponsors';

const  Principal = () => {
    return (
     <>
         <Home/>
         <Collection/>
         <Featured/> 
         <Offer/>
         <New/>
         <Newletter/>
         <Sponsors/>
     </>
    )
}

export default Principal
