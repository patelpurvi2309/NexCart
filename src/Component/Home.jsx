import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="text-center p-5 bg-light">
                <h1>Welcome to QuickBuy</h1>
                <p>Shop the best products at the best price</p>
                <Link to="/shop" className="btn btn-primary mt-3">
                    Shop Now
                </Link>
            </section>

            {/* Featured Categories */}
            {/* <section className="container my-5">
                <h3 className="mb-3">Top Categories</h3>
                <div className="row">
                    <div className="col">Electronics</div>
                    <div className="col">Fashion</div>
                    <div className="col">Beauty</div>
                    <div className="col">Groceries</div>
                </div>
            </section> */}

            {/* Featured Products */}
            {/* <section className="container my-5">
                <h3 className="mb-3">Trending Products</h3> */}
                {/* Reuse Product Card Component */}
            {/* </section> */}
        </>
    );
};

export default Home;
