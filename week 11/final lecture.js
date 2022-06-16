////**********************************************************************************************
////*********************************************************************************************
//// Lecture  10: HTML5 Canvas: drawing, animating, and interaction
////**********************************************************************************************
////**********************************************************************************************

//************************
// initializing the canvas

var canvas = document.getElementsByTagName("canvas").item(0)
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
console.log(c);

var numPetals = 20;
var petalArray = [];
var speed = 1;

const petalImage = new Image()
petalImage.src = './petal.png'

function randAngle(){
    return Math.random() * Math.PI * 2
}

function modPi(angle){
    return angle - (Math.floor(angle/Math.PI)*Math.PI)
}

petalImage.addEventListener('load',()=>{
    var i = 0;
    while(i < numPetals){
        i++;
        var distance = 1 + (Math.random() * 1.5);
        var size = 100 * (1/distance**2);
        var x = size/2 + (window.innerWidth - size)*Math.random() * distance;
        var y = size * 2;
        var dx = 10 * (Math.random() - 0.5);
        var dy = 5 * (Math.random());
        petalArray.push(new Petal(x,y, size, 0, dx, dy, distance));
    }
    animate();
    // c.drawImage(petalImage, 500, 500, 60, 50);
})

function animate(){
    c.clearRect(0,0, window.innerWidth, window.innerHeight);
    for(petal of petalArray){
        petal.update();
        petal.draw();
        // petal.angle += 0.05;
    }
    requestAnimationFrame(animate);
}

function Petal(x,y,size,angle,dx,dy,distance){
    this.x = x;
    this.y = y;
    this.size = size
    this.angle = angle;
    this.dx = dx;
    this.dy = dy;
    this.distance = distance;

    this.draw = function(){
        c.save();
        c.translate(this.x/(distance*1.3), this.y/distance);
        c.rotate(this.angle);
        c.drawImage(petalImage, -1* this.size / 2,  -1* this.size / 2, this.size, this.size);
        c.restore();
    }
    

    this.update = function(){
        if(this.dx === 0 && this.dy === 0){
            return;
        }
        if(this.x/this.distance > window.innerWidth * 3 || this.x/this.distance < window.innerWidth * -2){
            this.x = this.size/2 + (window.innerWidth - this.size)*Math.random();
            this.y = -1 * this.size ;
            this.dx = 10 * (Math.random() - 0.5);
            this.dy = 5 * (Math.random());
        }
        this.x = this.x + (this.dx*speed);
    
        

        if(this.y/distance + size > window.innerHeight){
            this.dy = 0;
            this.dx = 0;
        }
        this.y = this.y + (this.dy*speed) + 0.15;

        var dir = this.dx/Math.abs(this.dx);
        this.dx += dir * 0.04 * this.dy;

        var isNeg = this.dy < 0;
        this.dy -= (0.015 * Math.abs(this.dx)) - 0.15;
        var isNoLongerNeg = this.dy >= 0;
        if(isNeg && isNoLongerNeg){
            if(Math.random() < 0.75){
                this.dx = - this.dx / 2;
            }
        }
        // if(Math.abs(this.dx) < 1){
        //     // console.log("trigger", this.dx)
        //     if(dir < 0 ){
        //         // console.log("trigger",this.dx, (Math.abs(this.dx)+0.5));
        //         this.dx = (Math.abs(this.dx)+0.5);
        //     }else{
        //         // console.log("trigger",this.dx, -this.dx - 0.5);
        //         this.dx = -this.dx - 0.5;
        //     }
        // }
        this.angle = Math.atan(this.dy/(this.dx))
        
        // console.log(this.dx, this.dy)
    }
}



//********
// Drawing
//********

//Rectangles
// c.fillStyle = "rgba(255,0,255,1)";
// c.fillRect(100,100,100,150);

// c.fillStyle = "rgba(255,0,255,1)";
// c.fillRect(300,10,50,50);

// c.fillStyle = "rgba(255,255,0,0.5)";
// c.fillRect(200,300,150,15);

// c.strokeStyle = "blue";

// //lines
// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(200,300);
// c.stroke();

// c.lineTo(200,400);
// c.strokeStyle="green";
// c.stroke();
// c.lineWidth = 10;

