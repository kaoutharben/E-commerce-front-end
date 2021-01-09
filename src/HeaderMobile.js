import React,{useState} from 'react';
import "./HeaderMobile.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Link }  from "react-router-dom" ;
import logo from './Logo.png'; 
import { useStateValue } from "./StateProvider";

function HeaderMobile() {
    const [isActive ,setIsActive]=useState(false);
    const [{ user }] = useStateValue();
    return (
        <div className="headerMobile">

            <Link   className="link__header" to="/">
                <img className='headerMobile__logo' src={logo} alt="logo"/>
           </Link>
         
           <MenuIcon  className="menu__header" onClick={()=>{
               setIsActive(!isActive);
               console.log(isActive);
           }}/>
           {
               isActive && <div className="menu__header__options">
        
                    <Link   className="link__header" to="/produits">
                   <p className="option__menu">Produits</p>
                   </Link>
                   <Link   className="link__header" to="/">
                   <p className="option__menu">Promotions</p>
                   </Link>
                   <Link   className="link__header" to="/">
                   <p className="option__menu">Contact</p>
                   </Link>
                   <Link   className="link__header" to="/">
                   <p className="option__menu">Panier</p>
                   </Link>
                   <Link   className="link__header" to="/logIn">
                   <p className="option__menu">{user ? "Déconnexion" : "Connexion"}</p>
                   </Link>
                   
               </div>
           }
           
           
        </div>
    )
}

export default HeaderMobile
