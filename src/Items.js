import React from 'react';
import  "./Items.css";
import ProductHome from './ProductHome';
import Promo from "./Promo";
import HorsStock from "./HorsStock";
import { Link }  from "react-router-dom" ;

function Items({title}) {
    return (
        <div className="items">
            <div className="items__list">
                <p className="items__title">{title}</p>
                <div className="items__products">
                    <div className="items__product__row">
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 1 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <Promo id="3" black title="Produit 2" price={755.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326' promo='10%' oldPrice={1755.99}  />
                </Link>
                <Link className="link__home">
                    <HorsStock id="44" title="Produit 3" price={100} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                </Link>
                <Link className="link__home">
                    <ProductHome id="1" title="Produit 4 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 5 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 6 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 7 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                
                </div>
                <div className="items__product__row">
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 1 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <Promo id="3" black title="Produit header shoulders woman" price={7} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326' promo='10%' oldPrice={1755.99}  />
                </Link>
                <Link className="link__home">
                    <HorsStock id="44" title="Produit 3" price={100} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                </Link>
                <Link className="link__home">
                    <ProductHome id="1" title="Produit 4 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 5 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 6 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                    <Link className="link__home">
                    <ProductHome id="1" title="Produit 7 "  whiteColor price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                    </Link>
                
                </div>
         </div>
            </div>
        </div>
    )
}

export default Items;
