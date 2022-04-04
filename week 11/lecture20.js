////**********************************************************
////**********************************************************
//// Lecture 20: Component Design 2
////**********************************************************
////**********************************************************

addEventListener("load",()=>{
    ReactDOM.render(<App />,
        document.getElementById("root"));

// //*****************
// // Component Design
// //*****************

function sum(array){
    var ret = 0;
    for (let i = 0; i < array.length; i++) {
        ret += array[i];
    }
    return ret;
}

function getRolls(numDice){
    //returns an array of random numbers between 1 and 6 that is numDice long
    var ret = [];
    for(var i = 1; i <= numDice; i++){
        // console.log("getRolls",i);
        ret.push(Math.floor(Math.random() * (6) + 1));
    }
    return ret;
}

function Die({ val }) {
    var dieStyle = {
        padding: "25px",  
        backgroundColor: "tomato",  
        width: "50px",  
        height: "50px",  
        borderRadius: "10%",
        fontSize: "50px",
        textAlign: "center",
        color: "white",
        margin: "2px"
    }
    return (
        <div style={dieStyle} className="Die">
            {val}
        </div>
    );
}


function Dice({ dice }) {
    return (
        <div className="Dice">
            {
            dice.map(
                (val, i) => {
                    return <Die key={i} val={val} />
                }
            )
            }
        </div>
    );
}



// function LuckyN({ numDice, goal }) {


// //     // var [val, setVal] = React.useState(7); // initialize the state variable, which we only want to do the first time
// //     // // var valStateArray = React.useState(7);
// //     // // var val = valStateArray[0];
// //     // // var setVal = valStateArray[1];
// //     // console.log(val);
// //     // // if(val !== 12){
// //     // setVal(12); // asyncronous, setTimeout(setVal(12), 0)
// //     // // }
// //     // console.log(val);
// //     // return(
// //     //     <p>hi</p>
// //     // );


//     const [dice, setDice] = React.useState(getRolls(numDice));
//     const won = sum(dice) === goal;
  
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <h1>Lucky{goal}: { won ? "You won!" : "You Lose"}</h1>
//             <Dice dice={dice} />
//             <button onClick={roll}>
//                 Roll Again!
//             </button>
//         </main>
//     );
// }

// function App() {
//     // var [dice, setDice] = React.useState(getRolls(2));
//     // var won = (sum(dice) === 7);
//     return (
//       <div className="App">
//           {/* <h1>Lucky7: You {won ? "Won" : "Lost"}</h1>
//           <Dice dice={dice} />
//           <button onClick={
//                 function(){
//                     dice = setDice(getRolls(2));
//                 }
//           }>
//               Roll Again!
//           </button> */}
//         <LuckyN numDice={3} goal={10}/>
//       </div>
//     );
// }



//***********
// Start Here
//***********

//Design Principles
// * Lift state as high as needed but no higher *
//   - It is held by the "youngest" possible parent of everything that uses it
//     [App] - numDice and goal are set here as props. These will not change over the course of a game.
//       |     but may be different on other pages / Apps
//    [LuckyN] - State is stored here because we need it here to know if we win
//       |       and to use in it's children
//     [Dice]
//     /    \
//   [Die] [Die]
// * Try to Separate logical and presentational components *
//   - We use LuckyN and App here for our logic, with Dice and particularly Die
//     focused on presentation
// * Put utilities in their own file. In our case that would be getRolls and sum
//   should be in their own utils.js file
//   - One reason for that is that once they are in their own file they can be unit tested
//   - And then mocked for our testing of the components



//*****************************
// Passing a function as a prop

function LuckyN({ numDice, winCheck, goal }) {
    const [dice, setDice] = React.useState(getRolls(numDice));
    const won = winCheck(dice);
  
    function roll() { setDice(getRolls(numDice)); }
  
    return (
        <main className="LuckyN">
            <h1>Lucky {goal}: { won ? "You won!" : "You Lose"}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>
                Roll Again!
            </button>
        </main>
    );
}

function rolledEven(dice){
    return (sum(dice) % 2) === 0;
}

function yahtzee(dice){
    var ret = true;
    for(var i = 1; i < dice.length; i++ ){
        if(dice[i] !== dice[0]){
            ret = false;
        }
    }
    return ret;
}

function App() {
    return (
      <div className="App">
        <LuckyN 
            numDice={5} 
            winCheck={yahtzee} 
            goal="yahtzee"
            reRolling={true}
        />
      </div>
    );
}

// // Having the button and the h1 inside LuckyN is kind of against our design principles
// // about separating Presentation and Logic, especially if we make either of those 
// // components look nice.

// // Let's start with the button

function Button({ label, eventHandler }) {
    var buttonStyle = {
        padding: "15px",  
        backgroundColor: "black",  
        borderRadius: "10%",
        fontSize: "20px",
        textAlign: "center",
        color: "white",
        margin: "2px",
        borderColor: "gray",
    }
    return (
        <button
            style={buttonStyle}
            onClick={eventHandler}>
            {label}
        </button>
    );
}

function LuckyN({ numDice, winCheck, goal }) {
    const [dice, setDice] = React.useState(getRolls(numDice));
    const won = winCheck(dice);
  
    function roll() { setDice(getRolls(numDice)); }
    console.log(roll);
    return (
        <main className="LuckyN">
            <h1>Lucky {goal}: { won ? "You won!" : "You Lose"}</h1>
            <Dice dice={dice} />
            <Button eventHandler={roll} label="Roll Again!" />
            {/* passing in the roll function here is great
            because it allows the child component to modify State
            but only to do so in exactly the way it's supposed to */}
        </main>
    );
}

// function a(){console.log(1)}
// function a(){console.log(2)}
// a();

// // Now let's work on the title real quick

function LuckyN({ numDice, winCheck, goal }) {
    const [dice, setDice] = React.useState(getRolls(numDice));
    function roll() { setDice(getRolls(numDice)); }
  
    return (
        <main className="LuckyN">
            <Title label={`Lucky ${goal}`} won={winCheck(dice)}/>
            <Dice dice={dice} />
            <Button eventHandler={roll} label="Roll Again!" />
            {/* This right here is beautiful and 
            what React is supposed to look like */}
        </main>
    );
}

function Title({label, won}){
    return(
        <h1>
            {label}: { won ? "You Won!" : "You Lose"}
        </h1>
    )
}

//***************************
// Re-Rolling individual Dice

function d6(){
    return Math.floor(Math.random() * (6) + 1);
}

function LuckyN({ numDice, winCheck, goal, reRolling }) {
    const [dice, setDice] = React.useState(getRolls(numDice));
    function roll() { setDice(getRolls(numDice)); }

    function reRoll(n) {
        if(reRolling){
            setDice(
            dice => dice.map(
                function (v, idx){
                    return (idx === n) ? d6() : v;
                }
            )
            )
        }
    }
  
    return (
        <main className="LuckyN">
            <Title label={`Lucky ${goal}`} won={winCheck(dice)}/>
            <Dice dice={dice} reRoll={reRoll}/>
            <Button eventHandler={roll} label="Roll Again!" />
        </main>
    );
}

function Die({ val, reRoll, i }) {
    var dieStyle = {
        padding: "25px",  
        backgroundColor: "tomato",  
        width: "50px",  
        height: "50px",  
        borderRadius: "10%",
        fontSize: "50px",
        textAlign: "center",
        color: "white",
        margin: "2px"
    }
    function roll(){
        reRoll(i);
    }
    return (
        <div 
            style={dieStyle} 
            className="Die"
            onClick={roll}
        >
            {val}
        </div>
    );
}


function Dice({ dice, reRoll}) {
    return (
        <section className="Dice">
            {dice.map((v, i) =>
                <Die key={i} val={v} reRoll={reRoll} i={i}/>)}
        </section>
    );
}

// How data flows in React:

// A parent component defines a function
// The function is passed as a prop to a child component
// The child component invokes the prop function
// The parent function is called, usually setting new state
// The parent component is re-rendered along with its children



//***************
// Design Wrap Up
//***************

// * List components should be based off of State and have uuid keys
//   - Those keys should be set during the useState initialization and 
//     the keys should stay associated with the same value / Component
// * Components should be small and do one generic thing
//   - Their specific behavior should be set by props
//   - This makes them reusable and less likely to break
// * Components should either Logical or Presentational
//   - Sometimes this line can be a bit unclear, sorry
//   - Generally presentational components are very small and dumb
//     i.e. they usually just return a bit jsx rather than doing any computation
//     maybe there will be ternary statement or something.
//   - Generally logical components will have more for loops, helper functions,
//     computation, and state associated with them. They often also will have 
//     several different component children.
// * Generally you want to have useState and wrapper functions for setState
//   defined in a logical component and then passed down those wrapper functions 
//   into their child/presentational components as props.
// * try to minimize the amount of stuff you are storing in State
//   - in particular don't store derivable info in State
});

