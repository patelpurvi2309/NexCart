import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

    const cartItems = useSelector(state => state.cart.items);

    return (
        <div>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center  py-4 mb-4 border-bottom ">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-primary text-decoration-none fw-bold fs-2">NexCart</a>

                    <ul class="nav nav-pills d-flex align-items-center">
                        <li><Link className="nav-link fw-bold" to="/">Home</Link></li>
                        <li><Link className="nav-link fw-bold" to="/About">About</Link></li>
                        <li><Link className="nav-link fw-bold" to="/shop">Shop</Link></li>
                        <li><Link className="nav-link fw-bold" to="/Addtocart">
                        <Badge badgeContent={cartItems.length} color="primary">
                           <ShoppingCartIcon />
                        </Badge>
                        </Link>
                        </li>

                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Header