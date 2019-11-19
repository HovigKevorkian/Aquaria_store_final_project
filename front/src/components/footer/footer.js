import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-floater">
    <MDBFooter color="black" className="font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="5" className="text-center">
            <h5 className="title footer-media-icons"><strong>About us</strong></h5>
            <p>
             We are the first online store in Lebanon specialized in acuatics
            </p>
            <ul className="list-unstyled mb-0 footer-left">
              <li>
                <MDBIcon
                  icon="map-marker-alt"
                  size="1.7x"
                  className="footer-media-icons"
                />
                <p>
                  Matn, <br></br> Dawra 94126, Lebanon
                </p>
              </li>

              <li>
                <MDBIcon icon="phone" size="1.7x" className="footer-media-icons mt-4" />
                <p>+961 71184870</p>
              </li>
              <li>
                <MDBIcon
                  icon="envelope"
                  size="1.7x"
                  className="footer-media-icons mt-4"
                />
                <p>hovikkevork@gmail.com</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title footer-media-icons"><strong>Links</strong></h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="3" className="footer-right">
            <h5 className="title footer-media-icons"><strong>Connect with us</strong></h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <div className="text-center d-flex justify-content-center white-label  ">
              <a href="#!" className="p-2 m-2">
                <MDBIcon fab icon="twitter" size="2x" className="footer-media-icons" />
              </a>
              <a href="#!" className="p-2 m-2">
                <MDBIcon
                  fab
                  icon="linkedin-in"
                  size="2x"
                  className="footer-media-icons"
                />
              </a>
              <a href="#!" className="p-2 m-2">
                <MDBIcon
                  fab
                  icon="instagram"
                  size="2x"
                  className="footer-media-icons"
                />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer    className="footer-media-icons" fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Footer;
