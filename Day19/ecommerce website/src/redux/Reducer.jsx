import React, { act } from 'react'
import { ADD_PRODUCTS, ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART } from './ActionType'

const initialState = {
  products: [],
  cart: []
}


export default function Reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: [...state.products, action.payload] }
    case GET_PRODUCTS:
      return { ...state, products: action.payload }

    // add to cart
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id != action.payload) }


    default:
      return state
  }

}
