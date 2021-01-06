import React from 'react';
import "./Promo.css"

function Promo({ id, title, image, price ,oldPrice,promo}) {
    return (
        <div className="promo">
                <p className="promo__bar"><span>{promo}</span>
                <span className="space">off</span></p>
                <img className="promo__img"src={image} alt ="product__image"/>
                <p className="promo__name">{title}</p>
                <p className="old__price"><span>{oldPrice}</span>
                <span className="space">Dhs</span></p>
                <p className="promo__price">
                    <span className="price__promo">{price}</span>
                    <p >Dhs</p> 
                </p>
        </div>
    )
}

export default Promo
