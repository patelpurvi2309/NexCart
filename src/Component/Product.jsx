import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    let [catdata, setcatdata] = useState([])
    let [page, setpage] = useState(1)
    const limit = 10
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
            .then((response) => {
                setcatdata(response?.data?.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    function previous() {
        if (page > 1) {
            setpage(page - 1)
        }
    }
    return (
        <div className='product-area'>
            <div className='row w-100'>
                <div>
                    <h2 className='my-lg-4 m-4'>My - <span className='text-primary'>shop</span></h2>
                </div>
                {
                    catdata?.map((item, index) => {
                        return <div className='col-md-4  col-sm-6 ' key={index}>
                            <div className='py-md-3 p-3 px-md-0'>
                                <div className="card" >
                                    <Link to='/Order' state={{ Product: item }}>
                                        <img src={item.thumbnail} className="card-img-top img-frame " alt="..." />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{item.title}</h5>
                                        <p className="card-text  h-230">{item.description}</p>
                                        <span className='text-muted font-14'>Note : {item.returnPolicy}</span>
                                        <h4>₹ {Math.ceil(item.price * 80)}</h4>
                                        {/* <Link to={`/order`} state={{Product :item}} className="btn btn-primary" >Add To cart</Link> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className='d-flex justify-content-center'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={previous}>Previous</button>
                        </li>
                        <li className="page-item">
                            <span className="page-link">{page}</span>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setpage(p => p + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>

    )
}

export default Product