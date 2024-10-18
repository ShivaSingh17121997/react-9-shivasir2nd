import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../redux/ActionType';
//cartData.map(item => ({ id: item.id, quantity: 1 }))); 

export default function AddToCart() {

    const cartData = useSelector(store => store.cart);

    // cart = 4 = > id, qunatiy ;
    const [quantity, setQuantity] = useState(cartData.map((item) => ({ id: item.id, quantity: 1 })));
    const dispatch = useDispatch();


    console.log(quantity)




    // setQuantities(quantities.filter(item => i.id !== id)); 
    // Function to handle removing an item from the cart
    const handleRemoveFromCart = (id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id });

    };



    // handle Quantity;

    const handleQuantities = (id, newQuantity) => {
        if (newQuantity >= 1) { // Ensure you're checking the new quantity, not the existing one
            setQuantity(quantity.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    }

    // calculate the total price of products
    // cart items quantity * price = total value;

    const calculateTotalPrice = () => {
        return quantity.reduce((acc, cv) => {

            const product = cartData.find(cartItem => cartItem.id === cv.id); // {id:1,price:2122}

            return acc + (cv.quantity * (product ? product.price : 0));

        }, 0);
    }



    return (
        <div style={{ display: "flex", justifyContent: 'space-evenly' }} >

            <div style={{ display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "auto", gap: '20px' }}>


                {
                    cartData.map((item) => {
                        const quantityitem = quantity.find(q => q.id === item.id)?.quantity || 1;

                        return (
                            <div key={item.id}>
                                <img width="200px" src={item.image} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>${item.price}</p>
                                <p>{item.description}</p>

                                {/* Quantity controls */}
                                <div>
                                    <button onClick={() => handleQuantities(item.id, quantityitem - 1)}  >-</button>
                                    <button>{quantityitem}</button>
                                    <button onClick={() => handleQuantities(item.id, quantityitem + 1)} >+</button>
                                </div>

                                {/* Remove button */}
                                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        );
                    })
                }
            </div>

            {/* Total Price Calculation */}
            <div>
                <h3>Total Price: ${calculateTotalPrice()}</h3>
            </div>
        </div >
    );
}


//  // const handleQuantityChange = (id, newQuantity) => {


//     if (newQuantity >= 1) {
//         setQuantities(quantities.map((item) => item.id === id ? { ...item, quantity: newQuantity } : item))
//     };

// };