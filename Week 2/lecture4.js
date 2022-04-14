////****************************************************
////****************************************************
//// Lecture  4: More Event Listeners and HTML injection
////****************************************************
////****************************************************

//This window on load listener which we have been treating
//as our main function is an event listener like any other
//and we can take a look at its event argument.

window.addEventListener('load', (event) => {
    // console.log(event);

    // //******************************
    // //mouseover, mouseout, and click

    // function onHoverOn(event){
    //     event.target.style.color="blue";
    // };  
    // function onHoverOff(event){
    //     event.target.style.color= "";
    // }; 
    // document.addEventListener("mouseover", onHoverOn);
    // document.addEventListener("mouseout", onHoverOff);


    // function onClickGreen(event){
    //     event.target.style.color="green"
    // };
    
    // elements = document.getElementsByTagName("h2");
    // for(var i = 0; i < elements.length; i++){
    //     elements[i].addEventListener("click", onClickGreen);
    // }


    // //******************
    // //keydown v.s. keyup

    // document.addEventListener('keydown', logKey);
    // document.addEventListener('keyup', logKey);

    // function logKey(e) {
    //   console.log(e.type, e.code);
    // }


    // //*******************************************
    // //customizable global event listener function
    // //

    // function addGlobalEventListener(type, selector, func){
    //     document.addEventListener(type, (event) => {
    //         if (event.target.matches(selector)){
    //             func(event)
    //         }
    //     })
    // }

    // addGlobalEventListener("click", ".hero-image", (e)=>{ console.log("hi")})

    // //************************************************************************
    // //A brief interlude on callbacks, anonymous functions, and arrow functions

    // function callFunctionOnZero(func){
    //     return func(0)
    // }

    // callFunctionOnZero(console.log);
    // callFunctionOnZero(function(arg){console.log(arg+1)});
    // callFunctionOnZero((arg)=>{console.log(arg+2)});
    // callFunctionOnZero(arg => console.log(arg+3));

    // //returns / console.logs
    // console.log(callFunctionOnZero(arg=>{console.log(arg+4)}))
    // console.log(callFunctionOnZero(arg=>arg+5))

    // // **************
    // // HTML Injection

    // main = document.getElementById('main');
    // newDiv = document.createElement('div');
    // newDiv.innerText = 'Hello'; //these all conflict, which ever happens last wins
    // // newDiv.innerText = '<p>hi</p>'; //this will be text not HTML so you will se <p> on the page
    // main.append(newDiv);
    // main.append("some text");
    // main.append(newDiv); // it moves it, the specific div object can only be in one place.
    
    // newDiv.innerHTML = '<a href="#hello">I have a link now</a>'; //these also continue to effect the dom element after it's on the page
    // console.log(main.children);
    // main.insertBefore(newDiv, document.getElementById('about'));


    // // ************
    // // HTML Removal

    // // main.remove()

    // function removeTarget(event){
    //     event.target.remove()
    // }
    // document.addEventListener("click",removeTarget);


    // // **********************************
    // // Let's build a ToDo App on our page

    // //*************************************
    // // InsertAdjacentHTML (if we have time)

    // main.insertAdjacentHTML('beforebegin', '<div id="beforebegin">beforebegin</div>');
    // main.insertAdjacentHTML('afterbegin', '<div id="afterbegin">afterbegin</div>');
    // main.insertAdjacentHTML('beforeend', '<div id="beforeend">beforeend</div>');
    // main.insertAdjacentHTML('afterend', '<div id="afterend">afterend</div>');
});


// Stop Recording