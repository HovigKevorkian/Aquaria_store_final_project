import React from "react";
import {Link} from "react-router-dom"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBBtn
} from "mdbreact";
import "./carousel.css";

const CarouselPage = () => {
  return (
    <div>
      <MDBCarousel
        interval={1000}
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner className="home-page-carouse-web-view-inner">
          <MDBCarouselItem itemId="1">
            <MDBView>
              <div className="home-page-container">
                <div className="home-page-hero-container-flex">
                  <img
                    src="http://localhost:8080/images/anubias-barteri-var-barteri-tropica.jpg"
                    className="home-hero-polygon-left "
                  ></img>

                  <div className="home-hero-mid-section">
                    <div className="home-hero-mid-section-header-button">
                      <h1 className="home-hero-mid-section-h1">Aquaria</h1>
                      <Link to="/shop">
                      <MDBBtn gradient="aqua">
                        <strong>Shop Now</strong>
                      </MDBBtn>
                      </Link>
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
                  ></img>

                  <div className="home-hero-mid-section">
                    <div className="home-hero-mid-section-header-button">
                      <h1 className="home-hero-mid-section-h1">Aquaria</h1>
                      <Link to="/shop">
                      <MDBBtn gradient="aqua">
                        <strong>Shop Now</strong>
                      </MDBBtn>
                      </Link>
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
                  ></img>

                  <div className="home-hero-mid-section">
                    <div className="home-hero-mid-section-header-button">
                      <h1 className="home-hero-mid-section-h1">Aquaria</h1>
                      <Link to="/shop">
                      <MDBBtn gradient="aqua">
                        <strong>Shop Now</strong>
                      </MDBBtn>
                      </Link>
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
                  ></img>

                  <div className="home-hero-mid-section">
                    <div className="home-hero-mid-section-header-button">
                      <h1 className="home-hero-mid-section-h1">Aquaria</h1>
                      <Link to="/shop">
                      <MDBBtn gradient="aqua">
                        <strong>Shop Now</strong>
                      </MDBBtn>
                      </Link>
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

      <MDBCarousel
        interval={1000}
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={false}
        className="z-depth-1 home-page-carouse-responsive-view-inner"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                src="http://localhost:8080/images/Jio5366.jpg"
                className="home-page-carouse-responsive-view-inner-image"
              ></img>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                src="http://localhost:8080/images/beautiful-fish-wallpaper-1360x768.jpg"
                className="home-page-carouse-responsive-view-inner-image"
              ></img>
            </MDBView>
          </MDBCarouselItem>
          
        </MDBCarouselInner>
        <div className="home-hero-mid-section-responsive-view-flex">
            <div className="home-hero-mid-section-header-button">
            <h1 className="home-hero-mid-section-h1">Aquaria</h1>
            <Link to="/shop">
                      <MDBBtn gradient="aqua">
                        <strong>Shop Now</strong>
                      </MDBBtn>
                      </Link>
            </div>
          </div>
      </MDBCarousel>
    </div>
  );
};

export default CarouselPage;
