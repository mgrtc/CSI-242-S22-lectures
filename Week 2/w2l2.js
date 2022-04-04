


////// Start Recording




// window.addEventListener('load', (event) => {
//     console.log(event);
//     element = document.getElementById("RTC-Image");
//     function myFunction(event){
//         // const style = getComputedStyle(event.target);
//         // event.target.setAttribute("previous", style.color);
//         event.target.style.color="blue"
//         // console.log("hello", event.target)
//     }; 
//     function mySecondFunction(event){
//         // console.log("sup", event)
//     }; 
//     function myThirdFunction(event){
//         const oldColor = event.target.getAttribute("previous")
//         // console.log("yoooooo!", event)
//         event.target.style.color= "";
//     }; 
//     document.addEventListener("mouseover", myFunction);
//     // element.addEventListener("click", mySecondFunction);
//     document.addEventListener("mouseout", myThirdFunction);

//     // function myFourthFunction(event){
//     //     console.log("clicked", event.target)
//     //     event.target.setAttribute("hidden", "true")
//     // };
//     // document.addEventListener("click",myFourthFunction)
//     // element.removeEventListener("mouseout", myThirdFunction);


//     document.addEventListener('keydown', logKey);
//     document.addEventListener('keyup', logKey);

//     function logKey(e) {
//       console.log(e.type, e.code);
//     }

//     function addGlobalEventListener(type, selector, func){
//         document.addEventListener(type, e => {
//             if (e.target.matches(selector)){
//                 func(e)
//             }
//         })
//     }

//     addGlobalEventListener("click", ".hero-image", (e)=>{ console.log("hi")})
// });

window.addEventListener('load', (event) => {
    main = document.getElementById('main');
    newDiv = document.createElement('div');
    // newDiv.innerText = 'Hello'; //these all conflict, which ever happens last wins
    // newDiv.innerText = '<p>hi<p>';
    // // main.appendChild(newDiv)
    // // main.append(newDiv)
    
    // newDiv.innerHTML = '<a href="#hello">Hello</a>'; //these also continue to effect the dom element after it's on the page
    // console.log(main.children);
    main.insertBefore(newDiv, document.getElementById('about'));

    newDiv.innerHTML = `
        <div class="section section-white" id="ToDo">
            <h2 class="section-title">ToDo app</h2>
            <button id ="addTD">Add ToDo</button>
            <input id="toDoName"></input>
        <div class="section section-white" id="ToDo">
    `;

    button = document.getElementById("addTD");
    count = 0

    
    button.addEventListener('click', (event)=>{
        console.log("td clicked", event)
        // console.log(document.getElementById('toDoName').value)
        val = document.getElementById('toDoName').value;
        todo = document.createElement("span");

        todo.id = `todo-${count}`; 
        console.log(todo.id);
        todo.innerHTML = `${val} <button class='todob' count=${count}>Done</button><br>`;
        count += 1;    
        
        newDiv.append(todo);
        // button = document.querySelector(`button[count='${count}']`);
        // console.log(button.addEventListener);

        // button.addEventListener('click', removeToDo);
    });

    function addGlobalEventListener(type, selector, func){
        document.addEventListener(type, e => {
            if (e.target.matches(selector)){
                func(e)
            }
        })
    }
    addGlobalEventListener("click", "button.todob", removeToDo);

    function removeToDo(event){
        console.log("rtd",event);
        console.log(event.target.getAttribute("count"))
        todoCount = event.target.getAttribute("count")
        todo = document.getElementById( `todo-${todoCount}`)
        todo.remove()
//         event.target.parentNode.remove()
    }


    // main.insertAdjacentHTML('beforebegin', '<div id="beforebegin">beforebegin</div>');
    // main.insertAdjacentHTML('afterbegin', '<li id="afterbegin">afterbegin</li>');
    // main.insertAdjacentHTML('beforeend', '<li id="beforeend">beforeend</li>');
    // main.insertAdjacentHTML('afterend', '<div id="afterend">afterend</div>');
    
    // document.querySelector("a[href='#interests']").parentElement.insertAdjacentHTML('afterend', '<li id="afterend2">afterend2</li>');
});


// Stop Recording