////**********************************************************************************************
////*********************************************************************************************
//// Lecture  10: HTML5 Canvas: drawing, animating, and interaction
////**********************************************************************************************
////**********************************************************************************************

//************************
// initializing the canvas

var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
console.log(c);


// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// //// c.fillRect(x, y, width, height)
// c.fillRect(100, 100, 100, 150);
// c.fillStyle = "rgba(255, 0, 255, 0.5)"
// c.fillRect(100, 500, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(200, 300, 100, 100);


//********
// Drawing
//********

//******
// Lines

// c.beginPath();
// c.moveTo(50,300);
// c.strokeStyle = "green"
// c.lineTo(300, 200);
// c.stroke();


// c.beginPath();
// c.moveTo(300,200);
// c.strokeStyle = "blue"
// c.lineTo(400, 300);
// c.stroke();

//***************
// Arcs / Circles

// arc(x: Int, y: Int, radius: Int, startAngle: Float (radians), endAngle: Float, drawCounterClockwise: Bool (false))
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2);
// c.stroke();

//***************************
// // Drawing lots of circles

// c.strokeStyle = "rgba(0,0,0,0.5)"
// for(let i = 0; i < 20; i++){
//     for(let j = 0; j < 20; j++){
//         c.beginPath();
//         c.arc(75*i, 75*j, 30, 0, Math.PI * 2);
//         c.stroke();
//     }
// }

//***************************
// // Drawing random circles
// for(let i = 0; i < 5; i++){
//     var x = Math.random() * window.innerWidth; // var x = 100 + Math.random() * (window.innerWidth - 200);
//     var y = Math.random() * window.innerHeight; // var y = 100+ Math.random() * (window.innerHeight - 200);
//     var red = Math.floor(Math.random() * 255);
//     var green = Math.floor(Math.random() * 255);
//     var blue = Math.floor(Math.random() * 255);
//     c.beginPath();
//     c.lineWidth = 5;
//     c.strokeStyle = `rgb(${red},${green},${blue})`
//     c.arc(x, y, 100, 0, Math.PI * 2);
//     c.stroke();
// }

//**********
// Animating
//**********

// c.beginPath();
// c.strokeStyle = "rgba(0,0,255,0.75)"
// c.arc(300, 300, 30, 0, Math.PI * 2);
// c.stroke();

// function animate(){
//     requestAnimationFrame(animate);
//     console.log("hi");
// }
// animate();

// var x = 300;

// function animate(){
//     c.clearRect(0,0,window.innerWidth, window.innerHeight)
//     c.beginPath();
//     c.strokeStyle = "rgba(0,0,255,0.75)"
//     c.arc(x, 300, 30, 0, Math.PI * 2);
//     c.stroke();
//     x = x+1;
//     requestAnimationFrame(animate);
//     console.log("hi");
// }
// animate();

//****************
// Make it bounce!

// var x = 300;
// var velocity = 5;

// function animate(){
//     c.clearRect(0,0,window.innerWidth, window.innerHeight)
//     c.beginPath();
//     c.strokeStyle = "rgba(0,0,255,0.75)"
//     c.arc(x, 300, 30, 0, Math.PI * 2);
//     c.stroke();
//     if(x + 30 >= window.innerWidth){
//         velocity = -5;
//     }
//     if(x <= 30){
//         velocity = 5;
//     }
//     x = x+velocity;
//     requestAnimationFrame(animate);
//     console.log("hi");
// }
// animate();

// x and y movement

// var x = 300;
// var dx = 5;
// var y = 300;
// var dy = 5;

// function animate(){
//     c.clearRect(0,0,window.innerWidth, window.innerHeight)
//     c.beginPath();
//     c.strokeStyle = "rgba(0,0,255,0.75)"
//     c.arc(x, y, 30, 0, Math.PI * 2);
//     c.stroke();
//     if(x + 30 >= window.innerWidth){
//         dx = -5;
//     }else if(x <= 30){
//         dx = 5;
//     }
//     x = x+dx;

//     if(y + 30 >= window.innerHeight){
//         dy = -5;
//     }else if(y <= 30){
//         dy = 5;
//     }
//     y = y+dy;
//     requestAnimationFrame(animate);
// }
// animate();

//****************
// Random movement

// var x = 30 + Math.random() * (window.innerWidth - 60);
// var dx = 10 * (Math.random() - 0.5);
// var y = 30 + Math.random() * (window.innerWidth - 60);
// var dy = 10 * (Math.random() - 0.5);