// // Arcs & Circles
// c.beginPath();
// c.arc(450,450, 50, Math.PI*0.25, Math.PI*1.25 );
// c.fillStyle = 'yellow';
// // c.stroke();
// c.fill();
// c.beginPath();
// c.arc(450,450, 50, Math.PI*0.75, Math.PI*1.75 );
// c.fillStyle = 'gray';
// c.stroke();
// for(let i = 0; i < 20; i++){
//     for(let j = 0; j <20; j++){
//         c.beginPath();
//         c.arc(100*i+50,100*j+50, 50, 0, Math.PI*2.75 );
//         c.fill();
//     }
// }


//**********
// Animating
//**********

// var x = 300;
// var dx = 5;
// var y = 300;
// var dy = 5

// function animate(){
//     console.log("animate");
//     c.clearRect(0,0, window.innerWidth, window.innerHeight);

//     c.beginPath();
//     c.fillStyle = 'yellow';
//     if(dx > 0){
//         c.arc(x,y, 50, Math.PI*0.25, Math.PI*1.25 );
//         c.fill();
//         c.beginPath();
//         c.arc(x,y, 50, Math.PI*0.75, Math.PI*1.75 );
//         c.fill();
//     }else{
//         c.arc(x,y, 50, Math.PI*0.25, Math.PI*1.25, true );
//         c.fill();
//         c.beginPath();
//         c.arc(x,y, 50, Math.PI*0.75, Math.PI*1.7, true );
//         c.fill();
//     }
//     if(x+50 > window.innerWidth || x <= 50){
//         dx = -dx;
//     }
//     x = x + dx;

//     if(y+50 > window.innerHeight || y <= 50){
//         dy = -dy;
//     }
//     y = y + dy;

//     requestAnimationFrame(animate);
// }
// animate();

// function Circle(x,y,r,dx,dy,color){
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = color;

//     this.draw = function(){
//         c.beginPath();
//         c.arc(this.x,this.y, r, 0, Math.PI*2 );
//         c.fillStyle = this.color
//         c.fill();
//     }

//     this.update = function(){
//         if(this.x+this.r > window.innerWidth || this.x <= this.r){
//             this.dx = -this.dx;
//         }
//         this.x = this.x + this.dx;
    
//         if(this.y+this.r > window.innerHeight || this.y <= this.r){
//             this.dy = -this.dy;
//         }
//         this.y = this.y + this.dy;
//     }
// }

// // circle = new Circle(100,100,50,0,0,"red");
// // circle.draw();
// var colors = ["black", "gray", "red", "yellow"]
// var circles = []
// for(let i = 0; i < 3; i++){
//     var r = 10 + 40*Math.random();
//     var x = r+5 + (window.innerWidth-2*r - 10)*Math.random();
//     var y = r+5 + (window.innerHeight-2*r - 10)*Math.random();
//     let dx = 10 * (Math.random() - 0.5);
//     let dy = 10 * (Math.random() - 0.5);
//     var color = colors[Math.floor(Math.random()*4)];
    
//     circles.push(new Circle(x,y,r,dx,dy,color));
// }


// function animate(){
//     console.log("animate");
//     c.clearRect(0,0, window.innerWidth, window.innerHeight);

//     for(let circle of circles){
//         circle.update();
//         circle.draw();
//     }
//     requestAnimationFrame(animate);
// }
// animate();


//************
// Interaction
//************

// window.addEventListener("click",function(event){
//     let mx = event.clientX;
//     let my = event.clientY;
//     console.log(event)
//     for(let i in circles){
//         let circle = circles[i];
//         let distance =  Math.sqrt((mx - circle.x)**2 +(my - circle.y)**2);
//         console.log(distance);
//         if(distance <= circle.r){
//             circles.splice(i,1);
//         }
//     }
//     var r = 10 + 40*Math.random();
//     var x = event.clientX;
//     var y = event.clientY;
//     let dx = 10 * (Math.random() - 0.5);
//     let dy = 10 * (Math.random() - 0.5);
//     var color = colors[Math.floor(Math.random()*4)];
    
//     circles.push(new Circle(x,y,r,dx,dy,color));
// })

// window.add