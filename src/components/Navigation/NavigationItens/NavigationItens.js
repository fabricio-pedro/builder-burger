import React from 'react';
import classes from './NavigationItens.module.css';
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItens=(props)=>{
 return (
         <ul className={classes.NavigationItens}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem> 
         </ul>
        );   

}

export default navigationItens;