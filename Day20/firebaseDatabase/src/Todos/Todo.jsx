import React, { useEffect, useState } from 'react'
import { doc, setDoc, getDocs, addDoc, collection, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../ConfigFirebase';

export default function Todo() {
    const docRef = doc(db, "todos", "todo");
    const [todoInput, setTodoInput] = useState("");
    const [todoData, setTodoData] = useState([]);
    const [editid, setEditId] = useState(null);



    const handleTodos = async (e) => {
        e.preventDefault();

        try {
            // Add a new document in collection "todos"

            if (editid) {
                // edit
                const todoRef = doc(db, "todos", editid) // find the data in data base
                updateDoc(todoRef, { todo: todoInput }) // update the new dagta in the input field;
                setEditId(null);


            } else {
                // add
                const docRef = await addDoc(collection(db, "todos"), {
                    todo: todoInput
                });

                console.log("Document written with ID: ", docRef.id);
            }

            setTodoInput("")
            getData()


        } catch (error) {
            console.log(error)
        }
    }

    // code to get data from firebase data base
    async function getData() {
        const querySnapshot = await getDocs(collection(db, "todos"));
        const todosArray = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            todosArray.push({
                id: doc.id,
                ...doc.data()
            })
        });
        setTodoData(todosArray)
    };
    useEffect(() => {
        getData()
    }, []);

    console.log(todoData)

    // delete function 
    async function handleDelete(id) {
        console.log(id)
        await deleteDoc(doc(db, "todos", id))

        setTodoData(todoData.filter((item) => item.id !== id))

    }

    // edit function 
    const handleEdit = (item) => {
        setEditId(item.id);
        setTodoInput(item.todo)
    }

    //optimizartion code splitting, chunking , lazy loading, useeeff, usememo, usecallback

    return (
        <div>
            <h2>Fire base todos</h2>

            <form onSubmit={handleTodos} >
                <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} type="text" placeholder='Enter todo' />
                <button> {editid ? "Update" : "Add"} </button>
            </form>

            <div>
                {
                    todoData.length > 0 ? todoData.map((item) => {
                        return <div key={item.id}>
                            {console.log(item)}
                            <h3>{item.todo}</h3>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                            <button onClick={() => handleEdit(item)} >Edit</button>
                        </div>

                    }) : <h2>Loading...</h2>

                }


            </div>
        </div>
    )
}
