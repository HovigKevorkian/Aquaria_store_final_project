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