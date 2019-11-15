import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBBtn } from
"mdbreact";
import "./carousel.css"

const CarouselPage = () => {
  return (
   
      
      <MDBCarousel
      interval={1000}
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
            <div className="home-page-container">
        <div className="home-page-hero-container-flex">
          <img
            src="http://localhost:8080/images/anubias-barteri-var-barteri-tropica.jpg"
            className="home-hero-polygon-left "
          >
           
          </img>

          <div className="home-hero-mid-section">
            <div className="home-hero-mid-section-header-button">
            <h1 className="home-hero-mid-section-h1">Aquaria</h1>
            <MDBBtn  color="red-text" gradient="aqua" ><strong>Shop Now</strong></MDBBtn>
            </div>
          </div>
          <img
            src="http://localhost:8080/images/Jio5366.jpg"
            className="home-hero-polygon-right"
          ></img>
        </div>
        </div>
             
          </MDBView>
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId="2">
          <MDBView>
            <div className="home-page-container">
        <div className="home-page-hero-container-flex">
          <img
            src="http://localhost:8080/images/Ceratophyllum-demersum-Foxtail-2.jpg"
            className="home-hero-polygon-left "
          >
           
          </img>

          <div className="home-hero-mid-section">
            <div className="home-hero-mid-section-header-button">
            <h1 className="home-hero-mid-section-h1">Aquaria</h1>
            <MDBBtn  color="red-text" gradient="aqua" ><strong>Shop Now</strong></MDBBtn>
            </div>
          </div>
          <img
            src="http://localhost:8080/images/Jio5366.jpg"
            className="home-hero-polygon-right"
          ></img>
        </div>
        </div>
             
          </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
            <div className="home-page-container">
        <div className="home-page-hero-container-flex">
          <img
            src="http://localhost:8080/images/07uMOm.jpg"
            className="home-hero-polygon-left"
          >
           
          </img>

          <div className="home-hero-mid-section">
            <div className="home-hero-mid-section-header-button">
            <h1 className="home-hero-mid-section-h1">Aquaria</h1>
            <MDBBtn  color="red-text" gradient="aqua" ><strong>Shop Now</strong></MDBBtn>
            </div>
          </div>
          <img
            src="http://localhost:8080/images/beautiful-fish-wallpaper-1360x768.jpg"
            className="home-hero-polygon-right-2"
          ></img>
        </div>
        </div>
         
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
            <div className="home-page-container">
        <div className="home-page-hero-container-flex">
          <img
            src="http://localhost:8080/images/39905_aquarium-desktop-wallpaper.jpg"
            className="home-hero-polygon-left-2 "
          >
           
          </img>

          <div className="home-hero-mid-section">
            <div className="home-hero-mid-section-header-button">
            <h1 className="home-hero-mid-section-h1">Aquaria</h1>
            <MDBBtn  color="red-text" gradient="aqua" ><strong>Shop Now</strong></MDBBtn>
            </div>
          </div>
          <img
            src="http://localhost:8080/images/beautiful-fish-wallpaper-1360x768.jpg"
            className="home-hero-polygon-right-2"
          ></img>
        </div>
        </div>
           
          </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  
  );
}

export default CarouselPage;