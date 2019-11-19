import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  MDBFooter
} from "mdbreact";
import ProductsTableHooks from "../../utils/fetch/fetchProducts";
import "./cart.css";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [1],
      orderDetailsById: [
        {
          src: "http://localhost:8080/images/Red-Oscar.jpg",
          title: "iPhone",
          subTitle: "Apple",
          color: "White",
          price: "800",
          qty: "2"
        },
        {
          src: "http://localhost:8080/images/Ni0Y6X.jpg",
          title: "iPhone",
          subTitle: "Apple",
          color: "White",
          price: "800",
          qty: "2"
        },
        {
          src: "http://localhost:8080/images/imageedit_5_3318434512.jpg",
          title: "iPhone",
          subTitle: "Apple",
          color: "White",
          price: "800",
          qty: "2"
        },
        {
          src: "http://localhost:8080/images/greenbuttonpolyps.jpg",
          title: "iPhone",
          subTitle: "Apple",
          color: "White",
          price: "800",
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
          <img src={row.src} alt="" className=" cart-component-item-image" />
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
      <MDBRow className="my-2" center>
        <MDBCard className="w-100">
          <MDBCardBody>
            <MDBTable className="product-table">
              <MDBTableHead
                className="font-weight-bold"
                color="aqua-gradient"
                columns={columns}
              />
              <MDBTableBody rows={rows} />
            </MDBTable>
          </MDBCardBody>
          <MDBFooter></MDBFooter>
          <div className="cart-hr"></div>
          <div className="cart-component-footer">
            <div className="cart-component-footer-details">
              <span>
                <p className="cart-totaol-flow-right"><strong>Total: 2000$</strong></p>
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
    );
  }
}

export default Cart;
