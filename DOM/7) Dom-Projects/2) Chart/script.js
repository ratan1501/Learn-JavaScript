let products = [
    {name: "Gitar", headline: "Musical Instrument", price: "19,000", image: "https://images.unsplash.com/photo-1668357529852-09c9c96efc3e?w=500&auto=format&fit=crop&q=60"},
    {name: "Rolex", headline: "Watch", price: "99,000", image: "https://images.unsplash.com/photo-1662384197911-e82189f4dc60?w=500&auto=format&fit=crop&q=60"},
    {name: "Table", headline: "Aesthetic Table", price: "40,000", image: "https://plus.unsplash.com/premium_photo-1676999260189-5412ac9aeb04?w=500&auto=format&fit=crop&q=60"},
    {name: "Chair", headline: "Black Chair", price: "19,000", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60"}
];

let popular = [
    {name: "Chair", headline: "White Chair", price: "12,000", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Lights", headline: "Golden lights", price: "9,999", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Lamp", headline: "Table lamp", price: "5,000", image: "https://images.unsplash.com/photo-1621177555630-b861919c864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbXB8ZW58MHx8MHx8fDA%3D"}
]

let cart = [];

function addProducts () {

    let clutter = "";

    products.forEach(function(product, index) {

        clutter += `
        <div class="product w-fit rounded-xl p-2 bg-white">
            
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover"
                     src="${product.image}" />
            </div>

            <div class="data w-full px-2 py-5">
                
                <h1 class="font-semibold text-xl leading-none tracking-tight">
                    ${product.name}
                </h1>

                <div class="flex justify-between w-full items-center mt-2">
                    
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">
                            ${product.headline}
                        </h3>

                        <h4 class="font-semibold mt-2">
                            ₹${product.price}
                        </h4>
                    </div>

                    <button data-index="${index}"class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}"  class="add ri-add-line"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts () {
    let clutter = ""
    popular.forEach(function(product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">₹${product.price}</h4>
                    </div>
                </div>`;
    });
    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
    document.querySelector(".products")
    .addEventListener("click", function(details) {
        if(details.target.classList.contains('add')) {
            cart.push(products[details.target.dataset.index])
        }
    })
}

function showCart() {
    document.querySelector(".carticon")
    .addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        let clutter = "";
        cart.forEach(function(prod, index) {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hiddden">
                    <img src="${prod.image}" alt="" class="w-full h-full object-cover rounded-lg"/>
                </div>
                <div>
                    <h3 class="font-semibold opacity-80">${prod.headline}</h3>
                    <h5 class="text-sm font-semibold opacity-80 mt-1">&#8377;${prod.price}</h5>
                </div>
            </div>`;
        });

        document.querySelector(".cartexpnd")
        .innerHTML = clutter
    })
}


showCart();
addToCart();
addPopularProducts();
addProducts();
