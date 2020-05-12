import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Quote from "./components/Quote";
import Background from "./background-final.jpg";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import OrderPlaced from "./components/Cart/OrderPlaced"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div
      style={{
        backgroundImage: `url(${Background})`,
        width: 'max-width',
        height: 'max-height'
       }}> <Quote /> </div>
       
        <Switch>
          <Route exact path="/api/products" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/orderPlaced" component={OrderPlaced} />
          <Route path="/" component={ProductList} />
         
          <Route component={Default} />
        </Switch>
        
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
