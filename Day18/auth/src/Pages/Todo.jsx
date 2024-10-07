import React, { act, useReducer, useState } from 'react'

const initalState = {
    todo: [],
    input: ""
}

const reducer = (state, action) => {

    console.log(action)
    switch (action.type) {

        case "ADD_TODO":
            return { ...state, todo: [...state.todo, action.payload] };

        case "EDIT_TODO":
            return { ...state, todo: state.todo.map((item) => item.id === action.payload.id ? action.payload : item) }

        case "DELETE_TODO":
            return { ...state, todo: state.todo.filter((item) => item.id !== action.payload) }

        default:
            return state
    }
};


export default function Todo() {

    const [state, dispatch] = useReducer(reducer, initalState)
    const [id, setId] = useState("")
    const [input, setinput] = useState("");
    const [EditId, setEditid] = useState(null);
    console.log(EditId)

    const handleTodo = (e) => {
        e.preventDefault();

        if (EditId) {
            // update logic
            dispatch({ type: "EDIT_TODO", payload: { todo: input, id: id } })
            setEditid(null)

        } else {
            // add
            dispatch({ type: "ADD_TODO", payload: { todo: input, id: id } })

        }

        setinput("")
        setId("")

    }

    // handleDelete fun

    const handleDelete = (id) => {
        dispatch({ type: "DELETE_TODO", payload: id })
    }

    // edit function

    const handleEdit = (item) => {
        setEditid(item.id)
        setId(item.id)
        setinput(item.todo)

    }



    return (
        <div>
            <h3>Todo with reducer </h3>

            <form onSubmit={handleTodo} >
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='enter id' /> <br /> <br />
                <input value={input} onChange={(e) => setinput(e.target.value)} type="text" />
                <button>Add</button>
            </form>

            <div>
                {
                    state.todo.map((item, i) => {
                        return <div key={i} >
                            <p>{item.id}</p>
                            <h3>{item.todo}</h3>
                            <button onClick={() => handleDelete(item.id)}  >delete</button>

                            <button onClick={() => handleEdit(item)} >Edit</button>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
