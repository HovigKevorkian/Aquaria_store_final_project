import React  from "react";
import "./quantityCounter.css";

class QuantityCounter extends React.Component {
  state = {
      itemQuantity: ""
  }

 

  render() {
    return (
        <div className="def-number-input number-input">
          <button onClick={this.props.decrease} className="minus"></button>
          <input className="quantity" name="quantity" value={this.props.itemQuantity} onChange={()=> console.log('change')}
          type="number" />
          <button onClick={this.props.increase} className="plus"></button>
        </div>
      );
  }
}

export default QuantityCounter;

// import React, { useReducer } from 'react';
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREASE_OR_DECREASE_BY':
//       return state + action.by;
//     default:
//       throw new Error();
//   }
// };
// const QuantityCounter = () => {
//   const [count, dispatch] = useReducer(counterReducer, 0);
//   const handleIncrease = () => {
//     dispatch({ type: 'INCREASE_OR_DECREASE_BY', by: 1 });
//   };
//   const handleDecrease = () => {
//     dispatch({ type: 'INCREASE_OR_DECREASE_BY', by: -1 });
//   };
//   return (
//     <div>
//       <h1>Counter with useReducer</h1>
//       <p>Count: </p>
//       <div>
//         <button type="button" onClick={handleIncrease}>
//           +
//         </button>
//         <input type="number" onChange={count}> </input>
//         <button type="button" onClick={handleDecrease}>
//           -
//         </button>
//       </div>
//     </div>
//   );
// };
// export default QuantityCounter;