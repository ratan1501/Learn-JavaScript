// Async Await

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("data" , dataId);
            resolve(200)
        }, 2000);
    });
};

async function getWeatherData() {
    console.log("Loading Data 1");
    await getData(1)
    console.log("Loading Data 2");
    await getData(2)
    console.log("Loading Data 3");
    await getData(3)
    console.log("Loading Data 4");
    await getData(4)
}

getWeatherData();