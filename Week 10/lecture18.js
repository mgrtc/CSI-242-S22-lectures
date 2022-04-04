////**********************************************************
////**********************************************************
//// Lecture 18: React: wrapping up events, & Stable Keys
////**********************************************************
////**********************************************************

console.log("hi");
addEventListener("load",()=>{
    ReactDOM.render(<App />,
        document.getElementById("root"));

//**************************************
// Async setState and setState Callbacks
//**************************************

    // function App() {
    //     const [num, setNum] = React.useState(0);
        
    //     function up1() { setNum(num + 1); }


    //     function upN(n) {
    //         var a = 0;
    //         while(a < n){
    //             setNum(num + 1); //num is the value of num when setNum is called right here
    //             a++;
    //         }
    //     }

    //     function upN(n) {
    //         setNum(num+n);
    //     }

            
    //     function upN(n) {
    //         var a = 0;
    //         while(a < n){
    //             setNum((futureNum)=>{return futureNum+1}); //futureNum is the value of num when the setNUm get's evaluated
    //             a++;
    //         }
    //     }

    //     // [Event Queue] <-\
    //     // Eventlistener --/
    //     // when the event listener is triggered it puts a block on the event queue


    //     // When JS has no more code to run it goes and checks if theres anything on the event queue
    //     // if there is then we pop those off 1 by 1 and run them

    //     // When setState is called or this case setNum, that puts the updating block
    //     // on the event queue. And we'll only go deal with that once JS is idle

    //     // [Event Queue] <- [setNum(1)] <- [setNum(1)]

    //     // [Event Queue] <- [setNum(func)] <- [setNum(func)]

    //     // [setNum(func)]
    //     // func(0) return 1
    //     // setNum(1)

    //     // [setNum(func)]
    //     // func(1) return 2
    //     // setNum(2)


    //     return (
    //         <div>
    //             <h3>Count: {num}</h3>
    //             <button onClick={up1}>Up By 1</button>
    //             <button onClick={()=>{upN(2)}}>Up By 2</button>
    //         </div>
    //     );

    // }
    // Doesn't work 
    // what happens here is that each setNum basically queue's up a update and rerender
    // but the second one get's queued up before the first one finishes
    // and has num as what ever it was when it got queued


    // Solution:
    // If you pass in a callback function to setNum, the callback will get placed on the queue
    // And so when the function comes off the queue all the updates will have happened
    // the callback function get's the current value of the State var
    // and so it has the most up to date one value and can update with that.

    
    // I'm gonna be honest, this is kinda dumb, idk it feels like a lot, and the documentation for this sucks
//   }


//   // More better mapping, rotating the state array

    // function App() {
    //     console.log("app renders");
    //     var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
    //     return (
    //     <div>
    //         <p>
    //             Hello my {titles[0]}
    //         </p>
    //         {titles.map(
    //             (title)=>{
    //                 return(
    //                 <button key={title} onClick={(event)=>{
    //                     var rot = titles.indexOf(event.target.innerHTML);
    //                     titles = titles.map((val, i) => titles[(i + rot) % 4])
    //                     setTitles(titles);
    //                     // now this works
    //                 }}>
    //                     {title}
    //                 </button>)}
    //         )}
    //     </div>
    //     );
    // }

//     // filtering

    function App() {
        console.log("app renders");
        var [titles, setTitles] = React.useState(["pal", "friend", "dude", "colleague"]);
        return (
        <div>
            <p>
                Hello my {titles[0]}
            </p>
            {titles.map(
                (title)=>{
                    return(
                    <button key={title} onClick={(event)=>{
                        var lastChar = title.charAt(title.length - 1);
                        titles = titles.filter((val) => val.charAt(val.length - 1) !== lastChar)
                        setTitles(titles);
                        console.log(titles)
                        // now this works
                    }}>
                        {title}
                    </button>)}
            )}
        </div>
        );
    }

//**************************************
// Making stable keys
//**************************************

    // function rollDice(){
    //     return Math.floor(Math.random() * (6) + 1);
    // }

    // function DiceButton(props){
    //     return( 
    //         <button onClick={(event)=>{
                
    //             var updatedDice = props.dice.filter((die) => die.val !== props.die);
                
    //             props.setDice(updatedDice);
    //         }}>
    //             {props.die}
    //         </button>
    //     )
    // }
    
    // function App() {
    //     console.log("app renders");
    //     // var [dice, setDice] = React.useState([rollDice(),rollDice(),rollDice(),rollDice()]);
    //     var [dice, setDice] = React.useState(
    //         [
    //             {val: rollDice(), id: uuid.v4()},
    //             {val: rollDice(), id: uuid.v4()},
    //             {val: rollDice(), id: uuid.v4()},
    //             {val: rollDice(), id: uuid.v4()}
    //         ]
    //     );
    //     console.log("setup")
    //     return (
    //     <div>
    //         <p>
    //             Rolled: 
    //         {
    //             dice.map(
    //                 function(die, i){
    //                     // key = window.idCounter();
    //                     // console.log(key);
    //                     return(
    //                         <DiceButton 
    //                             // key={i} // unstable
    //                             // die = {die}
    //                             // look at how the same button has different keys at different times / filters
    //                             // key={uuid.v4()} // still unstable
    //                             key={die.id} // stable w/ lines 139 to 146 uncommented
    //                             die={die.val} 
    //                             setDice={setDice} 
    //                             dice = {dice}/>
    //                     )
    //                 }
    //             )
    //         }
    //         </p>
    //     </div>
    //     );
    // }


//Passcode: hint cute snake