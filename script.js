const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalBoxes = 10;

 // Background
 const backgroundImg = new Image();
 backgroundImg.src = "./images/6.png";

class Box{
    constructor() {
        this.position = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        };

        this.size = {
            width: 30,
            height: 30,
        };

        this.velocity = {
            x: Math.random() * (1 - -1) + -1, y: 0,
        };

        this.color = "red";
    }

    draw() {

        // spaceship image
        const spaceShip = new Image();
        spaceShip.src = "./images/spaceship.png";

        c.drawImage(spaceShip, this.position.x, this.position.y, this.size.width, this.size.height);
 
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    update() {
        this.draw();
        this.move();
    }

}

const boxes = [];
for(let i = 0; i < totalBoxes; i++) {
    boxes.push(new Box());
}


function animate() {
    c.clearRect(0,0,400,400);

    c.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

    boxes.forEach(box =>
        box.update());
    window.requestAnimationFrame(animate);
}
animate();