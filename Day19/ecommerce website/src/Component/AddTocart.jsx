import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/ActionType';

export default function AddTocart() {
    const cartData = useSelector(store => store.cart) // 
    const dispatch = useDispatch();
    console.log(cartData)


    const handleRemovefromcart = (id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id });
    }

    return (
        <div>
            <h4>cart</h4>
            {
                cartData.length == 0 ? <h3>Cart is empty</h3> : cartData.map((item) => {
                    return <div key={item.id} >
                        <img width="200px" src={item.image} alt="" />
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                        <button onClick={() => handleRemovefromcart(item.id)} > Remove</button>
                        <div>
                            <button>-</button>
                            <button>1</button>
                            <button>+ </button>
                        </div>
                    </div>
                })
            }

        </div >
    )
}
