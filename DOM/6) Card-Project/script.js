const users = [
  {
    fullName: "Emma Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Creative designer specializing in user-centered digital experiences and modern interface design.",
    tags: ["design", "ui", "ux", "creative"]
  },
  {
    fullName: "Liam Martinez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Full Stack Developer",
    description: "Experienced developer skilled in JavaScript, React, Node.js, and scalable web applications.",
    tags: ["developer", "javascript", "react", "nodejs"]
  },
  {
    fullName: "Sophia Lee",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description: "Marketing strategist focused on SEO, social media growth, and brand storytelling.",
    tags: ["marketing", "seo", "branding", "socialmedia"]
  },
  {
    fullName: "Noah Anderson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Data Analyst",
    description: "Data-driven analyst passionate about transforming complex data into actionable insights.",
    tags: ["data", "analytics", "python", "business"]
  },
  {
    fullName: "Olivia Brown",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profession: "Product Manager",
    description: "Results-oriented product manager experienced in agile development and cross-functional leadership.",
    tags: ["product", "agile", "leadership", "strategy"]
  },
  {
    fullName: "William Davis",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    profession: "Mobile App Developer",
    description: "Android and iOS developer building performant and user-friendly mobile applications.",
    tags: ["mobile", "android", "ios", "flutter"]
  },

];

let sum = ''

users.forEach(function(elem){
            sum = sum + `<div class="card">
            <img src= ${elem.image}>
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>

        </div>`
    // console.log(elem.fullName);
})

let main = document.querySelector('main')

main.innerHTML = sum