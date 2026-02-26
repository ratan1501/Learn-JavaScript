// Callback

function zomatoOrderPalced( ) {
    console.log("We have started preparing your food");
}

function payment (amount) {
    console.log(`${amount} payment has initilized`);
    console.log("Payment is received");
    zomatoOrderPalced()
}
payment(3000, zomatoOrderPalced)


// Example 2

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}


// Callback hell
getData(1, () => {
    console.log("Getting Data 2");
    getData(2, () => {
        console.log("Getting Data 3");
        getData(3, () => {
            console.log("Getting Data 4");
            getData(4)
        });
    });
});