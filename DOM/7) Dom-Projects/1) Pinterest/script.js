const arr = [
  { name: "Warm Window Light", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop&crop=entropy" },
  { name: "Autumn Leaves Closeup", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop&crop=entropy" },
  { name: "Soft Cloudy Sky", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=600&fit=crop&crop=entropy" },
  { name: "Cozy Corner Bookshelf", image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=600&h=600&fit=crop&crop=entropy" },
  { name: "Calm Lake at Sunset", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop&crop=entropy" },
  { name: "Foggy Field Sunrise", image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600&h=600&fit=crop&crop=entropy" },
  { name: "Warm Bedroom Corner", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&h=600&fit=crop&crop=entropy" },
  { name: "Soft Tea Setup", image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=600&fit=crop&crop=entropy" }
];


function showTheCards () {
    let  clutter = "";
    arr.forEach(function(obj) {
        clutter += `<div class="box">
    <img class="cursor-pointer" src="${obj.image}" alt="image">
    <div class="caption">Lorem ipsum</div>
    </div>`;

    })
    
    document.querySelector(".container")
    .innerHTML = clutter
    
}

function handleSearch () {

    let input = document.querySelector("#searchinput")

    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block"
    })
    input.addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none"
    })

    input.addEventListener("input", function(){
        let filterdArr = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));   
        let clutter = "";
        filterdArr.forEach(function(obj) {
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })     
        document.querySelector(".searchdata").style.display = "block"
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}


handleSearch()
showTheCards();


 