import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { pause, makeRequestUrl } from "./utils/utils.js";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import HomePage from "./pages/homePage/homePage";
import CategoriesSlider from "./components/categoriesSlider/categoriesSlider";
import Card from "./components/card/card";
import ContactUs from "./components/contactUs/contactUs";
import ItemDetails from "./components/itemDetails/itemDetails";
import Cart from "./components/cart/cart";
import QuantityCounter from "./components/quantityCounter/quantityCounter";
import ShopPage from "./pages/shopPage/shopPage";
import Header from "./components/header/header";
// import CheckOutPage from "./components/checkOut/checkOut";
import Footer from "./components/footer/footer";
import Pills from "./pages/checkOutPage/checkOutPage.js";
/**
 * @function makeUrl - generates a url with queries
 * @param {String} path the route
 * @param {Object} params -  an object of parameters
 * @returns {String} - the url
 */
const makeUrl = (path, params) => {
  return makeRequestUrl(`http://localhost:8080/${path}`, params);
};

class App extends React.Component {
  state = {
    products: []
  };
  async componentDidMount() {
    this.getProductsList();
    this.deleteProducts();
  }

  getProductsList = async () => {
    this.setState({ isLoading: true });
    try {
      const url = makeUrl("products/list");
      const response = await fetch(url);
      await pause();
      const answer = await response.json();
      if (answer.success) {
        toast("Contacts loaded!");
        this.setState({ products: answer.result, isLoading: false });
        console.log(answer);
        console.log(this.state.products);
      } else {
        console.log();
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      console.log("error", err);
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  getOrderByUser = async () => {
    this.setState({ isLoading: true });
    try {
      const url = makeUrl("orders/");
      const response = await fetch(url);
      await pause();
      const answer = await response.json();
      if (answer.success) {
        toast("Contacts loaded!");
        this.setState({ products: answer.result, isLoading: false });
        console.log(answer);
        console.log(this.state.products);
      } else {
        console.log();
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      console.log("error", err);
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  deleteProducts = async id => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `http://localhost:8080/products/delete/${id}`
      );
      await pause();
      const answer = await response.json();
      if (answer.success) {
        const products = this.state.products.filter(
          products => products.id !== id
        );
        toast(`product with id ${id} was successfully deleted!`);
        this.setState({ products, isLoading: false, error_message: "" });
      } else {
        console.log();
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      console.log("error", err);
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  componentWillUnmount() {
    this.setState({ isLoading: false });
  }
  
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <HomePage {...props} getProducts={this.getProductsList} />
              )}
            />
            <Route
              path="/shop"
              render={props => (
                <ShopPage {...props} products={this.state.products} />
              )}
            />
            <Route
              path="/contactus"
              render={props => <ContactUs {...props} />}
            />
            {/* <Route
              path="/checkout"
              render={props => <Pills {...props} />}
            /> */}
            <Route
              path="/cart"
              render={props => <Cart {...props} />}
            />
            
          </Switch>
          <div>
            <Footer {...this.prosp} />
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
