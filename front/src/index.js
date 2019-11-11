import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import CheckOutPage from "./pages/checkOutPage/checkOutPage"
import CategoriesSlider from "./components/categoriesSlider/categoriesSlider"
import App from './App';
import './index.css';
import Cart from "./components/cart/cart";
import Card from "./components/card/card";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ProductsTableHooks from "./utils/fetch/fetchProducts"
import Fetcher from "./utils/fetch/fetchApi"

ReactDOM.render(
//  <ProductsTableHooks />,
//  <Card />,
 <Fetcher />,
  document.getElementById('root')
);
