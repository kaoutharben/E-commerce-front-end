
import React ,  {useState}from 'react';
import logo from './Logo.png';
import "./ContactChart.css";
import { Button } from '@material-ui/core';

function ContactChart() {
    const [np ,setNp]=useState('');
    const [ad ,setAd]=useState('');
    const [msg ,setMsg]=useState('');



    const send = e=>{
        e.preventDefault();
        }
    return (
        <div className="contact__chart">
           <div className="cart__home">
                <form className="user__input">
                    <p className="cart__text">Nous Contacter</p>
                    <input className="cart__input1" placeholder="Nom et Prénom" value={np} onChange={e =>setNp(e.target.value)}/>
                    <input className="cart__input1" placeholder="Adresse Mail" value={ad} onChange={e =>setAd(e.target.value)}/>

                    <textarea className="cart__input2" placeholder="Votre Message" value={msg} onChange={e =>setMsg(e.target.value)} cols="30" rows="5"></textarea>

                    <button className="cart__button" type ="submit" onClick ={send} variant ="outlined" >Envoyer</button>
                    
                </form>
                <div className="img__cart__home">
                    <img className="cart__picture" src={logo} alt="logo"/>
                </div>
           </div>
        </div>
    )
}

export default ContactChart;
