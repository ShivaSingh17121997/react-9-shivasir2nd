import React, { useState } from 'react'
let student = [
    { id: 1, name: 'ram' },
    { id: 2, name: 'laxman' },
    { id: 3, name: 'bharat' },
]
export default function Events2() {
    const [data, setData] = useState(student);




    const handleEdit = (userId) => {
        console.log("id is", userId)
    }

    const loader = () => {
        return <h1> Loading ...</h1>
    }

    return (
        <div>
            {
                data == null ? loader() :
                    data.map((item) => {
                        return <div key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <button onClick={() => handleEdit(item.id)} >Edit</button>
                        </div>
                    })
            }

        </div>


    )
}
