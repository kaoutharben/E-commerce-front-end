import React from 'react';
import "./Promo.css"

function Promo({ id, title, image, price ,oldPrice,promo, black=false}) {
    return (
        <div className="promo">
                
                {!black ?(  <div className="promo__bar"><span>{promo}</span>
                <span className="space">off</span></div>):
            (  <div className="promoBlack__bar"><span>{promo}</span>
            <span className="space">off</span></div>)}
                {!black ?(  <img className="promo__img"src={image} alt ="product__image"/>):
            (  <img className="promoBlack__img"src={image} alt ="product__image"/>)}

                {!black ?( <p className="promo__name">{title}</p>):
            ( <p className="promoblack__name">{title}</p>)}
                
                {!black ?( <div className="old__price"><span>{oldPrice}</span>
                <span className="space">Dhs</span></div>):
            ( null)}
                
                {!black ?( <div className="promo__price">
                    <span className="price__promo">{price}</span>
                    <p >Dhs</p> 
                </div>):
            (  <div className="promoblack__price">
            <span className="price__promo">{price}</span>
            <p >Dhs</p> 
        </div>)}
        </div>
    )
}

export default Promo
