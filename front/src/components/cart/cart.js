import React, { Component } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import QuantityCounter from "../quantityCounter/quantityCounter";

import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBTooltip,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBInput,
  MDBBtn,
  MDBCardTitle,
  MDBCardText,
  MDBFooter,
  MDBContainer,
  MDBCardImage
} from "mdbreact";
import ProductsTableHooks from "../../utils/fetch/fetchProducts";
import "./cart.css";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQuantity: 0,
      products: [1],
      orderDetailsById: [
        {
          src: "http://localhost:8080/images/Red-Oscar.jpg",
          title: "Fish",
          subTitle: "Disccus",
          color: "White",
          price: "60",
          qty: "2"
        },
        {
          src: "http://localhost:8080/images/Ni0Y6X.jpg",
          title: "Fish",
          subTitle: "Disccus",
          color: "White",
          price: "25",
          qty: "2"
        },
        {
          src: "http://localhost:8080/images/imageedit_5_3318434512.jpg",
          title: "Fish",
          subTitle: "Disccus",
          color: "White",
          price: "80",
          qty: "1"
        },
        {
          src: "http://localhost:8080/images/greenbuttonpolyps.jpg",
          title: "Plant",
          subTitle: "Anubias",
          color: "White",
          price: "30",
          qty: "2"
        }
      ],
      columns: [
        {
          label: "",
          field: "img"
        },
        {
          label: <strong>Product </strong>,
          field: "product"
        },
        {
          label: <strong>Color</strong>,
          field: "color"
        },
        {
          label: <strong>Price</strong>,
          field: "price"
        },
        {
          label: <strong>QTY</strong>,
          field: "qty"
        },
        {
          label: <strong>Amount</strong>,
          field: "amount"
        },
        {
          label: "",
          field: "button"
        }
      ]
    };
  }

  decrease = () => {
    this.setState({
      itemQuantity:
        this.state.itemQuantity === 0 ? 0 : this.state.itemQuantity - 1
    });
  };

  increase = () => {
    this.setState({ itemQuantity: this.state.itemQuantity + 1 });
  };

  async componentDidMount() {
    // this.props.getTableDataById(order, IdInTable, products)
    // this.props.getOrderDetailsById(2)
    // console.log("ok cart details", this.state.orderDetailsById )
  }

  render() {
    const rows = [];
    const { columns, orderDetailsById } = this.state;

    orderDetailsById.map(row => {
      return rows.push({
        img: (
          <MDBCardImage
            src={row.src}
            alt=""
            className="cart-component-item-image"
          />
        ),
        product: [
          <h5 className="mt-3" key={new Date().getDate + 1}>
            <strong>{row.title}</strong>
          </h5>,
          <p key={new Date().getDate} className="text-muted">
            {row.subTitle}
          </p>
        ],
        color: row.color,
        price: `$${row.price}`,
        qty: (
          <MDBInput
            type="number"
            default={row.qty}
            className="form-control"
            style={{ width: "100px" }}
          />
        ),
        amount: <strong>${row.qty * row.price}</strong>,
        button: (
          <MDBTooltip placement="top">
            <MDBBtn gradient="aqua" size="sm">
              X
            </MDBBtn>
            <div>Remove item</div>
          </MDBTooltip>
        )
      });
    });

    return (
      <div>
        <MediaQuery minDeviceWidth={755}>
          <MDBContainer className="cart-container-webView" fluid>
            <MDBRow className="my-2" center>
              <MDBCard className="w-100">
                <MDBCardBody>
                  <MDBTable className=" ">
                    <MDBTableHead
                      className="font-weight-bold"
                      color="aqua-gradient"
                      columns={columns}
                    />
                    <MDBTableBody rows={rows} />
                  </MDBTable>
                </MDBCardBody>
                <div className="cart-hr"></div>
                <div className="cart-component-footer">
                  <div className="cart-component-footer-details">
                    <span>
                      <p className="cart-totaol-flow-right">
                        <strong>Total: 2000$</strong>
                      </p>
                    </span>
                    <div>
                      <Link to="/checkout">
                        <MDBBtn
                          gradient="aqua"
                          className="cart-proceed-to-checkout-btn"
                        >
                          <strong>Proceed to checkout</strong>
                        </MDBBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              </MDBCard>
            </MDBRow>
          </MDBContainer>
        </MediaQuery>

        <MediaQuery minDeviceWidth={0} maxDeviceWidth={754}>
          <MDBContainer fluid className="d-flex flex-wrap">
            {this.state.orderDetailsById.map(x => {
              return (
                <MDBCard
                  className="m-1 card-item"
                  style={{ width: "14.5rem", height: "450px" }}
                  cascade
                  ecommerce
                  wide
                >
                  <MDBCardImage
                    className="Product-card-image"
                    style={{ height: "200px" }}
                    cascade
                    top
                    src={x.src}
                    waves
                  />
                  <MDBCardBody
                    cascade
                    className="text-center product-card-body"
                  >
                    <strong>
                      {" "}
                      <MDBCardTitle className="footer-media-icons" tag="h5">
                        {x.title}
                      </MDBCardTitle>{" "}
                    </strong>
                    <MDBCardText>{x.subTitle}</MDBCardText>
                    <div className="cart-responsive-view-details-flex">
                      <div>
                        <span className="cart-responsive-view-price">
                          Price: {x.price} ${" "}
                        </span>
                      </div>
                      <div>
                        <form className="cart-responsive-view-form">
                          <MDBInput
                            size="sm"
                            type="number"
                            value={x.qty}
                            className="form-control cart-responsive-view-form-input"
                            style={{ width: "100px" }}
                          ></MDBInput>
                        </form>
                      </div>
                    </div>
                    <div>
                      <span className="cart-responsive-view-form-subtotal"> Subtotal: {x.price * x.qty} $</span>
                      <a href="#top">
                        <MDBTooltip placement="top">
                          <MDBBtn gradient="aqua" size="sm">
                            X
                          </MDBBtn>
                          <div>Remove item</div>
                        </MDBTooltip>
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              );
            })}
            <br></br>
            <div className="cart-hr"></div>
            <div className="cart-component-footer-responsive">
              <div className="cart-component-footer-details-responsive">
               
                  <p className="cart-totaol-flow-right">
                    <strong>Total: 2000$</strong>
                  </p>
               
                <div>
                  <Link to="/checkout">
                    <MDBBtn
                      gradient="aqua"
                      className="cart-proceed-to-checkout-btn"
                    >
                      <strong>Proceed to checkout</strong>
                    </MDBBtn>
                  </Link>
                </div>
              </div>
            </div>
          </MDBContainer>
        </MediaQuery>
      </div>
    );
  }
}

export default Cart;
