import React from 'react';
import "./Nouveaute.css"

function Nouveaute({ id, title, image, price }) {
    return (
        <div className="nouveaute">
            
                <span className="nv__bar">Nouveautés</span>
                <img className="nv__img"src={image} alt ="product__image"/>
                <p className="nv__name">{title}</p>
                <div className="nv__price">
                    <span className="price__nv">{price}</span>
                    <p>Dhs</p> 
                </div>
        </div>
    )
}

export default Nouveaute
