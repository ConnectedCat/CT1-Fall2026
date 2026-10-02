let clrArea = document.getElementById("colorArea")
let imgToToggle = document.getElementById("imgToToggle")
console.log(imgToToggle.src)
let clrBtn = document.getElementById("colorButton")
let txtBtn = document.getElementById("textButton")
let imgBtn = document.getElementById("imageButton")

let changingColor = ()=>{
    let redC = Math.random()*255
    let greenC = Math.random()*255
    let blueC = Math.random()*255
    clrArea.style.backgroundColor = "rgb(" + redC + ", " + greenC + ", " + blueC + ")"
}

let addingText = ()=>{
    let p = document.createElement("p")
    console.log(p)
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla elit a ipsum porttitor feugiat. Ut porta diam sit amet convallis vulputate. Vestibulum non tincidunt nulla, in feugiat velit. Nullam interdum tincidunt placerat."
    clrArea.after(p)
}

let changingImage = ()=>{
    if(imgToToggle.alt == "cute quokka 1"){
        imgToToggle.src = "images/quokka2.jpg"
        imgToToggle.alt = "cute quokka 2"
    }
    else {
        imgToToggle.src = "images/quokka1.jpg"
        imgToToggle.alt = "cute quokka 1"       
    }
}

clrBtn.addEventListener("click", changingColor)
txtBtn.addEventListener("click", addingText)
imgBtn.addEventListener("click", changingImage)