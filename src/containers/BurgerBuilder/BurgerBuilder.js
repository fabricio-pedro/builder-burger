import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
const INGRIDIENTSPRICE={
  salad:0.5,
  meat:1.3,
  cheese:0.4,
  bacon:0.7
 }
class BurgerBuilder extends Component{
  
  

 state={
 ingridients:{
   salad:0,
   bacon:0,
   cheese:0,
   meat:0
 },
totalPrice:0.00
}

addIngridientHandler=(type)=>{
const oldCount=this.state.ingridients[type];
const updateCount=oldCount+1;
const aditionalPrice=INGRIDIENTSPRICE[type]
const oldTotal= this.state.totalPrice;
const updateTotal=oldTotal+aditionalPrice;
const updateIngridients={...this.state.ingridients}
updateIngridients[type]=updateCount;

this.setState({ingridients:updateIngridients, totalPrice:updateTotal});

}

removeIngridientHandler=(type)=>{
const oldCount=this.state.ingridients[type];
if (oldCount <=0){
  return;
} 
const updateCount=oldCount-1 
const minusPrice=INGRIDIENTSPRICE[type];
const oldTotal= this.state.totalPrice;
let updateTotal=0;
if (oldTotal>0){
  updateTotal=oldTotal-minusPrice
}   
const updateIngridients={...this.state.ingridients}
updateIngridients[type]=updateCount;
this.setState({ingridients:updateIngridients, totalPrice:updateTotal});
}

  render(){
   const disableInfo={...this.state.ingridients}
   for(let key in disableInfo){
    disableInfo[key]=disableInfo[key]<=0;
  
   }

    return(
      <Aux>
       <div>
           <Burger ingridients={this.state.ingridients}/>
       </div>
       <div>
           <BurgerControls
            addIngridient={this.addIngridientHandler} 
            subIngridient={this.removeIngridientHandler} 
            totalPrice={this.state.totalPrice}
             disable={disableInfo}/>
       </div>
      </Aux>
    );

  }

}

export default BurgerBuilder;