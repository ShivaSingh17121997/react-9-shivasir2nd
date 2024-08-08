import React, { useRef, useState } from 'react'
let student = [
    { id: 1, name: 'ram' },
    { id: 2, name: 'laxman' },
    { id: 3, name: 'bharat' },
]
export default function Events2() {
    const [data, setData] = useState(student);

    const ref = useRef();

    console.log(ref)




    const handleEdit = (userId) => {
        console.log("id is", userId)
    }

    const loader = () => {
        return <h1> Loading ...</h1>
    }

    // refs referenced


    // fragments

    return (
        // fragments
        <>
            {
                data == null ? loader() :
                    data.map((item) => {
                        return <div key={item.id}>
                            <ul>
                                <li>{item.id}</li>
                                <li>{item.name}</li>
                                <li><button>Delete</button></li>
                            </ul>
                        </div>
                    })
            }

        </>


    )
}
