import React, { Component } from "react";
import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CartTotals extends Component {
  state = {
    deliveryDate: new Date()
  }

  handleChange = date => {
    this.setState({
      deliveryDate: date
    });
  };
  render() {   
   
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart,
      makeOrder
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;

    
    return (
      <React.Fragment>
        {!emptyCart && (
               
          <div className="container">
           <div className="row"> <br/> </div>
            <form>
            <div class="form-row">
              <div class="col-7">
                <input type="text" id="adresa" class="form-control" placeholder="адреса за достава..."/>
              </div>
              <div class="col">
                <DatePicker selected={this.state.deliveryDate} onChange={this.handleChange} placeholderText="датум за достава" />
              </div>
              <div class="col">
                <input type="text" id="kontakt" class="form-control" placeholder="контакт"/>
              </div>
            </div>
          </form>
          
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
       
            
              <Link to="/api/order/makeOrder">
                  <button
                    className="btn btn-outline-success text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      makeOrder();
                    }}
                  >
                    Потврди нарачка
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart(this.cart);
                    }}
                  >
                    Испразни кошничка
                  </button>
                </Link>
                
                <h5>
                  <span className="text-title"> Износ :</span>{" "}
                  <strong> {cartSubTotal}  мкд</strong>
                </h5>
                <h5>
                  <span className="text-title"> Достава :</span>{" "}
                  <strong> {cartTax} мкд</strong>
                </h5>
                <h5>
                  <span className="text-title"> Вкупно :</span>{" "}
                  <strong> {cartTotal} мкд</strong>
                </h5>
               
                <PayPalButton
                  total={cartTotal}
                  clearCart={clearCart}
                  history={history}
                />
                
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
    
  }
}
