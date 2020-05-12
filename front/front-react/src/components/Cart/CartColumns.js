import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">слика</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">име на слика</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">цена</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">количина</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">избриши</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">вкупно</p>
          </div>
        </div>
      </div>
    );
  }
}
