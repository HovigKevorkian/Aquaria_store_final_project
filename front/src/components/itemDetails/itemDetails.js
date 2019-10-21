import React from "react";
import "./itemDetails.css"
import QuantityCounter from "../quantityCounter/quantityCounter"
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
  MDBCardGroup
} from "mdbreact";

class ItemDetails extends React.Component {
  state = {};
  render() {
    return (
        <div>
        
      <MDBContainer fluid className="item-details-container">


        
        <MDBRow>
          <MDBCol size="5" className="image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5153b3fae4b0473d83b61202/1412061344442-N2991E2UR9KOHBQ70BSX/ke17ZwdGBToddI8pDm48kN2-dea_bEgYfGriRk0FSad7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uf9k6QHr5SDis9dMKeZjHOe6ZTAYouGFeg8lBhGNrDDnNKOigyfB8BfAL6B2Stgizg/image-asset.jpeg?format=1000w"
              className="img-fluid item-details-img"
              alt="Responsive image"
            />
          </MDBCol>
          <MDBCol size="5">
            <MDBRow>
              <MDBCol size="8">
                <MDBRow>
                  <h4>
                   
                    <strong className="productDetaislTitle">Blue Discus fresh water aquarium fish</strong>
                  </h4>
                </MDBRow>
                <MDBRow>
                  <div>
                    <span>
                      <strong className="price">Price: 50$</strong>
                    </span>
                  </div>
                </MDBRow>
                <MDBRow>
                  <div className="featurs">
                    <ul>
                      <li>The best you can get</li>
                      <li>Gautenteed</li>
                      <li>In good health</li>
                      <li>Return you money if not satisfied</li>
                      <li>comes with a caring guide</li>
                    </ul>
                  </div>
                </MDBRow>
                <MDBRow>
                <QuantityCounter {...this.props} />
                </MDBRow>
                <MDBRow>
                  <div >
                    <span>Shipping:</span>
                    <br></br>
                    <i className="fas fa-cart-plus"></i> Free shipping in Beruit
                    and Matn
                  </div>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <div>
                      <a>
                        <MDBBtn>
                          {" "}
                          <i class="fas fa-cart-plus"></i> <span>Buy now</span>
                        </MDBBtn>
                      </a>
                    </div>
                  </MDBCol>
                  <MDBCol>
                    <div>
                      <a>
                        <MDBBtn >
                          {" "}
                          <i class="fas fa-cart-plus"></i> 
                          
                          <span> Add to cart</span>
                        </MDBBtn>
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol size="4" className="bought-together">
                  <MDBRow> <h4><strong>Usually bought together:</strong></h4></MDBRow>
                  <MDBRow> <img  className="img-fluid"  src="https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_114224986.jpg?v=1544257582"/></MDBRow>
                  <br></br>
                  <MDBRow> <img className="img-fluid" src="https://thefishdoctor.co.uk/wp-content/uploads/2015/03/spade-leaf-plant-echinodorus-cordifolius.jpg"/></MDBRow>
                  <br></br>
                  <MDBRow> <img  className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTTIpFxinoXCLmzcILFwl3qRXsviXlmdK8cgkcBmASg3U4cqR&s"/></MDBRow>

                  </MDBCol>
                
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

     
    </div>
    );
  }
}

export default ItemDetails;
