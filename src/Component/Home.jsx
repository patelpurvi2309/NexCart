import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-5'>
            {/* Hero Section */}
            <section className="text-center p-5 bg-light">
                <h1>Welcome to  Styleza</h1>
                <p>Shop the best products at the best price</p>
                <Link to="/shop" className="btn btn-primary mt-3">
                    Shop Now
                </Link>
            </section>
        </div>
    );
};

export default Home;
