const Home = ()=>{

    /**
     * Here Handle Click is function which is injected in onClick Event using dynamic 
     * template injections
     */
    const handleClick = ()=>{
        console.log("hello ninjas");
    }

    const handleClickAgain = (name)=>{
            console.log("Hello "+name);
    };
    return(
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me </button>
            <button onClick={()=>{handleClickAgain('mario')
            }}>Click me again</button>
        </div>

    );
}

export default Home;