import React from "react";
import "./homePage.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CategoriesSlider from "../../components/categoriesSlider/categoriesSlider";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size="12"> <Header {...this.props} /></MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol size="12"> <CategoriesSlider {...this.props} /></MDBCol>
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

export default HomePage;
