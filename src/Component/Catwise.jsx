import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Catwise = () => {
    const { catId } = useParams(); // ✅ FIXED
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axios
            .get(`https://dummyjson.com/products/category/${catId}`)
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [catId]); // ✅ dependency correct

    if (loading) 
        return <h3 className="text-center mt-5">Loading...</h3>;

    return (
        <div className="container">
            <h2 className="my-4 text-capitalize">{catId} Products</h2>

            <div className="row">
                {products.map(item => (
                    <div className="col-md-4 col-sm-6" key={item.id}>
                        <div className="card mb-4">
                            <img src={item.thumbnail} alt={item.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="text-truncate">{item.title}</h5>
                                <p className="text-truncate">{item.description}</p>
                                <h4>₹ {Math.round(item.price * 80)}</h4>

                                <Link to="/order" state={{ Product: item }} className="btn btn-primary">
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catwise;
