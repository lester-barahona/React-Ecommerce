import React,{useState,useRef,useEffect} from 'react'
import "./Product.scss"
import {useLocation} from "react-router-dom";


const Product = () => {
    window.scrollTo(0, 0);
    const {state} = useLocation();

    // paypal
    const [paidFor,setPaidFor]=useState(false);
    const [loaded,setLoaded]=useState(false);
     
    let paypalRef=useRef(null);

    // para cuando se monta el componente
    useEffect(()=>{
        if(!paidFor){
        const script=document.createElement("script");
        script.src="https://www.paypal.com/sdk/js?client-id=AWW-_EpxtUYIDd3mzgmUbnKMV8y_uqWVGuKPS_nz01LeA3xWaM3cX5ks-T7cqrZIKcDA2zA_vTeQ4Kkw&locale=es_CR";
        script.addEventListener("load", ()=>setLoaded(true));
        document.body.appendChild(script);
        if(loaded){
            setTimeout(()=>{
                window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                        purchase_units: [
                            {
                            description:state.nombre,
                            amount: {
                                currency_code: "USD",
                                value: state.precio,
                                
                            }
                            
                            }
                        ],

                        });
                    },
                    onApprove: async (data, actions, resp) => {

                        const order = await actions.order.capture();
                        setPaidFor(true)
                        console.log(order);
                    
                    },
                    onError: err => {
                        console.log(err);
                    }
                    })
                .render(paypalRef);
            });
        }
        }
    });
    
    
    return (<>
        {paidFor?
        <div className="thanks-container"> <h1>Thank You! ❤❤❤_</h1> <div></div> <h3>Your {state.nombre}  is on the way</h3></div>
        :
        <div className="compras-container">
           <div className="featured__products">
                <div className="featured__box">
                    <img src={`assets/img/${state.url}`} alt="" className={'featured__img '+(state.url==='new3.png'?'img-big':null)}/>
                </div>
                
                <div className="faetured__data">
                    <h3 className="featured__name">{state.nombre}</h3>
                    <p>{state.descripcion}</p>
                    <span className="featured__preci">${state.precio}</span>
                </div>
            </div>
            <div className="payment-container">
            <div className="paypal-buttons"  ref={v=>(paypalRef=v)}></div>
            </div>
        </div>}
        </>
    )
}

export default Product
