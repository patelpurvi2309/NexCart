import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Category from './Category';
import Product from './Product';

const Shop = () => {

    let [catdata, setcatdata] = useState([])
    function secondData() {
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                setcatdata(response?.data)
                console.log(response?.data)
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    useEffect(() => {
        secondData()
    }, [])
    
    return (
        <div>
            <div className='row w-100'>
                <div className='d-none d-lg-flex col-lg-3 '>
                    <Category catdata={catdata}/>
                </div>
                <div className='col-lg-9'>
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Shop