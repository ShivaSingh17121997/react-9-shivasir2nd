import React, { useEffect, useState } from 'react'

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [studentData, setStudentData] = useState([]);  // global variable
    const [totalPage, setTotalPage] = useState([]);
    const [serarch, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("");
    console.log(category);



    // step 3 for edit
    const [editId, setEditId] = useState(null);




    const handleFormData = (event) => {
        event.preventDefault(); // prevent the default behaivour of form;

        // from validation check if name, email, password is empty or not
        if (!name || !email || !password) {
            alert("All input fields are required")
            return;
        }

        if (editId) { //    // step 4 for edit
            // logic of update
            fetch(`http://localhost:9000/student/${editId}`, {
                method: "PATCH",
                body: JSON.stringify({ name, email, password }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    fetchFun()

                })

            setEditId(null)


        } else {
            // add data logic
            fetch("http://localhost:9000/student", {   // post request  sending data to the json-server// fetch gives promise asynchronus operation
                method: "POST",
                body: JSON.stringify({ name, email, password }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then((res) => res.json()) // responce
                .then((data) => {
                    fetchFun()
                    console.log(data, "data added successfully")
                })
                .catch((err) => console.log("something is wrong", err))

        }
        setName("");
        setEmail("")
        setPassword("")
    }


    // serach fun
    const handleSearch = () => {
        console.log(serarch)
        fetchFun(serarch)
    }



    // show data on user Interface // usestae , useEffect, what is react, virtual dom, advantage of react ,


    // bringing data from backend to frontend
    // use to mangae the side effects , it loads one time if the dependency array is empty

    useEffect(() => {
        fetch(`http://localhost:9000/student`) // promise
            .then((res) => res.json())
            .then((data) => {
                setTotalPage(data)
            })
            .catch((err) => console.log("something is wrong ", err))
    }, [])



    const fetchFun = (search, page) => {
        console.log(search, "search fun")
        fetch(`http://localhost:9000/student?_limit=2&_page=${page}&q=${search}`) // promise
            .then((res) => res.json())
            .then((data) => {
                setStudentData(data)
                console.log(data)
            })
            .catch((err) => console.log("something is wrong ", err))
    }

    //  if dependency array is empty it will run only one time , when app loads, 
    // useEffect hook is use to manage side effect; 
    useEffect(() => {
        fetchFun(serarch, page);
    }, [serarch, page]);







    // map function higher order function // map(()=>{}) // hof a function that takes another function as an arugment it can return a value , null or a funciton ;

    // map does not modify origina l array , iterate over it and give a new array;



    // delete functin 

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:9000/student/${id}`, {
            method: "DELETE"
        }).then((res) => res.json())
            .then((data) => {
                // fetchFun();
                console.log("Data deleted successfully")
                setStudentData(studentData.filter((item) => item.id !== id))
            })
            .catch((err) => console.log(err))

        // update data without fetch fun
    }

    // Edit function step 2 for edit
    const handleEdit = (item) => {
        setEditId(item.id)
        setName(item.name)
        setEmail(item.email)
        setPassword(item.password)
    }



    // sorting
    const handleAsc = () => {
        const ascData = [...studentData].sort((a, b) => a.price - b.price);
        setStudentData(ascData)
    }


    const handleDesc = () => {
        const DescData = [...studentData].sort((a, b) => b.price - a.price)
        setStudentData(DescData);
    }




    // filter function 
    let filteredData

    if (category === "") {
        filteredData = studentData;// student data is array of all data fetched
    } else {
        filteredData = studentData.filter((item) => item.category === category);  // filter returns new array of provided data
    }




    return (
        <div>
            <h1>Form</h1>
            <div>
                <input value={serarch} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Serarch your todo' /> <button onClick={() => handleSearch()} >Search</button> <br /><br />
            </div>





            <form onSubmit={handleFormData} >

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter name' />

                <br /><br />

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' />

                <br /><br />

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' /> <br /><br />

                <button>{editId ? "Update" : "Add"}</button>
            </form>
            <br />

            {/* sorting */}
            <div>
                <button onClick={handleAsc} >Asc</button>
                <button onClick={handleDesc} >Desc</button>
            </div>

            {/* filter data */}

            <div>
                <select onChange={(e) => setCategory(e.target.value)} >
                    <option value="">Select Category</option>
                    <option value="god">God</option>
                    <option value="brahm">Brahm</option>
                    <option value="dev">Dev</option>
                    <option value="movie">Movie</option>
                </select>
            </div>


            {/* shwing data */}
            <div>
                {
                    filteredData.map((item) => {
                        return <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px", backgroundColor: "skyblue" }} >
                            <p>{item.id}</p>
                            <h3>{item.name}</h3>
                            <h4>{item.email}</h4>
                            <h5>{item.price}</h5>
                            <h5>{item.category}</h5>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>

                            {/* step 1 for edit */}
                            <button onClick={() => handleEdit(item)} >Edit</button>

                        </div>
                    })
                }
            </div>







            {/* pagination */}
            <div>
                <button disabled={page <= 1} onClick={(e) => setPage(page - 1)} >Prev</button>
                <button>{page}</button>
                <button disabled={page === Math.ceil(totalPage.length / 2)} onClick={(e) => setPage(page + 1)} >Next</button>
            </div>
        </div>
    )
}
