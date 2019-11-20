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
      <div>
        <CarouselPage {...this.props} />
        <div>
          <div className="about-us-flex">
            <div className="about-us-box">
            <h2 > <strong>WHY CHOOSE US?</strong></h2>
             <p className="about-us-flex-p">Here at Aquaria, we specialize in the care and
            maintenance of tropical and freshwater fish, tanks and ponds. We
            have a variety of essential and non-essential products. We customize
            tanks and heads and can do repairs. Our selection is huge and always
            up-to-date. Our on-floor staff is knowledgeable and friendly.
            They'll take the time to assist you and answer your questions.</p>
            </div>
          </div>
          <div className="space"></div>
          <img
            className="testing-image"
            src="http://localhost:8080/images/SDboRe.jpg"
          ></img>
        </div>
      </div>
    );
  }
}

export default HomePage;
