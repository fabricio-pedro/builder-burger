import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component{
state={
 ingridients:{
   salad:2,
   bacon:2,
   cheese:2,
   meat:2
 }

}

  render(){
   
    return(
      <Aux>
       <div>
           <Burger ingridients={this.state.ingridients}/>
       </div>
       <div>
           Build Controls
       </div>
      </Aux>
    );

  }

}

export default BurgerBuilder;