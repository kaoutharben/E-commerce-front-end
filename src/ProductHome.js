import React from 'react';
import "./ProductHome.css"

function ProductHome({ id, title, image, price ,whiteColor=false }) {
    return (
      
        <div className="productHome">
              
                
                {!whiteColor ?(<img className="productHome__img" src={image} alt ="product__image"/>):
            (<img className="productHomeBlack__img" src={image} alt ="product__image"/>)} 
                {!whiteColor ?(<p className="productHome__name">{title}</p>):
            (<p className="productHomeBlack__name">{title}</p>)} 
                {!whiteColor ?(<p className="productHome__price">
                    <span className="price__productHome">{price}</span>
                    <p>Dhs</p> 
                </p>):
            (<p className="productHomeBlack__price">
            <span className="price__productHome">{price}</span>
            <p>Dhs</p> 
        </p>)}
        </div>
    )
}

export default ProductHome;
