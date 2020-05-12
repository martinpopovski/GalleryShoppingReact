import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo-final.jpg";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-light px-sm-10 fixed-top">
        
        <Link to="/api/products">
          <img src={logo} alt="store" className="img-fluid" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/api/products" className="nav-link">
              Галерија 
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/contact" className="nav-link">
              Контакт
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/aboutUs" className="nav-link">
              За нас
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-3">
              <i className="fas fa-cart-plus " />
            </span>
            Кошничка
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: #675f66;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:0.9rem;
    text-transform:capitalize;
  }
  @media (max-width: 400px) {
    .navbar-nav {
      flex-direction: row !important;
`;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
