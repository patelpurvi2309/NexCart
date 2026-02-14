import React from 'react'
import { Link } from 'react-router-dom';

const Category = ({ catdata }) => {
    return (
        
        <div className='sidebar'> 
            <ul className='list-group '>
                {
                    catdata.map((item, index) => {
                        // console.log(item); 
                        return (

                            <Link className='nav-link' to={`/catproduct/${item.slug}`}>
                                <li className='bg-white text-primary fw-bolder list-group-item nav-link'>
                                {item?.name}
                            </li></Link>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Category