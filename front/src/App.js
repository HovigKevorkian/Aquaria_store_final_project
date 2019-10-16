import React from "react";
import HomePage from "./pages/homePage/homePage"
import CategoriesSlider from "./components/categoriesSlider/categoriesSlider"
import Card from "./components/card/card";
import ContactUs from "./components/contactUs/contactUs";
import ItemDetails from "./components/itemDetails/itemDetails"
import { Switch, Route, withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { pause, makeRequestUrl } from "./utils/utils.js";
import Cart from "./components/cart/cart"


import "./App.css";
import ShopPage from "./pages/shopPage/shopPage";


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
  async componentDidMount() {
    this.getContactsList();
  }

  getContactsList = async () => {
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

  componentWillUnmount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div>
        <div>
          {/* <Card {...this.props} /> */}
          {/* <HomePage {...this.props} /> */}
          <ShopPage {...this.props} />
 {/* <CategoriesSlider  /> */}
 {/* <ItemDetails {...this.props} /> */}
 {/* <Cart {...this.props}/> */}
        </div>

        {/* <div>
          <ContactUs {...this.prosp} />
        </div> */}
      </div>
    );
  }
}

export default App;
