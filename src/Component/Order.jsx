import { Link, useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addToCart } from '../slice/cartSlice';
import { useDispatch } from 'react-redux';

const Order = () => {

    const location = useLocation();
    const product = location.state?.Product


    const [quantity, setQuantity] = React.useState(1);

    const handleChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const dispatch = useDispatch();

    if (!product) {
        return <h3 className="text-center">No Product Found</h3>;
    }
    const handleaddToCart = () => {
        dispatch(addToCart({
            ...product,
            quantity
        }));
    };
    console.log(product, quantity)
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-lg-4 ">
                    <div className=''>
                        <img src={product.thumbnail} className=" " alt="..." />
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <h3 className="card-title py-3 ">{product.title}</h3>
                    <h5 className="card-text py-3 ">{product.description}</h5>
                    <h6 className=' font-15'>Note : {product.returnPolicy}</h6>
                    <div className='d-flex align-items-center'>
                        <h6 className='my-2 '>{product.rating}</h6>
                        <Rating className='mx-1' name="half-rating" defaultValue={product.rating} precision={0.5} readOnly />

                    </div>

                    <h6 className=' font-15'>{product.warrantyInformation}</h6><hr></hr>
                    <div className='d-flex align-items-center '>
                        <h5 className='text-muted '>-{product.discountPercentage}%  </h5>
                        <h4 className='mx-2'> ₹{Math.ceil(product.price * 80)}</h4>
                    </div>
                </div>
                <div className="col-lg-4  ">
                    <Card className='w-75 mx-5'>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <h4> ₹{Math.ceil(product.price * 80)}</h4>
                                <h6 className='text-success fw-bold'>{product.availabilityStatus}</h6>
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.dark' }}>
                                <h6 className=' fw-bold'>{product.shippingInformation}</h6>
                            </Typography>
                            <div>
                                <FormControl sx={{ minWidth: 235 }} className='mt-2' size="small">
                                    <InputLabel id="demo-select-select-label">Select Quantity</InputLabel>
                                    <Select
                                        labelId="demo-select-select-label"
                                        id="demo-select-small"
                                        value={quantity}
                                        label="Select Quantity"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className=" text-center pt-3 p-0">
                              <Link to="/Addtocart">
                                <button className='btn btn-outline-primary w-100' onClick={handleaddToCart} >Add to card</button>
                              </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default Order