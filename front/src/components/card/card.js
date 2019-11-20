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
              className="m-1 card-item "
              style={{ width: "15rem", height: "400px" }}
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
               <strong> <MDBCardTitle    className="footer-media-icons product-card-title-override" tag="h5">{x.product_title}</MDBCardTitle> </strong>
                <MDBCardTitle>
                </MDBCardTitle>
                <MDBCardText>{x.description}</MDBCardText>
                <span >Price: {x.price} $</span>
                <div>
                  <a href="#top">
              <MDBBtn  gradient="aqua" onClick={ () =>
                 props.updateItemDetails(x.product_title, x.product_image_name, x.description, x.price)}>
                 <strong>More Details</strong>
              </MDBBtn>
              </a>
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
