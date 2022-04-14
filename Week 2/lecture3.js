////******************************************************************************************************
////******************************************************************************************************
//// Lecture  3: DOM Manipulation Basics, Getting Elements, Setting Attributes, and Adding Event Listeners
////******************************************************************************************************
////******************************************************************************************************

// These are the basic building blocks for all Web Applications

// What is the DOM (Document Object Model)?
// A representation of the HTML document as a queryable tree of objects
// And the browser actually isn't displaying the raw HTML it's displaying the DOM
// So when we change the DOM we change what the user sees.

//**********
// Selectors
//**********

window.addEventListener('load', (event) => { //For now we'll ignore this line and think of it as a main function

    // console.log(document.getElementsByTagName("div"));
    // console.log(document.getElementsByTagName("div").item(0));
    // console.log(document.getElementsByTagName("div").item(0).getElementsByTagName("h2"));
    // console.log(document.getElementById("RTC-Image"));
    // console.log(document.getElementById("RTC-Image").getElementsByTagName("div"));
    // console.log(document.getElementsByClassName("card-project"));

    // console.log(document.querySelectorAll("div"));
    // console.log(document.querySelectorAll("ul#navigation"));
    // console.log(document.querySelectorAll("ul#navigation li:not(.float-right)"));
    // console.log(document.querySelectorAll("ul#navigation li:not(.float-right) a").item(0));


//********************************
// Attributes and the style object
//********************************

    //**********
    //Attributes
    //**********

    // document.getElementsByTagName("div").item(2).setAttribute("id", "hi"); // doesn't work

    // document.getElementsByTagName("div").item(1).setAttribute("class", "hello");
    // document.getElementsByTagName("div").item(1).classList.add("hello");
    
    // document.getElementsByTagName("h2").item(0).setAttribute("style", "color: blue");
    // document.getElementsByTagName("h2").item(0).setAttribute("style", "background-color: green");
    
    // document.getElementsByTagName("h2").style.color = "blue"; // doesn't work
    // console.log(document.getElementsByTagName("h2"), document.getElementsByTagName("h2").item(0).style)
    // document.getElementsByTagName("h2").item(0).style.color = "blue";

    // var h2s = document.getElementsByTagName("h2");
    // for(var i = 0; i < h2s.length; i++){
    //     h2s[i].style.color = "blue";
    // }

    // [...document.getElementsByTagName("h2")].forEach(element => {element.style.color = "blue"}); //three advanced concepts

    // [...document.getElementsByTagName("div")].forEach(element => element.setAttribute("class","")); 
    //     ////trashes all class based css on divs


//*************************************
// Event Listeners (mouse and keyboard)
//*************************************


//     console.log(event);
//     element = document.getElementById("RTC-Image");
    function myFunction(event){
        console.log(event);
        const style = getComputedStyle(event.target);
        console.log(style.color)
        event.target.setAttribute("previous", style.color);
        event.target.style.color="blue";
        // console.log("hello", event.path[0])
    }; 
//     function mySecondFunction(event){
//         console.log("sup", event)
//     }; 
    function myThirdFunction(event){
        const oldColor = event.target.getAttribute("previous")
        console.log("yoooooo!", event)
        event.target.style.color= "";
    }; 
    // function myFourthFunction(event){
    //     console.log("clicked", event.path[0])
    //     // event.path[0].setAttribute("hidden", "true")
    // };
    document.addEventListener("mouseover", myFunction);
    // element.addEventListener("click", mySecondFunction);
    document.addEventListener("mouseout", myThirdFunction);
    // document.addEventListener("click",myFourthFunction)
    // element.removeEventListener("mouseout", myThirdFunction);
    // document.addEventListener('keydown', logKey);

    // function logKey(taco) {
    //   console.log(taco);
    // }
    // function addGlobalEventListener(type, selector, callback){
    //     document.addEventListener(type, e => {
    //         if (e.target.matches(selector)){
    //             callback(e)
    //         }
    //     })
    // }

    // addGlobalEventListener("click", "div.button", e =>{ console.log("hi")})

});