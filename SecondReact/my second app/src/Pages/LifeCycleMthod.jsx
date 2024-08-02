import React, { useEffect, useState } from 'react'

export default function LifeCycleMthod() {
    const [click, setHandleclick] = useState(0)

    // interview quesitons
    // what are hooks
    // what are lifecycle methods
    // how to manage lifecycle methods
    // synatax of useEffect hook
    // what is dependency array


    useEffect(() => {
        console.log("component is created")

        // cleanup function => is a callback function
        return () => {
            console.log("Component is deleted")
        }

    }, [])

    useEffect(() => {
        console.log("component is updated")
    }, [click]) // dependency array


    const handleClick = () => {
        setHandleclick(click + 1)
    }



    return (<div>
        <div>LifeCycleMthod</div>
        <h1>{click}</h1>
        <button onClick={handleClick} >Click</button>
    </div>
    )
}


// hooks are inbuilt functions provided by react to perform specific tasks  useSTate -> state ; lifecycle manage karnen k liye useEffect hook