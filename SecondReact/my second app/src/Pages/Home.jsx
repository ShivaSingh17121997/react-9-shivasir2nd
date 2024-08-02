



function Home() {

    // commnts crated a funciton 
    const handleHeading = () => {
        console.log("Heading is clicked")
    }



    return <div>
        {/* created a onclick event in h1  tag */}
        <h1 onClick={handleHeading} >This is my first react app</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis natus a unde odio amet minima esse eligendi porro dignissimos officiis praesentium beatae quo, quae ex, provident est nemo eveniet nulla!</p>

        <img src="" alt="" />
        <input type="text" placeholder="" required />
    </div>
}

export default Home
//jsx javascript xml