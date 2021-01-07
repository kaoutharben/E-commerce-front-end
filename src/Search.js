import React,  {useState}from 'react';
import "./Search.css";
import { Button } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Link, useHistory}  from "react-router-dom" ;

function Search({hideButtons = false}) {
    const history =useHistory();
    const [word ,setWord]=useState('');
    const search=e=>{
        e.preventDefault();
        history.push('/SignUp')
    }
    return (
        <form className="search">
            <div className="search__input">
                <input placeholder="| Que Cherchez-vous?" value={word} onChange={e =>setWord(e.target.value)}/>
                <PageviewIcon className="search__icon"  style={{fontSize: '50px'}}/>
            </div>
            {!hideButtons ?(<Button type ="submit" onClick ={search} variant ="outlined" >click</Button>):
            (<Button className="serach__but" type ="submit" onClick ={search} variant ="outlined" >click</Button>)}
            
        </form>
    )
}

export default Search;
