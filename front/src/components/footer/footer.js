import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./footer.css";
const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="6" className="text-center">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <ul className="list-unstyled mb-0 footer-left">
              <li>
                <MDBIcon
                  icon="map-marker-alt"
                  size="1.5x"
                  className="blue-text"
                />
                <p>
                  San Francisco, <br></br> CA 94126, USA
                </p>
              </li>

              <li>
                <MDBIcon icon="phone" size="1.5x" className="blue-text mt-4" />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <MDBIcon
                  icon="envelope"
                  size="1.5x"
                  className="blue-text mt-4"
                />
                <p>contact@example.com</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Links</h5>
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
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <div className="text-center d-flex justify-content-center white-label  ">
              <a href="#!" className="p-2 m-2">
                <MDBIcon fab icon="twitter" size="2x" className="white-text" />
              </a>
              <a href="#!" className="p-2 m-2">
                <MDBIcon
                  fab
                  icon="linkedin-in"
                  size="2x"
                  className="white-text"
                />
              </a>
              <a href="#!" className="p-2 m-2">
                <MDBIcon
                  fab
                  icon="instagram"
                  size="2x"
                  className="white-text"
                />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
