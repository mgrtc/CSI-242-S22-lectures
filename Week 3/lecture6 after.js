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

    // var timeoutID = setTimeout(console.log,3000, "hi", "yo", 4+4);
    // console.log("timeoutID:",timeoutID);
    // function repeatEvery(func, timeout, input){
    //     func(input);
    //     return setTimeout(repeatEvery, timeout, func, timeout, input);
    //   //setTimeout(callback,    time,    inputs...);
    //   // Waits timeout milliseconds
    //   // then calls repeatEvery(func, timeout, input);
    // }
    // timeoutID = repeatEvery(console.log, 1000, "repeating");
    // console.log("timeoutID:", timeoutID);
    

    // //************
    // //clearTimeout
    // //************
    // //clearTimeout(TimeoutID) => returns undefined
    // //cancels the Timeout who's TimeoutID had been passed in.
    // clearTimeout(timeoutID);
    
    // //Any ideas for how we could stop the repeatEvery? (Challenging)

    // //***********
    // //setInterval
    // //***********
    // //setInterval(callback, time, inputs...) => returns an IntervalID
    // var intervalID = setInterval(console.log, 1000, "Interval");
    // setTimeout(clearInterval, 2500, intervalID);

    // //********************************
    // //using setInterval for animations
    //initialize Display
    // body = document.getElementsByTagName("body").item(0);
    // body.insertAdjacentHTML('beforeend', '<div id="me"></div>');
    // var me = document.getElementById("me");
    // //Initialize State
    // var left = 20;
    // var blue = 0;
    // var green = 0;
    // var red = 0;
    // setInterval(function(){
    //     //update state & display
    //     me.style.left = `${left += 2}`;
    //     me.style.backgroundColor = `rgb(${red+=1},${green+=2},${blue+=3})`
    // }, 10);

    // //*******************
    // //Controlled Movement
    // //*******************

    //Initialize State & Display
    //Listen for Inputs 
    //Have Inputs -> change the State
    //When the State is changed -> update display

    // //Initialize State
    var storedNum = 0;
    var currentNum = "";
    var operator = null;
    


    // //Initialize State
    var left = 300;
    var bottom = 20;
    var upInterval = null;
    var downInterval = null;
    var leftInterval = null;
    var rightInterval = null;

    // //Initialize Display
    body = document.getElementsByTagName("body").item(0);
    body.insertAdjacentHTML('beforeend', '<input id="me"></input>');
    var me = document.getElementById("me");
    me.style.left = left;
    me.style.bottom = bottom;

    // //Listen for Inputs
    me.addEventListener("keydown",function(event){
        if(event.key === "ArrowLeft"){
            handleLeftDown();
        }else if(event.key === "ArrowRight"){
            handleRightDown();
        }else if(event.key === "ArrowUp"){
            event.preventDefault();
            handleUpDown();
        }else if(event.key === "ArrowDown"){
            event.preventDefault();
            handleDownDown();
        }else if(event.key === "a"){
            event.preventDefault();
            handleLeftDown();
        }else if(event.key === "d"){
            event.preventDefault();
            handleRightDown();
        }else if(event.key === "w"){
            event.preventDefault();
            handleUpDown();
        }else if(event.key === "s"){
            event.preventDefault();
            handleDownDown();
        }
    })

    me.addEventListener("keyup",function(event){
        if(event.key === "ArrowLeft"){
            handleLeftUp();
        }else if(event.key === "ArrowRight"){
            handleRightUp();
        }else if(event.key === "ArrowUp"){
            handleUpUp();
        }else if(event.key === "ArrowDown"){
            handleDownUp();
        }else if(event.key === "a"){
            handleLeftUp();
        }else if(event.key === "d"){
            handleRightUp();
        }else if(event.key === "w"){
            handleUpUp();
        }else if(event.key === "s"){
            handleDownUp();
        }
    })

    // //Have Inputs -> change the State
    function handleLeftDown(){
        if(leftInterval === null){
            leftInterval = setInterval(function(){
                left -= 2;
                render();
            },10);
        }
    }


    function handleRightDown(){
        if(rightInterval === null){
            rightInterval = setInterval(function(){
                left += 2;
                render();
            },10);
        }
    }


    function handleUpDown(){
        console.log("up", upInterval)
        if(upInterval === null){
            upInterval = setInterval(function(){
                bottom += 2;
                render();
            },10);
        }
    }

    function handleDownDown(){
        console.log("down")
        if(downInterval === null){
            downInterval = setInterval(function(){
                bottom -= 2;
                render();
            },10);
        }
    }

    function handleLeftUp(){
        clearInterval(leftInterval);
        leftInterval = null;
    }

    function handleRightUp(){
        clearInterval(rightInterval);
        rightInterval = null;
    }

    function handleUpUp(){
        clearInterval(upInterval);
        upInterval = null;
    }

    function handleDownUp(){
        clearInterval(downInterval);
        downInterval = null;
    }

    // //When the State is changed -> update display
    function render(){
        me.style.left = `${left}`;
        me.style.bottom = `${bottom}`;
    }
});