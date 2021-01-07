import React from 'react';
import "./Promo.css"

function Promo({ id, title, image, price ,oldPrice,promo, black=false}) {
    return (
        <div className="promo">
                
                {!black ?(  <p className="promo__bar"><span>{promo}</span>
                <span className="space">off</span></p>):
            (  <p className="promoBlack__bar"><span>{promo}</span>
            <span className="space">off</span></p>)}
                {!black ?(  <img className="promo__img"src={image} alt ="product__image"/>):
            (  <img className="promoBlack__img"src={image} alt ="product__image"/>)}

                {!black ?( <p className="promo__name">{title}</p>):
            ( <p className="promoblack__name">{title}</p>)}
                
                {!black ?( <p className="old__price"><span>{oldPrice}</span>
                <span className="space">Dhs</span></p>):
            ( null)}
                
                {!black ?( <p className="promo__price">
                    <span className="price__promo">{price}</span>
                    <p >Dhs</p> 
                </p>):
            (  <p className="promoblack__price">
            <span className="price__promo">{price}</span>
            <p >Dhs</p> 
        </p>)}
        </div>
    )
}

export default Promo