// function animate(){
//     c.clearRect(0,0,window.innerWidth, window.innerHeight)
//     c.beginPath();
//     c.strokeStyle = "rgba(0,0,255,0.75)"
//     c.arc(x, y, 30, 0, Math.PI * 2);
//     c.stroke();
//     if(x + 30 >= window.innerWidth){
//         dx = -dx;
//     }else if(x <= 30){
//         dx = -dx;
//     }
//     x = x+dx;

//     if(y + 30 >= window.innerHeight){
//         dy = -dy;
//     }else if(y <= 30){
//         dy = -dy;
//     }
//     y = y+dy;
//     requestAnimationFrame(animate);
// }
// animate();

//************************
// OOP/reusable components

// function Circle(x,y,r,dx,dy, color){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.r = r;
//     this.color = color;
//     this.draw = function(){
//         c.beginPath();
//         c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//         c.fill();
//         c.fillStyle = this.color;

//     }
//     this.update = function(){
//         if(this.x + this.r >= window.innerWidth || this.x <= this.r){
//             this.dx = -this.dx;
//         }
//         this.x = this.x+this.dx;

//         if(this.y + r >= window.innerHeight || this.y <= this.r){
//             this.dy = -this.dy;
//         }
//         this.y = this.y+this.dy;
//     }
// }

// var circles = [];
// for(let i = 0; i<=50; i++){
//     let r = Math.floor(5+Math.random()*40)
//     let x = r + Math.random() * (window.innerWidth - 2*r);
//     let dx = 10 * (Math.random() - 0.5);
//     let y = r + Math.random() * (window.innerWidth - 2*r);
//     let dy = 10 * (Math.random() - 0.5);
//     circles.push(new Circle(x, y, r, dx, dy, ["black", "gray", "red", "yellow"][Math.floor(Math.random()*4)]));
// }

// function animate(){
//     c.clearRect(0,0,window.innerWidth, window.innerHeight);
//     for(let circle of circles){
//         circle.update();
//         circle.draw();
//     }
//     requestAnimationFrame(animate);
// }
// console.log("hello");
// animate();

//************
// Interaction
//************

//Making this interactive using normal event listener stuff => update

var mouse = {
    x: null,
    y: null,
}

function Circle(x,y,r,dx,dy, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.minR = r;
    this.color = color;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();

    }
    this.update = function(){
        if(this.x + this.r >= window.innerWidth || this.x <= this.r){
            // this.dx = -this.dx;
            if(this.x <= this.r){
                this.x = this.r+1;
                this.dx = Math.abs(this.dx)
            }
            if(this.x + this.r >= window.innerWidth){
                this.x = window.innerWidth - this.r - 1;
                this.dx = - Math.abs(this.dx)
            }
        }
        this.x = this.x+this.dx;

        if(this.y + r >= window.innerHeight || this.y <= this.r){
            // this.dy = -this.dy;
            if(this.y <= this.r){
                this.y = this.r+1;
                this.dy = Math.abs(this.dy)
            }
            if(this.y + this.r >= window.innerHeight){
                this.y = window.innerHeight - this.r - 1;
                this.dy = - Math.abs(this.dy)
            }
        }
        this.y = this.y+this.dy;
        
        let distance = Math.sqrt((this.x - mouse.x)**2 + (this.y - mouse.y)**2);
        if(distance < 50 ){
            if(this.r < 50){
                this.r += 5;
            }
        }
        else{
            if(this.r > this.minR){
                this.r -= 1;
            }
        } 
    }
}

var colors = ["black", "gray", "red", "yellow"]
var circles = [];
for(let i = 0; i<100; i++){
    let r = Math.floor(5+Math.random()*10)
    let x = r + Math.random() * (window.innerWidth - 2*r);
    let dx = 10 * (Math.random() - 0.5);
    let y = r + Math.random() * (window.innerWidth - 2*r);
    let dy = 10 * (Math.random() - 0.5);
    var color = colors[Math.floor(Math.random()*4)];
    circles.push(new Circle(x, y, r, dx, dy, color));
}

function animate(){
    c.clearRect(0,0,window.innerWidth, window.innerHeight);
    for(let circle of circles){
        circle.update();
        circle.draw();
    }
    requestAnimationFrame(animate);
}
console.log("hello");
animate();


window.addEventListener('mousemove', function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener('click', function(event){
    let r = Math.floor(5+Math.random()*10)
    let x = event.clientX;
    let dx = 10 * (Math.random() - 0.5);
    let y = event.clientY;
    let dy = 10 * (Math.random() - 0.5);
    var color = colors[Math.floor(Math.random()*4)];
    circles.push(new Circle(x, y, r, dx, dy, color));
    console.log(circles[0]);
})

window.addEventListener('resize', function(event){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})