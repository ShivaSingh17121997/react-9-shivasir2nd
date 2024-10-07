import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import AddTocart from '../Component/AddTocart';
import { ADD_TO_CART } from '../redux/ActionType';

export default function SingleProductPage() {
    const [singleProdData, setSingleProdData] = useState({})
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then((data) => {
                console.log(data.data)
                setSingleProdData(data.data)
            });
    }, []);

    const handleAddToCart = () => {
        dispatch({ type: ADD_TO_CART, payload: singleProdData })
    }


    return (
        <div>
            <h1>single product page</h1>
            <img width="200px" src={singleProdData.image} alt="" />
            <h2>{singleProdData.name}</h2>
            <p>{singleProdData.price}</p>
            <p>{singleProdData.description}</p>
            <p>{singleProdData.category}</p>
            <button onClick={handleAddToCart} >Add to Cart</button>
            <button>buy now</button>
        </div>
    )
}
