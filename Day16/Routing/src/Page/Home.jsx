import React from 'react';
import Card from './Card';

export default function Home() {

    const products = [
        { id: 1, name: "nike", price: 211 },
        { id: 2, name: "adibas", price: 111 },
        { id: 3, name: "puma", price: 1211 },
        { id: 4, name: "abibas", price: 311 },
        { id: 5, name: "gucci", price: 211 },
        { id: 6, name: "campuss", price: 211 },
        { id: 7, name: "mairathi", price: 211 },
        { id: 8, name: "jordan", price: 211 },
    ]

    const clickFunction = () => {
        alert("button is clicked")
    }


    return (
        <div>
            <h1>Home</h1>

            {
                products.map((item) => <Card key={item.id} {...item} clickFun={clickFunction} />)
            }



        </div>
    )
}
