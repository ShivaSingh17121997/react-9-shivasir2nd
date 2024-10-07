import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { ADD_PRODUCTS } from '../redux/ActionType';

export default function Form() {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState({}); // setting the error
    console.log(error)

    const dispatch = useDispatch()

    let products = {
        image,
        name,
        price,
        quantity,
        description,
        category
    };


    const handleProductData = (e) => {
        e.preventDefault();

        let errorObj = {};

        if (!image) {
            errorObj.image = "image is required";
        } else if (!name) {
            errorObj.name = "name is required";
        } else if (!price) {
            errorObj.price = "price is required";
        } else if (!quantity) {
            errorObj.quantity = "quantity is required";
        } else if (!description) {
            errorObj.description = "description is required";
        } else if (!category) {
            errorObj.category = "category is required";
        }


        if (Object.keys(errorObj).length > 0) {
            setError(errorObj)
        } else {
            fetch("http://localhost:8000/products", {
                method: "POST",
                body: JSON.stringify(products),
                headers: {
                    "Content-Type": "application/json;  charset=UTF-8",
                },
            }).then((res) => res.json())
                .then((data) => {
                    dispatch({ type: ADD_PRODUCTS, payload: data }) // dispatch ==> reducer
                    console.log(data)
                })
                .catch((error) => console.log(("some thing is wrong", error)));
            setCategory("")
            setImage("")
            setName("")
            setPrice("")
            setDescription("")
            setQuantity("")
        }
    }







    return (
        <div>
            <form onSubmit={handleProductData} >

                <div>
                    <input value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder='Enter product image' />
                    <p> {error && <span style={{ color: "red" }} >{error.image}</span>} </p>
                </div>

                <div>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter product name' />
                    <p> {error && <span style={{ color: "red" }} >{error.name}</span>} </p>
                </div>

                <div>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Enter product price' />
                    <p> {error && <span style={{ color: "red" }} >{error.price}</span>} </p>
                </div>

                <div>
                    <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="text" placeholder='Enter product quantity' />
                    <p> {error && <span style={{ color: "red" }} >{error.quantity}</span>} </p>
                </div>

                <div>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Enter product description' />
                    <p> {error && <span style={{ color: "red" }} >{error.description}</span>} </p>
                </div>

                <div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="">cloths</option>
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                        <option value="kids">Kids</option>
                    </select>
                    <p> {error && <span style={{ color: "red" }} >{error.category}</span>} </p>
                </div>

                <div>
                    <button>Add</button>
                </div>

            </form>
        </div>
    )
}
