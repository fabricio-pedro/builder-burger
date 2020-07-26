import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
totalPrice:0.00,
purchasable:false,
purchasing:false
}
updatePurchasable(ingridients){
const sum=Object.keys(ingridients).map(ingKey=>{
  return ingridients[ingKey]; 
 
}).reduce((sum, val)=>{ return sum+val; },0);
this.setState({purchasable:sum>0});

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
this.updatePurchasable(updateIngridients);
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
this.updatePurchasable(updateIngridients);
}

puchasingHandler=()=>{
  this.setState({purchasing:true});
}
cancelPuchasingHandler=()=>{
  this.setState({purchasing:false});
  
}
purchasingContinueHandler=()=>{
  alert("Do you want continue to purchasing ?")
}

  render(){
   const disableInfo={...this.state.ingridients}
   for(let key in disableInfo){
    disableInfo[key]=disableInfo[key]<=0;
  
   }

    return(
      <Aux>
        <Modal show={this.state.purchasing} 
        modalClosed={this.cancelPuchasingHandler}> 
           <OrderSummary 
            purchaseCancelled={this.cancelPuchasingHandler}
            ingridients={this.state.ingridients}
            purchaseContinued={this.purchasingContinueHandler}
            price={this.state.totalPrice.toFixed(2)}     />
        </Modal>
       <div>
           <Burger ingridients={this.state.ingridients}/>
       </div>
       <div>
           <BurgerControls
            addIngridient={this.addIngridientHandler} 
            subIngridient={this.removeIngridientHandler} 
            totalPrice={this.state.totalPrice}
            disable={disableInfo}
            purchasable={this.state.purchasable}
            purchasing={this.puchasingHandler}                        />
       </div>
      </Aux>
    );

  }

}

export default BurgerBuilder;