import React from "react";
import "./boxOfCards.css";
import Card from "../card/card"
class BoxOfCards extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="box-of-cards-flexBox">

                {this.props.products.map( () => {
                    return (<Card {...this.props}  />

                    )
                }) }

                
            </div>
         );
    }
}
 
export default BoxOfCards;