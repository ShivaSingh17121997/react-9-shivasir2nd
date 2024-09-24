import React from 'react'
import { useReducer } from 'react'

// initial state is a simple object;
const initialState = {
    count: 0
};


// reducer is a pure function , pure functions are functions that provide same output for same type of input
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };

        case "DECREMENT":
            return { ...state, count: state.count - 1 };

        case "RESET":
            return { count: 0 }

        default:
            return state
    };
};

// Action{obj} ==> Reducer pureFn ==>update state {};  ARS


export default function Home() {

    const [state, dispatch] = useReducer(reducer, initialState);  // step 1 

    return (
        <div>
            <h1>Counter with userReducer hook</h1>

            <h1>{state.count}</h1>
            <button disabled={state.count <= 0} onClick={() => dispatch({ type: "DECREMENT" })} >Decrement</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })} >Increment</button>
            <button onClick={() => dispatch({ type: "RESET" })} >Reset</button>

        </div >
    )
}



// userReducer is react inbuilt hook, used to manage states , useReducer contains dispath, action , reducer, and initial state;