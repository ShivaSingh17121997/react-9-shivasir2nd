import React, { act, useReducer, useState } from 'react'

const initalState = {
    todo: [],
    input: ""
}

const reducer = (state, action) => {

    // console.log(action)
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todo: [...state.todo, action.payload] };

        default:
            return state
    }

}


export default function Todo() {

    const [state, dispatch] = useReducer(reducer, initalState)

    const handleTodo = (e) => {
        e.preventDefault();

        dispatch({ type: "ADD_TODO", payload: { input } })  // action {}
        setinput("")

    }

    console.log(state.todo)

    return (
        <div>
            <h3>Todo with reducer </h3>

            <form onSubmit={handleTodo} >
                <input value={input} onChange={(e) => setinput(e.target.value)} type="text" />
                <button>Add</button>
            </form>

            <div>
                {
                    state.todo.map((item, i) => {
                        return <div key={i} >
                            <h3>{item.input}</h3>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
