import { useState } from "react";
import "./Form.css"



function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [married, setMarried] = useState(false);
    const [gender, setGender] = useState('');
    const [errMsg, setErrMsg] = useState({})

    console.log(errMsg)


    const handleForm = (e) => {
        e.preventDefault();

        let errObj = {};

        if (!name) {
            errObj.name = "name is required"
        } else if (!email) {
            errObj.email = "email is required"
        } else if (!password) {
            errObj.password = "password is required"
        }

        if (Object.keys(errObj).length > 0) {
            setErrMsg(errObj)

        } else {
            console.log(name, email, password, married, gender)

            setName('');
            setEmail('');
            setPassword('');
            setMarried(false);
            setGender('');
        }


    }


    return <div className="main-Container">
        <h1>Form</h1>



        <form className="form-container" onSubmit={handleForm} >

            <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            {errMsg.name && <span style={{ color: "red" }} >{errMsg.name}</span>}
            <br /><br />


            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errMsg.email && <span style={{ color: "red" }} >{errMsg.email}</span>}
            <br /><br />


            <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errMsg.password && <span style={{ color: "red" }} >{errMsg.password}</span>}
            <br /><br />

            <label >
                <input type="checkbox" checked={married} onChange={(e) => setMarried(!married)} />
                Married

            </label> <br /> <br />

            <select onChange={(e) => setGender(e.target.value)}  >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>

            <br /><br />

            <button>Add Data</button>


        </form>

        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>

        </div>


    </div>


}

export default Form;