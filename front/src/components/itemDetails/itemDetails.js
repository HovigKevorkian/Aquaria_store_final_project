import React from "react";
import "./itemDetails.css";
import QuantityCounter from "../quantityCounter/quantityCounter";
import {Link} from "react-router-dom"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBIcon
} from "mdbreact";

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQuantity: 0

    };
  }
  componentDidMount() {
     this.props.itemDetails
  }

  decrease = () => {
    this.setState({ itemQuantity:this.state.itemQuantity===0? 0: this.state.itemQuantity - 1 });
  };

  increase = () => {
    this.setState({ itemQuantity: this.state.itemQuantity + 1 });
  };

  render() {
    return (
      <MDBContainer>
        <container className="item-details-container">
          <div className="item-details-lef-column">
            <img
              src={`http://localhost:8080/images/${this.props.itemDetails.product_image_name}`}
              className="item-details-img"
              alt="Responsive image"
            />
          </div>
          <div className="item-details-mid-coulmn">
            <h4 >
              <strong className="productDetaislTitle">
                {this.props.itemDetails.product_title}
              </strong>
            </h4>

            <div>
              <span>
                <strong className="price">
                  Price: {this.props.itemDetails.price} $
                </strong>
              </span>
            </div>

            <div className="featurs">
              <ul>
                <li>The best you can get</li>
                <li>Gautenteed</li>
                <li>In good health</li>
                <li>Return you money if not satisfied</li>
                <li>comes with a caring guide</li>
                <li>{this.props.itemDetails.description}</li>
              </ul>
            </div>

            <QuantityCounter
             
              itemQuantity={this.state.itemQuantity}
              decrease={this.decrease}
              increase={this.increase}
              {...this.props}
            />

            <div>
              <span> <strong>Shipping:</strong> </span>
              <br></br>
              <i>
                <MDBIcon icon="truck" />
              </i>
              Free shipping in Beruit and Matn
            </div>

            <div>
              <MDBBtn  gradient="aqua">
                <Link to="/cart">
                  
                  <i class="fas fa-cart-plus"></i> <span>Buy now</span>
              </Link>
              </MDBBtn>
            </div>

            <div>
              <MDBBtn   gradient="aqua" onSubmit="">
                <a>
                
                  <i class="fas fa-cart-plus"></i>
                  <span> Add to cart</span>
                </a>
              </MDBBtn>
            </div>
          </div>

          <div className="item-details-right-coulmn">
            <h4>
              <strong>Usually bought together:</strong>
            </h4>
            <a>
            <img
              className="bought-together-pic"
              src="https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_114224986.jpg?v=1544257582"
            />  </a>
            <br></br>
            <a>
            <img
          
              className="bought-together-pic"
              src="https://thefishdoctor.co.uk/wp-content/uploads/2015/03/spade-leaf-plant-echinodorus-cordifolius.jpg"
            /></a>
            <br></br>
            <a>
            <img
              className="bought-together-pic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTTIpFxinoXCLmzcILFwl3qRXsviXlmdK8cgkcBmASg3U4cqR&s"
            /></a>
          </div>
        </container>
      </MDBContainer>
    );
  }
}

export default ItemDetails;
