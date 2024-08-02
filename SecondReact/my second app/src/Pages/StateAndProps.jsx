import { useState } from "react";

import Card from "./Card";


function StateAndProps() {

    // states are used to store data within a component;  states are mutable(changing) update hote rahate hai,
    // props (properties) are used to store data from parent component to child component immutable

    const [name, setName] = useState(""); // useState is an inbuilt function provided by react
    //   state, updater func



    console.log("name is", name)


    // props
    let student = [
        { id: 1, name: "ram" }, // item1
        { id: 2, name: "shyam" },
        { id: 3, name: "laxman" },
    ]


    return <div>
        <h1>state and props</h1>

        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

        <div>
            {
                student.map((item) => <Card {...item} />)
            }
        </div>

    </div>
}






export default StateAndProps;