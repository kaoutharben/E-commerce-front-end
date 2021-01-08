import React,{useState}  from 'react';
import './CategoryList.css';
import Search from "./Search";
import Contact from "./ContactChart";
import Items from "./Items";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));


function CategoryList({id,picture, title, left,letftTitle, right,rightTitle }) {
    const classes = useStyles();
    const [valeur,setValeur]=useState('');

    
  
  
  
    return (
        <div className="categoryList">
           <div className="header__catgL"  style={{backgroundImage: "url("+picture+")"}} >
                <p className="title__catgL">{title}</p>
           </div>
            <Search  hideButtons />
           <div className="catg__left__right">
               <div className="left__catgL">
                    <img className="left__pict" src={left} alt='left'/>
                    <p className="picCatg__disc">{letftTitle}</p>
                    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select" style={{color:"#232323", fontWeight :'bold'}}>Catégories</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" onChange={e =>setValeur(e.target.value)}>
          <option aria-label="None" value="" />
          <optgroup label="Boulangerie Viennoiserie">
            <option value="boulangerie" style={{color:"#232323", fontWeight :'bold'}} >Boulangerie</option>
            <option value="patisserie"style={{color:"#232323", fontWeight :'bold'}}>Patisserie</option>
          </optgroup>
          <optgroup label="Beauté">
            <option value="corps" style={{color:"#232323", fontWeight :'bold'}}>Corps</option>
            <option value="visage" style={{color:"#232323", fontWeight :'bold'}}>Visage</option>
          </optgroup>
        </Select>
      </FormControl>
               </div>
               <div className="right__catgL">
                    <img className="right__pict" src={right} alt='right'/>
                    <p className="picCatg__disc">{rightTitle}</p>

               </div>
           </div>
        
             {valeur==="boulangerie" ?(<Items title="Boulangerie"/>) :
         (null)
      }
      {valeur==="patisserie" ?(<Items title="Patisserie"/>) :
         (null)
      }
      {valeur==="corps" ?(<Items title="Corps"/>) :
         (null)
      }
      {valeur==="visage" ?(<Items title="Visage"/>) :
         (null)
      }
        <div className="orizontal__home"></div>
        <Contact/>
            
        </div>
    )
}

export default CategoryList;
