// Promises

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json()) 
//   .then(data => {
//     data.forEach(post => {
//       console.log(post.body); 
//     });
//   });


// Example 

let getPromise = () => {
  return new Promise((reslove, rejucted) => {
    console.log("Promised");
    reject("error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err) => {
  console.log("rejected", err);
});