
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import "./carousel.css"
const Carousel = () => {
  return (
    <MDBContainer fluid>
      {/* <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1"> */}
            <MDBRow>
              <MDBCol size="3">
                <MDBCard className="mb-2 card-map">
                  <MDBCardImage className="img-fluid" src="https://mcdn.wallpapersafari.com/medium/62/79/yXxuvO.jpg" />
                  <MDBCardBody clas>
                    <MDBCardTitle className="cyan-text">MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="cyan">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                <MDBCard className="mb-2 card-map">
                  <MDBCardImage className="img-fluid" src="https://cdn.wallpapersafari.com/8/99/HWXjZV.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle className="cyan-text">MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="cyan">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                <MDBCard className="mb-2 card-map"> 
                  <MDBCardImage className="img-fluid" src="https://mcdn.wallpapersafari.com/medium/22/88/FV4XBl.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle className="cyan-text">MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. 
                    </MDBCardText>
                    <MDBBtn color="cyan">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                </MDBCol>
                <MDBCol size="3">
                <MDBCard className="mb-2 card-map">
                  <MDBCardImage className="img-fluid" src="https://mcdn.wallpapersafari.com/medium/55/98/X9SH6x.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle className="cyan-text">MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="cyan">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                </MDBCol>
             
              
             
              
             
            {/* </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel> */}
      </MDBRow>
    </MDBContainer>
  );
}

export default Carousel;


