import React from "react";
import "./shopPage.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CategoriesSlider from "../../components/categoriesSlider/categoriesSlider";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ItemDetails from "../../components/itemDetails/itemDetails";
import Carousel from "../../components/carousel/carousel";
import Breadcrumb from "../../components/breadCrub/breadCrumb";
import BoxOfCards from "../../components/boxOfCards/boxOfCards";
import Card from "../../components/card/card";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_title: "",
      product_image_name: "",
      description: "",
      price: ""
    };
  }
  updateItemDetails = (
    product_title,
    product_image_name,
    description,
    price
  ) => {
    this.setState({product_title, product_image_name, description, price});
    console.log( this.state)
  };

  render() {
    return (
      <div>
        <MDBContainer fluid>
          <MDBRow>
            <Breadcrumb {...this.props} />
          </MDBRow>
          <MDBRow>
            <MDBCol size="12">
              <ItemDetails {...this.props} itemDetails={this.state} />
            </MDBCol>
          </MDBRow>
          <br></br>
          <br></br>

          {/* <MDBRow}
                <Carousel  {...this.props}/>
            </MDBRow> */}
          <MDBRow>
            <Card {...this.props} updateItemDetails={this.updateItemDetails} />
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ShopPage;
