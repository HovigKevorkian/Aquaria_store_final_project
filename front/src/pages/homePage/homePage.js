import React from "react";
import "./homePage.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CategoriesSlider from "../../components/categoriesSlider/categoriesSlider";
import Card from "../../components/card/card";
import CarouselPage from "../../components/carousel/carousel";
import { MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBBtn } from "mdbreact";

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      // <div className="home-page-container">
      //   <div className="home-page-hero-container-flex">
      //     <img
      //       src="http://localhost:8080/images/anubias-barteri-var-barteri-tropica.jpg"
      //       className="home-hero-polygon-left "
      //     >
           
      //     </img>

      //     <div className="home-hero-mid-section">
      //       <div className="home-hero-mid-section-header-button">
      //       <h1 className="home-hero-mid-section-h1">Aquaria</h1>
      //       <MDBBtn  color="red-text" gradient="aqua" ><strong>Shop Now</strong></MDBBtn>
      //       </div>
      //     </div>
      //     <img
      //       src="http://localhost:8080/images/Jio5366.jpg"
      //       className="home-hero-polygon-right"
      //     ></img>
      //   </div>

        // {/* <CarouselPage {...this.props} /> */}

      //   </div> 
      <div>
        <CarouselPage {...this.props} />
        <div>
        
        <div className="space"></div>
        <img className="testing-image" src="http://localhost:8080/images/SDboRe.jpg"></img>
      </div>
      </div>
     
  
    );
  }
}

export default HomePage;
