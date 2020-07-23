import React from 'react';
import classes from './Burger.module.css';
import BurgerIngriedient from '../Burger/BurgerIngriedient/BurgerIngriedient';
const burger =(props)=>{
let transformedIngridents=Object.keys(props.ingridients)
.map((igKey)=>{
       return [...Array(props.ingridients[igKey])].map((_,id)=>{  //Array com quantidades de ingriedients
       return  <BurgerIngriedient key={igKey+id} type={igKey} />  //retorna o component conforme quantidades
       
        
     }) 
}).reduce((arr,el)=>{
   return arr.concat(el);
},[]);
if(transformedIngridents.length===0){
transformedIngridents=<p>Start add ingridients</p>
}

 return(
   <div className={classes.Burger}>
       <BurgerIngriedient type="bread-top"/>
       {transformedIngridents}
       <BurgerIngriedient type="bread-bottom"/>
      
   </div>

 )

}

export default burger;