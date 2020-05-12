import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
export default class Details extends Component {
  render() {
   
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            author,
            img,
            description,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h1>Наслов : {title}</h1>
                  <h3 className="text-title mt-3 mb-2">
                    Автор : <span>{author}</span>
                  </h3>
                  <h2 className="text-blue">
                    <strong>
                      Цена : {price} <span> мкд</span>
                    </strong>
                  </h2>
                  <p className="font-weight-bold mt-3 mb-0">
                    Информации за сликата :
                  </p>
                  <p className="text-lowercase">{description}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/api/products">
                      <ButtonContainer>назад</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "во кошничка" : "додади во кошничка"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
