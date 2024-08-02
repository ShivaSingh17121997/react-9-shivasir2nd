import { useState } from "react"




function Events() {

    const [name, setName] = useState("");
    // console.log("name", name)

    const [brands, setBrands] = useState("")
    const [click, setClick] = useState(false);

    console.log(click)
    // console.log(brands)


    // events 

    const handleClick = (name) => {
        console.log("badhai ho button click ho gya", name)
    }

    const handleClickMe = () => {
        alert("The second button is clicked by chiku")
    }


    

    return <div>

        <button onClick={() => handleClick("this is button")} >Click</button>






        <button onClick={()=>dhandleClickMe()} >Click me</button>

        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />



        <select onChange={(e) => setBrands(e.target.value)} >
            <option value="">Brands</option>
            <option value="Nike">Nike</option>
            <option value="Gucci">Gucci</option>
            <option value="Abibas">Abibas</option>
        </select>

        <div>
            <label >
                <input checked={click} onChange={(e) => setClick(!click)} type="checkbox" />
                Manne click Karo
            </label>
        </div>

    </div>
}

export default Events;