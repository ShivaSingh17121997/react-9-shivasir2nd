import { useState } from "react";




function Hooks() {

    // inbuilt fun to perform specific task
    const [count, setCount] = useState(0);
    console.log("count", count)


    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }



    return <>
        <h2>Hooks{count}</h2>
        <h1>{count}</h1>
        <button onClick={handleIncrease} >Increase{count}</button>
        <button onClick={handleDecrease} >Decrease{count}</button>
        <button onClick={reset}>Reset</button>


        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
    </>
}

export default Hooks;