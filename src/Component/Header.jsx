import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
           Styleza
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarMenu">



          {/* Navigation Links */}
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-primary" to="/shop">
                Shop
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item ms-lg-3">
              <Link className="nav-link position-relative" to="/Addtocart">
                <Badge badgeContent={cartItems.length} color="primary">
                  <ShoppingCartIcon fontSize="medium" className="text-primary" />
                </Badge>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;