import React from "react";
import {
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCol,
  MDBContainer
} from "mdbreact";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: ""
      
    };
  }

  render() {
    return (
      <div className="box-of-cards-flexBox ">
       
      <MDBContainer fluid className="d-flex  flex-wrap">
        {
          this.props.products.map(x => {
          return (
            <MDBCard
              className="m-2 card-item "
              style={{ width: "18rem", height: "500px" }}
              cascade
              ecommerce
              wide
            >
              <MDBCardImage
              // style={{  height: "200px" }}
                cascade
                top
                src={`http://localhost:8080/images/${x.product_image_name}`}
                waves
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle tag="h5">{x.product_title}</MDBCardTitle>
                <MDBCardTitle>
                  <a href="#!">
                    <strong>Product name</strong>
                  </a>
                </MDBCardTitle>
                {/* <ul className="rating">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon className="far" icon="star" />
                </li>
              </ul> */}
                <MDBCardText>{x.description}</MDBCardText>
                <MDBCardFooter>
                  <span className="float-left">{x.price}</span>
                  <span className="float-right">
                    <MDBTooltip placement="top">
                      <MDBBtn
                        tag="a"
                        color="transparent"
                        size="lg"
                        className="p-1 m-0 mr-2 z-depth-0"
                      >
                        <MDBIcon icon="shopping-cart" />
                      </MDBBtn>
                      <div>Add to Cart</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                      <MDBBtn
                        tag="a"
                        href="https://mdbootstrap.com"
                        target="_blank"
                        color="transparent"
                        size="lg"
                        className="p-1 m-0 mr-2 z-depth-0"
                      >
                        <MDBIcon icon="share-alt" />
                      </MDBBtn>
                      <div>Share</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                      <MDBBtn
                        tag="a"
                        color="transparent"
                        size="lg"
                        className="p-1 m-0 z-depth-0"
                      >
                        <MDBIcon icon="heart" className="red-text" />
                      </MDBBtn>
                      <div>Added to Wishlist</div>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          );
        })}
        </MDBContainer>
     </div>
    );
  }
}

export default Card;
