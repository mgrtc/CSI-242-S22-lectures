

    newDiv.innerHTML = `
    <div id="ToDo">
        <h2 >ToDo app</h2>
        <button id ="addTD">Add ToDo</button>
        <input id="toDoName"></input>
    <div id="ToDo">
`; // this is a tic mark string, official known as Template literals or template strings
    //They have two main powers 1) they can stretch over multiple lines and 2) you can imbed JS inside them
    // var x = `2+2=${2+2}`
    // console.log(x);

    var button = document.getElementById("addTD");
    var count = 0;

    
    button.addEventListener('click', (event)=>{
        console.log("td clicked", event)
        console.log(document.getElementById('toDoName').value)
        var val = document.getElementById('toDoName').value;
        var todo = document.createElement("span");

        todo.id = `todo-${count}`; 
        console.log(todo.id);
        todo.innerHTML = `${val} <button class='todob' count=${count}>Done</button><br>`;
        count += 1;    
        
        newDiv.append(todo);
    });

    function addGlobalEventListener(type, selector, func){
        document.addEventListener(type, event => {
            if (event.target.matches(selector)){
                func(event);
            }
        })
    }
    addGlobalEventListener("click", "button.todob", removeToDo);

    function removeToDo(event){
        console.log("rtd",event);
        console.log(event.target.getAttribute("count"));
        todoCount = event.target.getAttribute("count");
        todo = document.getElementById( `todo-${todoCount}`);
        todo.remove();
    }
