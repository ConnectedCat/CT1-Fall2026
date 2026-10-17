let angle = 0

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    makeGrid()
    //transform:
    push()
    translate(100+100, 70 + 75)
    rotate(angle)

    //draw rect:
    fill(200, 160, 70)
    rect(-100, -75, 200, 150)

    makeGrid()
    pop()

    angle += 0.01
}

function makeGrid(gridRes = 10){
    let xVal = width/gridRes
    for(let x = 0; x <= gridRes; x++){
        line(xVal * x, 0, xVal * x, height)
    }
    let yVal = height/gridRes
    for(let y = 0; y <= gridRes; y++){
        line(0, yVal * y, width, yVal *y)
    }
}