////*************************************************************
////*************************************************************
//// Lecture 6: setTimeout, setInterval, Animations, and Movement
////*************************************************************
////*************************************************************

window.addEventListener("load", function(event){

    //**********
    //setTimeout
    //**********
    //setTimeout(callback, time, inputs...) => returns a TimeoutID
    //calls the callback on the inputs after time milliseconds

    // var timeoutID = setTimeout(console.log,1000, "hi", "yo", 4+4);
    // console.log("a:",timeoutID);
    // function repeatEvery(func, timeout, input){
    //     func(input);
    //     setTimeout(repeatEvery, timeout, func, timeout, input);
    // }
    // repeatEvery(console.log, 1000, "repeating");
    

    // //************
    // //clearTimeout
    // //************
    // //setTimeout(TimeoutID) => returns undefined
    // //cancels the Timeout who's TimeoutID had been passed in.
    // clearTimeout(timeoutID);
    
    // //Any ideas for how we could stop the repeatEvery? (Challenging)

    // //***********
    // //setInterval
    // //***********
    // //setInterval(callback, time, inputs...) => returns an IntervalID
    // var intervalID = this.setInterval(console.log, 1000, "Interval");
    // this.clearInterval(intervalID);

    // //********************************
    // //using setInterval for animations
    // body = document.getElementsByTagName("body").item(0);
    // body.insertAdjacentHTML('beforeend', '<div id="me"></div>');
    // var me = document.getElementById("me");
    // var left = 20;
    // setInterval(function(){
    //     me.style.left = `${left += 1}`;
    // }, 10);

    // //*******************
    // //Controlled Movement
    // //*******************

    //Initialize State & Display
    //Listen for Inputs 
    //Have Inputs -> change the State
    //When the State is changed -> update display

    // //Initialize State
    // var left = 20;
    // var leftInterval = null;
    // var rightInterval = null;

    // //Initialize Display
    // body = document.getElementsByTagName("body").item(0);
    // body.insertAdjacentHTML('beforeend', '<div id="me"></div>');
    // var me = document.getElementById("me");

    // //Listen for Inputs
    // window.addEventListener("keydown",function(event){
    //     if(event.key === "ArrowLeft"){
    //         handleLeftDown();
    //     }else if(event.key === "ArrowRight"){
    //         handleRightDown();
    //     }
    // })

    // window.addEventListener("keyup",function(event){
    //     if(event.key === "ArrowLeft"){
    //         handleLeftUp();
    //     }else if(event.key === "ArrowRight"){
    //         handleRightUp();
    //     }
    // })

    // //Have Inputs -> change the State
    // function handleLeftDown(){
    //     console.log("leftDown", leftInterval);
    //     if(leftInterval === null){
    //         leftInterval = setInterval(function(){
    //             left -= 2;
    //             render();
    //         },10);
    //     }
    // }

    // function handleRightDown(){
    //     if(rightInterval === null){
    //         rightInterval = setInterval(function(){
    //             left += 2;
    //             render();
    //         },10);
    //     }
    // }

    // function handleLeftUp(){
    //     clearInterval(leftInterval);
    //     leftInterval = null;
    // }

    // function handleRightUp(){
    //     clearInterval(rightInterval);
    //     rightInterval = null;
    // }

    // //When the State is changed -> update display
    // function render(){
    //     me.style.left = `${left}`;
    // }
});