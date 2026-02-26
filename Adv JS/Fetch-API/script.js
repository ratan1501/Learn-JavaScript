// Fetch API

let fct = "https://meowfacts.herokuapp.com/";

let getFacts = async () => {
    console.log("Loading data...");
    
    let res = await fetch(fct);
    console.log(res);
    
    let data = await res.json();
    console.log(data.data[0]);
}

getFacts();