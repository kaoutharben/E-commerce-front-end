import React from 'react';
import './Header.css';
import FaceIcon from '@material-ui/icons/Face';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ForumIcon from '@material-ui/icons/Forum';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { Link }  from "react-router-dom" ;
import { useStateValue } from "./StateProvider";
import logo from './Logo.png'; 

function Header({hideProduct = false}) {
    const [{ user }] = useStateValue();
   
    return (
        <div className='header'>
            <Link   className="link__header" to="/">
                <img className='header__logo' src={logo} alt="logo"/>
           </Link>
           <div className='header__mid'>
              
                {!hideProduct ?(<div className='header__option'>
                <Link  className=" header__option1 link__header" to="./produits">
                    <StorefrontIcon  style={{fontSize: '28px', color :'#EFAA24'}} />
                    <span className='mid__line'>Produits</span>
                    </Link>
                </div>):
            (<div className='header__option hide__header'>
            <StorefrontIcon  style={{fontSize: '28px', color :'#EFAA24'}} />
            <span className='mid__line'>Produits</span>

        </div>)}
                <div className='header__option'>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" length="28px !important" viewBox="0 0 24 24" width="30px">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                        <rect fill="none" height="24" width="24"/>
                   </g>
                        <g><g><path  className="mid__logoimg" d="M10.23,15.83c0.39,0.39,1.02,0.39,1.41,0l4.24-4.24c0.39-0.39,0.39-1.02,0-1.42v0c-0.39-0.39-1.02-0.39-1.41,0l-3.54,3.53 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.42,0s-0.39,1.02,0,1.41L10.23,15.83z"/>
                        <path className="mid__logoimg" d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,17c0,0.55-0.45,1-1,1H6 c-0.55,0-1-0.45-1-1V8h14V17z"/>
                        </g></g></svg>
                     <span className='mid__line'>Promotions</span>
                </div>
                <div className='header__option' >
                    <ForumIcon style={{fontSize: '28px' , color :'#EFAA24'}} />
                    <span className='mid__line'>Contact</span>
                </div>
                <div className='header__option'>
                    <LocalGroceryStoreIcon style={{fontSize: '28px' , color :'#EFAA24'}}/>
                    <span className='mid__line'>Panier</span>
                </div>
           </div>
           <Link className='logIn__home link__header'  to={!user ?'/LogIn' :'/profile'}>
        <div className='logIn__home' >
        <svg xmlns="http://www.w3.org/2000/svg" length="28px !important" viewBox="0 0 24 24" width="30px">
            <path  d="M0 0h24v24H0V0z" fill="none"/>
            <path className="face__header" d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
        </svg>
         <span className='text__line'>{user ? "Bonjour "+{user} : "S'inscrire/Se connecter"}</span>
         
         </div>
         </Link>
        </div>
    )
}

export default Header
