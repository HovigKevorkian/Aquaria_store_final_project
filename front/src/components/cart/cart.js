import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBFooter } from "mdbreact";
import ProductsTableHooks from "../../utils/fetch/fetchProducts";
import "./cart.css"
class Cart extends Component {

  constructor(props) {
        super(props);
        this.state = {
          products: [1],
          orderDetailsById: [
            {
              src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
              title: "iPhone",
              subTitle: "Apple",
              color: "White",
              price: "800",
              qty: "2"
            },
          ],
          columns: [
            {
              label: '',
              field: 'img',
            },
            {
              label: <strong>Product </strong>,
              field: 'product'
            },
            {
              label: <strong>Color</strong>,
              field: 'color'
            },
            {
              label: <strong>Price</strong>,
              field: 'price'
            },
            {
              label: <strong>QTY</strong>,
              field: 'qty'
            },
            {
              label: <strong>Amount</strong>,
              field: 'amount'
            },
            {
              label: '',
              field: 'button'
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
      return rows.push(
        {
        'img': <img src={row.src} alt="" className=" cart-component-item-image" />,
        'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.title}</strong></h5>, <p key={new
          Date().getDate} className="text-muted">{row.subTitle}</p>],
        'color': row.color,
        'price': `$${row.price}`,
        'qty':
        <MDBInput type="number" default={row.qty} className="form-control" style={{ width: "100px" }} />,
        'amount': <strong>${row.qty * row.price}</strong>,
        'button':
        <MDBTooltip placement="top">
            <MDBBtn color="primary" size="sm">
                X
            </MDBBtn>
            <div>Remove item</div>
        </MDBTooltip>
        }
      )
    });

    return (
    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="info-color-dark" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
        </MDBCardBody>
        <MDBFooter>
           
               
                
            
        </MDBFooter>
     <hr className="cart-hr"></hr>
        <div className="cart-component-footer">
          <div className="cart-component-footer-details" >
                    <span><p>Total: 2000$</p></span>
                    <div><MDBBtn className="btn aqua-gradient-dark"> Proceed to checkout </MDBBtn></div>
                    </div>
                </div>
      </MDBCard>
      
    </MDBRow>
    );
  }
}

export default Cart;



// import React from "react";
// import "./cart.css";
// import { Card } from "react-bootstrap";

// class Cart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="shop-cart">
//         <div className="shop-cart-item-container">
//           <Card>
//             <div className="shop-cart-item-card-container-flex">
//               <div>
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Discus_fish.jpg/200px-Discus_fish.jpg"
//                   className="shop-cart-item-card-image"
//                 />
//               </div>
//               <div className="shop-cart-item-card-details-flex">
//                 <div>
//                   <ul>
//                     <li>
//                       {" "}
//                       <span>
//                         {" "}
//                         <a href="#">Item Name</a>
//                       </span>
//                     </li>
//                     <li>Description</li>
//                     <li>color</li>
//                     <li>quantity</li>
//                     <li>Shipping</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <span>
//                     <p className="shop-cart-item-price">Price: 35$</p>
//                   </span>
//                 </div>
//                 <div>
//                   <span>
//                     <button>x</button>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     );
//   }
// }

// export default Cart;













// import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
// import Card from "react-bootstrap/Card";

// import "./cart.css";
// import {
//   Button,
//   Table,
//   ButtonToolbar,
//   ToggleButtonGroup,
//   ToggleButton
// } from "react-bootstrap";



// class Cart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       CurrentCategory: "processing",
//       orderDetailsById: []
      
//     };
//   }

  

  
//   render() {
//     return (
//       <div>
//         <div>
//           <ButtonToolbar className="ViewOrders-StatusNav">
//             <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
//               <ToggleButton name="Pending">
//                 <a
//                   onClick={() => this.setState({ CurrentCategory: "pending" })}
//                 >
//                   Pending
//                 </a>
//               </ToggleButton>
//               <ToggleButton
//                 onClick={() => this.setState({ CurrentCategory: "processing" })}
//                 name="Procesing"
//               >
//                 Processing
//               </ToggleButton>
//               <ToggleButton
//                 onClick={() => this.setState({ CurrentCategory: "done" })}
//                 name="Done"
//               >
//                 Done
//               </ToggleButton>
//             </ToggleButtonGroup>
//           </ButtonToolbar>
//         </div>
//         <br /> <br />
//         <div className="ViewOrders-Scrollbar">
//           {this.state.orderDetailsById.map(order => {
//             if (order.status === this.state.CurrentCategory) {
//               return (
//                 <div>
//                   <Card className="ViewOrders-Card">
//                     <Card.Body>
//                       <div className="ViewOrders-CardBody">
//                         <Card.Text>
//                           description: 
//                         </Card.Text>
//                         <Card.Text>
//                           # of Items : <br /> {order.noItems}
//                         </Card.Text>
//                         <Card.Text>
//                           Price :<br /> ${order.price}
//                         </Card.Text>
//                       </div>
//                       <div className="ViewOrders-CardButton">
//                         <Button
//                         //   onClick={() =>
//                         //     this.props.numberItem(
//                         //       order.noItems,
//                         //       order.status,
//                         //       order.price,
//                         //       order.createdAt
//                         //     )
//                         //   }
//                           variant="primary"
//                         >
//                           View More
//                         </Button>
//                       </div>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Cart;
