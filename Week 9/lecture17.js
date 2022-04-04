////**************************************
////**************************************
//// Lecture 17: Events and State in React
////**************************************
////**************************************



////**************************************
//// Events
////**************************************

// A fair amount of this section of the class is basically
// calling out the weird differences between Vanilla JS and React
// in that Spirit:

// React has camelCased events instead of lowercased
// If passed as a prop, you pass the js function, rather than a string

addEventListener("load",()=>{
    
    // window.start = function(){
    //     console.log("start");
    // }
    // console.log("loaded");

    // $("body").append($(
    //     /* onclick lower cased, "start()" is a string 
    //     also, why doesn't this start work (hint: scoping)*/
    //     `<button id ="hi" onclick="start()"> 
    //         Start jQuery
    //     </button>`
    // ));
           
    // // V.S.

    // function App() {
    //     return (
    //     <div>
    //         <button onClick={start} /* onClick Camel cased, start is variable */
    //         onMouseOver={(event)=>{console.log(event.target)}}
    //         > 
    //             Start React
    //         </button>
    //     </div>
    //     );
    // }
    // reminder for React, don't call the function, just pass it like a variable
    // <button onClick={start()}> no good

    ReactDOM.render(<App />,
        document.getElementById("root"));

//     //

//     //***************************************************************************
//     // Full list of Events: https://reactjs.org/docs/events.html#supported-events


// ////**************
// //// State
// ////**************

// // React Concepts introduced so far:
// // Component (i.e. a function)
// // Props (arguments to components) - const
// // Now State, data specific to a component, can change


// // What goes into States?
// // ex: a variable that decides whether to hide or show something
// // ex: Data fetched from an API
// // ex: for 2048, the current state of the board

// // For a piece of information, ask: will this ever change?
// // - if so? it should go in State

// // we initialize a state by calling useState on the initial value
// // ex: const [greeting, setGreeting] = useState("Hello my pal");
// // useState returns a variable and a setter-function
// // the two names can technically be anything, but varname and setVarname is conventional
// // this initialization will only be run on the first render

// // // Changing State on Timeout


// function App() {
//     function a(){
//         setHovered(true);
//     }
//     function b(){
//         setHovered(false);
//     }
//     console.log("app renders");
//     const [greeting, setGreeting] = React.useState("Hello my pal");
//     const [hovered, setHovered] = React.useState(false);
//     const myStyles = {
//         color: hovered ? "red" : "blue",
//     };
//     const [long, setLong] = React.useState(bigLongThing);
//     setTimeout(
//         ()=>{
//             setGreeting("Hello my friend");
//         },
//         1000
//     )
//     return (
//     <div>
//         <p onMouseEnter={a} onMouseLeave={b} style={myStyles}>
//             {greeting}
//         </p>
//         <p>
//             {long}
//         </p>
//     </div>
//     );
// }

// function bigLongThing(){
//     var a = 0
//     var ret = ""
//     while(a < 100){
//         ret += a;
//         a++;
//     }
//     return ret;
// }


// //Interesting thing here, the setGreeting both changed the state and re-rendered the component


// // Changing State with user Input


// function App() {
//     console.log("app renders");
//     const [title, setTitle] = React.useState("pal");
//     const titles = ["pal", "friend", "dude", "colleague"]
//     return (
//     <div>
//         <p>
//             Hello my {title}
//         </p>
//         {titles.map(
//             (val, i)=>{
//                 console.log(val, i);
//                 return <button 
//                     key={i} 
//                     onClick={()=>{
//                        setTitle(val); 
//                     }}
//                 > 
//                     {val} <p>Hi</p>
//                 </button>
//             }
//         )}
//     </div>
//     );
// }

function Child(props){
    return(
        <button onClick={() => {
            var newVal = props.val.map((value, index)=>{
                return index === props.i ? value +1 : value
            })
            props.setter(newVal);
        }}>
            {props.val[props.i]}
        </button>

    )
}

function App() {
    var [ val, setVal] = React.useState([0,1])
    return(
        <div>
            {val.map(
                (num, i)=>{
                    return(<Child key={i} setter={setVal} val={val} i={i} />)
                }
            )}
        </div>
    )

}

// A components props are constant and unchangable unless they depend on a parent's state, and that state changes.

// // thumbs up for State thumbs down for prop? [Checkers]
// // number of players?
// // position of a checker piece?
// // colors of squares (like on the board)?
// // score?
// // names of the players?
// // whether a piece is a king or not?


// // **********************************
// // Mutable states and reference types


//primitive types: var x = 1 ; y = "hello"
//reference types: = var x = ["hello"] ; var x = {"hello": "hi"}



function App() {
    console.log("app renders");
    var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
    return (
    <div>
        <p>
            Hello my {titles[0]}
        </p>
        {titles.map(
            (title, i)=>{
                return(
                <button key={title+""+i} onClick={()=>{
                    titles[0] = title;
                    console.log(titles);
                    // doesn't work
                    setTitles(titles.map(val => val));
                    // still doesn't work
                    // What the heck???
                    // It's because titles is a reference type and the reference hasn't changed
                    // So setTitles thinks we haven't actually changed anything

                }}>
                    {title}
                </button>)}
        )}
    </div>
    );
}


// example with primitive type

function App() {
    console.log("app renders");
    var [title, setTitle] = React.useState("pal");
    return (
    <div>
        <p>
            Hello my {title}
        </p>
        <button key={title} onClick={()=>{
            title = "friend";
            // doesn't work;
            setTitle(title);
            // now it works
        }}>
            friend
        </button>
    </div>
    );
}


// // making this work with reference types

// var a = 0;
// function App() {
//     console.log("app renders");
//     var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
//     return (
//     <div>
//         <p>
//             Hello my {titles[0]}
//         </p>
//         {titles.map(
//             (title, i)=>{
//                 return(
//                 <button key={title+":"+i} onClick={()=>{
//                     a++; //Note if you do this in React using essentially a global variable instead of a State
//                     // your team lead would be pretty justified in firing you. Don't do this.
//                     titles = [a, ...titles]; //have I introduced ...object yet?
//                     // still doesn't work
//                     // setTitles(titles);
//                     // now this works
//                 }}>
//                     {title}
//                 </button>)}
//         )}
//     </div>
//     );
// }

// END OF LECTURE

// // Plot twist updating states is async kind of

// function App() {
//     const [num, setNum] = React.useState(0);
  
    // function up1() { setNum(num + 1); }
    // function upN(n) {
    //     var a = 0;
    //     while(a < n){
    //         setNum(num + 1);
    //         a++;
    //     }
    // }
    // Doesn't work 
    // what happens here is that each seNum basically queue's up a update and rerender
    // but the second one get's queued up before the first one finishes
    // and has num as what ever it was when it got queued


    // Solution:
    // If you pass in a callback function to setNum, the callback will get placed on the queue
    // And so when the function comes off the queue all the updates will have happened
    // the callback function get's the current value of the State var
    // and so it has the most up to date one value and can update with that.
    
    // function upN(n) {
    //     var a = 0;
    //     while(a < n){
    //         setNum((n)=>{return n+1});
    //         a++;
    //     }
    // }
    
    // I'm gonna be honest, this is kinda dumb, idk it feels like a lot, and the documentation for this sucks

//     return (
//       <div>
//         <h3>Count: {num}</h3>
//         <button onClick={up1}>Up By 1</button>
//         <button onClick={()=>{upN(2)}}>Up By 2</button>
//       </div>
//     );
//   }


//   // More better mapping, rotating the state array

//     function App() {
//         console.log("app renders");
//         var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
//         return (
//         <div>
//             <p>
//                 Hello my {titles[0]}
//             </p>
//             {titles.map(
//                 (title)=>{
//                     return(
//                     <button key={title} onClick={(event)=>{
//                         var rot = titles.indexOf(event.target.innerHTML);
//                         titles = titles.map((val, i) => titles[(i + rot) % 4])
//                         setTitles(titles);
//                         console.log(titles)
//                         // now this works
//                     }}>
//                         {title}
//                     </button>)}
//             )}
//         </div>
//         );
//     }

//     // filtering

//     function App() {
//         console.log("app renders");
//         var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
//         return (
//         <div>
//             <p>
//                 Hello my {titles[0]}
//             </p>
//             {titles.map(
//                 (title)=>{
//                     return(
//                     <button key={title} onClick={(event)=>{
//                         var lastChar = title.charAt(title.length - 1);
//                         titles = titles.filter((val) => val.charAt(val.length - 1) !== lastChar)
//                         setTitles(titles);
//                         console.log(titles)
//                         // now this works
//                     }}>
//                         {title}
//                     </button>)}
//             )}
//         </div>
//         );
//     }




});

