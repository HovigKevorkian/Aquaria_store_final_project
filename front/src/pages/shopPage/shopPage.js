import React from "react";
import "./shopPage.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CategoriesSlider from "../../components/categoriesSlider/categoriesSlider";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ItemDetails from "../../components/itemDetails/itemDetails";


class ShopPage extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size="12"> <Header {...this.props} /></MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol size="12"> <ItemDetails {...this.props} /></MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol size="12">
              <div>
                <Footer {...this.props} />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </div>
        );
    }
}
 
export default ShopPage;