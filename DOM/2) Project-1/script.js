let arr = [
  {
    shortName: "CSK",
    fullName: "Chennai Super Kings",
    primaryColor: "Yellow",
    secondaryColor: "Blue",
    trophies: 5,
    captain: "MS Dhoni",
    homeGround: "MA Chidambaram Stadium",
    founded: 2008,
  },
  {
    shortName: "MI",
    fullName: "Mumbai Indians",
    primaryColor: "Blue",
    secondaryColor: "Gold",
    trophies: 5,
    captain: "Hardik Pandya",
    homeGround: "Wankhede Stadium",
    founded: 2008,
  },
  {
    shortName: "RCB",
    fullName: "Royal Challengers Bengaluru",
    primaryColor: "Red",
    secondaryColor: "Black",
    trophies: 0,
    captain: "Faf du Plessis",
    homeGround: "M. Chinnaswamy Stadium",
    founded: 2008,
  },
  {
    shortName: "KKR",
    fullName: "Kolkata Knight Riders",
    primaryColor: "Purple",
    secondaryColor: "Gold",
    trophies: 2,
    captain: "Shreyas Iyer",
    homeGround: "Eden Gardens",
    founded: 2008,
  },
  {
    shortName: "RR",
    fullName: "Rajasthan Royals",
    primaryColor: "Pink",
    secondaryColor: "Blue",
    trophies: 1,
    captain: "Sanju Samson",
    homeGround: "Sawai Mansingh Stadium",
    founded: 2008,
  },
  {
    shortName: "SRH",
    fullName: "Sunrisers Hyderabad",
    primaryColor: "Orange",
    secondaryColor: "Black",
    trophies: 1,
    captain: "Pat Cummins",
    homeGround: "Rajiv Gandhi Intl. Stadium",
    founded: 2012,
  },
  {
    shortName: "DC",
    fullName: "Delhi Capitals",
    primaryColor: "Blue",
    secondaryColor: "Red",
    trophies: 0,
    captain: "Rishabh Pant",
    homeGround: "Arun Jaitley Stadium",
    founded: 2008,
  },
  {
    shortName: "PBKS",
    fullName: "Punjab Kings",
    primaryColor: "Red",
    secondaryColor: "Silver",
    trophies: 0,
    captain: "Shikhar Dhawan",
    homeGround: "IS Bindra Stadium",
    founded: 2008,
  },
  {
    shortName: "LSG",
    fullName: "Lucknow Super Giants",
    primaryColor: "Light Blue",
    secondaryColor: "Orange",
    trophies: 0,
    captain: "KL Rahul",
    homeGround: "Ekana Stadium",
    founded: 2022,
  },
  {
    shortName: "GT",
    fullName: "Gujarat Titans",
    primaryColor: "Dark Blue",
    secondaryColor: "Gold",
    trophies: 1,
    captain: "Shubman Gill",
    homeGround: "Narendra Modi Stadium",
    founded: 2022,
  },
];

let btn = document.querySelector("button");

let firstPro = document.querySelector(".pro");
let h1 = document.querySelector("h1");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  let win = arr[Math.floor(Math.random() * arr.length)];
  h1.innerHTML = win.shortName;
  firstPro.innerHTML = `
  Full Name: ${win.fullName}<br>
  Trophies: ${win.trophies}<br>
  Captain: ${win.captain}<br>
  Home Ground: ${win.homeGround}<br>
  Founded: ${win.founded}`;
  h1.style.backgroundColor = win.secondaryColor;
  main.style.backgroundColor = win.primaryColor;
});
