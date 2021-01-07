import React from 'react';
import'./HorsStock.css';

function HorsStock({ id, title, image, price }) {
    return (
        <div className="horsStack">
            <span className="hs__bar">Hors Stock</span>
                <img className="hs__img"src={image} alt ="product__image"/>
                <p className="hs__name">{title}</p>
                <p className="hs__price">
                    <span className="price__hs">{price}</span>
                    <p>Dhs</p> 
                </p>
        </div>
    )
}

export default HorsStock ;
