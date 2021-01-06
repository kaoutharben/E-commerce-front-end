import React  from 'react';
import './Home.css';
import BG  from './BG.png'; 
import Bbakery from './bakery.jpg'; 
import ProductHome from './ProductHome';
import Nouveaute from './Nouveaute';
import Promo from "./Promo";
import Category from './Category';
import Search from "./Search";
import { Link }  from "react-router-dom" ;
import { Link as Scrolllink, animateScroll as scroll } from 'react-scroll';




function Home() {
  

    return (
        <div className="home">
            <img className="home__bg" src={BG} alt="background"/>
            <div className="img__text">
                <span className="text__center">Une Bande de Produits Qualité!</span>
                <Scrolllink className="link" to="hero"
                        spy={true}
                        smooth={true}
                        duration={1500}
>
                <button className="button__img" >Découvrir</button>
                </Scrolllink>
            </div>
            <div  className="second__row">
                
               
             <div className="product__list">
                <div className="title__row">Variable selon le type de produit</div>

                <div className="items" id='hero'>
                    <Link className="link__home">
                    <ProductHome id="1" title="Pack Ramadan " price={1270.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                </Link>
                <Link className="link__home">
                    <Promo id="3" title="Product Promo" price={755.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326' promo='10%' oldPrice={1755.99}  />
                </Link>
                <Link className="link__home">
                    <ProductHome id="2" title="Pack Don" price={513.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                </Link>
                <Link className="link__home">
                    <Nouveaute id="44" title="Nouveau Produit" price={100} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                </Link>
                <Link className="link__home">
                    <ProductHome id="1" title="Pack Aid 2 " price={698.99} image='https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/679553/1.jpg?8326'/>
                </Link>
                </div>
 
            </div>
            </div>
            <Search  hideButtons/>

            <div id="hero__catg">
                 Catégories
            </div>
            <div className ="home__category">
                <div className="category__row">
                    <Link className="link__home" to="/SignUp">
                   <Category id="22" title="Boulangerie" pic={ Bbakery}/>
                   </Link>
                   <Link  className="link__home">
                   <Category  id="23" title="Epicérie" pic={ Bbakery}/>
                   </Link>
                   <Link  className="link__home">
                   <Category id="25" title="Beauté" pic={ Bbakery}/>
                   </Link>
                   
                </div>
                <div className="category__row">
                    <Link className="link__home" to="/SignUp">
                   <Category id="22" title="Boulangerie" pic={ Bbakery}/>
                   </Link>
                   <Link  className="link__home">
                   <Category  id="23" title="Epicérie" pic={ Bbakery}/>
                   </Link>
                   <Link  className="link__home">
                   <Category id="25" title="Beauté" pic={ Bbakery}/>
                   </Link>
                   
                </div>
                <div className="category__row">
                    <Link className="link__home" to="/SignUp">
                   <Category id="22" title="Boulangerie" pic={ Bbakery}/>
                   </Link>
                   <Link  className="link__home">
                   <Category  id="23" title="Epicérie" pic={ Bbakery}/>
                   </Link>
                   <Link  className="link__home">
                   <Category id="25" title="Beauté" pic={ Bbakery}/>
                   </Link>
                   
                </div>

            </div>
            
        </div>
    )
}

export default Home
