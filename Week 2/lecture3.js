// window.addEventListener('load', (event) => {
//     console.log(document.getElementsByTagName("div"));
//     console.log(document.getElementsByTagName("div")[0]);
//     console.log(document.getElementsByTagName("div").item(0).getElementsByTagName("h2"));
//     console.log(document.getElementById("RTC-Image"));
//     console.log(document.getElementById("RTC-Image").getElementsByTagName("div"));
//     console.log(document.getElementsByClassName("card-project"))
//     console.log(document.querySelectorAll("div"));
// });

// window.addEventListener('load', (event) => {
    // document.getElementsByTagName("div").setAttribute("id", "hi"); // doesn't work
    // document.getElementsByTagName("div").item(0).setAttribute("class", "hello");
    // document.getElementsByTagName("h2").style.color = "blue"; // doesn't work
    // console.log(document.getElementsByTagName("h2"), document.getElementsByTagName("h2").item(0).style)
    // document.getElementsByTagName("h2").item(0).style.color = "blue";
    // [...document.getElementsByTagName("h2")].forEach(element => {
    //     element.style.color = "green"; 
    //     element.style.color = "blue"
    // }); //three advanced concepts
    // [...document.getElementsByTagName("div")].forEach(element => element.setAttribute("class","")); //trashes all class based css on divs
// });


window.addEventListener('load', (event) => {
    console.log(event);
    element = document.getElementById("RTC-Image");
    function myFunction(event){
        const style = getComputedStyle(event.path[0]);
        event.path[0].setAttribute("previous", style.color);
        event.path[0].style.color="blue"
        console.log("hello", event.path[0])
    }; 
    function mySecondFunction(event){
        console.log("sup", event)
    }; 
    function myThirdFunction(event){
        const oldColor = event.path[0].getAttribute("previous")
        console.log("yoooooo!", event)
        event.path[0].style.color= oldColor;
    }; 
    // function myFourthFunction(event){
    //     console.log("clicked", event.path[0])
    //     // event.path[0].setAttribute("hidden", "true")
    // };
    document.addEventListener("mouseover", myFunction);
    element.addEventListener("click", mySecondFunction);
    document.addEventListener("mouseout", myThirdFunction);
    // document.addEventListener("click",myFourthFunction)
    // element.removeEventListener("mouseout", myThirdFunction);
    // document.addEventListener('keydown', logKey);

    // function logKey(e) {
    //   console.log(e.code);
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