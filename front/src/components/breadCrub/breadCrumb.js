import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Routel,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

const Breadcrumb = props => {
  return (
    <MDBContainer>
        <br></br>
      {/* <MDBBreadcrumb uppercase color="cyan lighten-4">
        <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb uppercase color="cyan lighten-4">
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
      </MDBBreadcrumb> */}

      <MDBBreadcrumb bold uppercase color="aqua-gradient" >
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  );
};

export default Breadcrumb;