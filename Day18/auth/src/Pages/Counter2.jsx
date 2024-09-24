import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

// reducer is pure function 
const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };


        default:
            return state

    }

}

// A=>action is an object  ==>R=reducer ==>   State

export default function Counter2() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Counter with reducer </h2>

            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "INCREMENT" })}  >Increment</button>

            <button onClick={() => dispatch({ type: "DECREMENT" })} >Decrement</button>


        </div>
    )
}
