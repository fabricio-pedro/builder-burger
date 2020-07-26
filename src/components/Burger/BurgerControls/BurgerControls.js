import React from 'react'
import classes from './BuildControls.module.css';
 import BuildControl from './BurgerControl/BuildControl';
 const burgerControls=(props)=>{
  const controls=[
  {label:"Salad", type:"salad"},
  {label:"Meat", type:"meat"},
  {label:"Cheese", type:"cheese"},
  {label:"Bacon", type:"bacon"}


 ]
    return (
        <div className={classes.BuildControls}>
          <p>Price Total:<strong> ${props.totalPrice.toFixed(2)}</strong></p>
          {controls.map(ctrl=>(
            <BuildControl  
            key={ctrl.label} 
            label={ctrl.label}
             addIng={()=>props.addIngridient(ctrl.type)}  
             subIng={()=>props.subIngridient(ctrl.type)}
             disabled={props.disable[ctrl.type]} />
          ))}

          <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}  
             onClick={props.purchasing} >ORDER NOW</button>
        </div>
    );

}

export default burgerControls;