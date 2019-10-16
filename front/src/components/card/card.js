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
  MDBCol
} from "mdbreact";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: "",
      products: [],
      ClothDetails: [
        {
          Name: "shirt",
          SRC: "https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg",
          Price: "70$"
        },
        {
          Name: "T-shirt",
          SRC: "https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg",
          Price: "30$"
        },
        {
          Name: "Black shirt",
          SRC: "https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg",
          Price: "20$"
        },
        {
          Name: "T-shirt",
          SRC: "https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg",
          Price: "25$"
        },
        {
          Name: "T-shirt",
          SRC: "https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg",
          Price: "20$"
        }
      ],
      a: [
        {
          productid: 12,
          product_title: "Shark",
          name: "f40719ec65dad18572a81957c6de2395"
        },
        {
          productid: 12,
          product_title: "Shark",
          name: "f40719ec65dad18572a81957c6de2395"
        },
        {
          productid: 12,
          product_title: "Shark",
          name: "f40719ec65dad18572a81957c6de2395"
        },
        {
          productid: 12,
          product_title: "Shark",
          name: "f40719ec65dad18572a81957c6de2395"
        },
        {
          productid: 12,
          product_title: "Shark",
          name: "f40719ec65dad18572a81957c6de2395"
        },
        {
          productid: 12,
          product_title: "Shark",
          name: "f40719ec65dad18572a81957c6de2395"
        },
        {
          productid: 12,
          product_title: "Shark",
          name: "f40719ec65dad18572a81957c6de2395"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <MDBCard
            className="m-2"
            style={{ width: "22rem" }}
            cascade
            ecommerce
            wide
          >
            <MDBCardImage
              cascade
              top
              src="https://images.squarespace-cdn.com/content/v1/5153b3fae4b0473d83b61202/1412061344442-N2991E2UR9KOHBQ70BSX/ke17ZwdGBToddI8pDm48kN2-dea_bEgYfGriRk0FSad7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uf9k6QHr5SDis9dMKeZjHOe6ZTAYouGFeg8lBhGNrDDnNKOigyfB8BfAL6B2Stgizg/image-asset.jpeg?format=1000w"
              waves
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle tag="h5">Shoes</MDBCardTitle>
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
              <MDBCardText>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates.
              </MDBCardText>
              <MDBCardFooter>
                <span className="float-left">49$</span>
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
        </div>
        {this.state.a.map(a => {
          return (
            <MDBCard
              className="m-2"
              style={{ width: "22rem" }}
              cascade
              ecommerce
              narrow
            >
              <MDBCardImage
                cascade
                top
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(5).jpg"
                waves
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle tag="h5">{a.productid}</MDBCardTitle>
                <MDBCardTitle text="red" tag="h5">
                  frhsshsw
                </MDBCardTitle>
                <MDBCardText>etdsghjd</MDBCardText>
                <MDBCardFooter>
                  <span className="float-left">{a.price} $</span>
                  <span className="float-right">
                    <MDBTooltip placement="top">
                      <MDBBtn
                        tag="a"
                        href="https://mdbootstrap.com"
                        target="_blank"
                        color="transparent"
                        size="lg"
                        className="p-1 m-0 mr-2 z-depth-0"
                      >
                        <MDBIcon icon="eye" />
                      </MDBBtn>
                      <div>Quick Look</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                      <MDBBtn
                        tag="a"
                        color="transparent"
                        size="lg"
                        className="p-1 m-0 z-depth-0"
                      >
                        <MDBIcon icon="heart" />
                      </MDBBtn>
                      <div>Added to Wishlist</div>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          );
        })}
        ;
        {/* 
              <div className="aa">
                {this.state.products.map( m => {
                  return (
                    // <MDBCol>
                    <MDBCard style={{ width: "22rem" }}>
                      <MDBCardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>{m.color}</MDBCardTitle>
                        <MDBCardText>
                          Some quick example text to build on the card title and make up
                          the bulk of the card&apos;s content.
                        </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  // </MDBCol>
                  )
                })}
              </div> */}
      </div>
    );
  }
}

export default Card;
