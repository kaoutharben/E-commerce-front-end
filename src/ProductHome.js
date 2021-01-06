import React from 'react';
import "./ProductHome.css"

function ProductHome({ id, title, image, price }) {
    return (
        <div className="productHome">
                <img className="productHome__img" src={image} alt ="product__image"/>
                <p className="productHome__name">{title}</p>
                <p className="productHome__price">
                    <span className="price__productHome">{price}</span>
                    <p>Dhs</p> 
                </p>
        </div>
    )
}

export default ProductHome;
