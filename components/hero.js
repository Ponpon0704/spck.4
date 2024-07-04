class Hero {
    constructor() {}

    render() {
        let heroContainer = document.createElement("div")
        heroContainer.classList.add("hero")

        let greeting = document.createElement("h1")
        greeting.innerHTML = "Hello everybody, I'm Mạnh"
        

        let role = document.createElement("p")
        role.innerHTML = "My full name is Lê Đức Mạnh, you can call me Pon "
        
        let role2 = document.createElement("p")
        role2.innerHTML = "I'm a student at MindX School "

        let role3 = document.createElement("p")
        role3.innerHTML = "I was born in Gia Lai city"

        let role4 = document.createElement("p")
        role4.innerHTML = "My hobbies are playing games, programming, and badminton"

        let role5 = document.createElement("p")
        role5.innerHTML = "My dream is to become the best developer"

        let wish = document.createElement("a")
        wish.href ="#"
        wish.classList="hero-btn"
        wish.innerHTML = "Join Me"

        let imgContainer = document.createElement("div")
        this.imgContainer = document.createElement("hero-container")
        imgContainer.classList.add("row")

        let img = document.createElement("img")
        img.src = "img1.jpg"
        img.classList.add("img")

        heroContainer.appendChild(greeting)
        heroContainer.appendChild(role)
        heroContainer.appendChild(role2)
        heroContainer.appendChild(role3)
        heroContainer.appendChild(role4)
        heroContainer.appendChild(role5)
        imgContainer.appendChild(img)
        heroContainer.appendChild(wish)
        heroContainer.appendChild(imgContainer)
        return heroContainer
        
    }
}

export default Hero;
