import React from 'react'
import { Link } from 'react-router-dom'

// prop drilling
// context api. useContext hook

export default function Card({ id, name, price, clickFun }) {
    // console.log(props) // providing an object

    return (
        <div style={{ border: "1px solid black", margin: "10px" }} >
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="" />
            <p>{props.id}</p>
            <h4>{props.name}</h4>
            <p> {props.price}</p>
            <button onClick={props.clickFun} >Click</button> */}


            <div>
                {/* param parameter */}
                <Link to={`/single/${id}`}>
                    <p>{id}</p>
                    <h4>{name}</h4>
                    <p>{price}</p>
                    <button onClick={clickFun} >Click me!</button>
                </Link>
            </div>


        </div>
    )
}
