import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./card.css"
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
import ProductsTableHooks from "../../utils/fetch/fetchProducts"

const Card = (props) => { 

  // const [{products, isLoading}, setProducts] = ProductsTableHooks()
 
    
    return (
      <div className="box-of-cards-flexBox ">
      <MDBContainer fluid className="d-flex  flex-wrap">
        {
        props.products.map(x => {
          return (
            <MDBCard
              className="m-2 card-item "
              style={{ width: "18rem", height: "500px" }}
              cascade
              ecommerce
              wide
            >
              <MDBCardImage 
              className="Product-card-image"
              style={{  height: "200px" }}
                cascade
                top
                src={`http://localhost:8080/images/${x.product_image_name}`}
                waves
              />
              <MDBCardBody cascade className="text-center product-card-body">
               <strong> <MDBCardTitle tag="h5">{x.product_title}</MDBCardTitle> </strong>
                <MDBCardTitle>
                </MDBCardTitle>
                <MDBCardText>{x.description}</MDBCardText>
                <span >Price: {x.price} $</span>
                <div>
              <MDBBtn className="btn aqua-gradient-dark" onClick={ () => props.updateItemDetails(x.product_title, x.product_image_name, x.description, x.price)} >
              <a>
                {" "}
                
              <span>More Details</span>
              </a>  
              </MDBBtn>
              <MDBBtn
                        tag="a"
                        color="transparent"
                        size="lg"
                        className="p-1 m-0 mr-2 z-depth-0"
                      >
                        <MDBIcon icon="shopping-cart " />
                      </MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          );
        })}
        </MDBContainer>
     </div>
    );
  
}

export default Card;
