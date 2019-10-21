import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import CheckOutPage from "./pages/checkOutPage/checkOutPage"
import CategoriesSlider from "./components/categoriesSlider/categoriesSlider"
import App from './App';
import './index.css';
import Cart from "./components/cart/cart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
 <App />,
  document.getElementById('root')
);
