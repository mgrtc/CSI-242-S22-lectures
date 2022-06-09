////**********************************************************
////**********************************************************
//// Lecture 19: Component Design
////**********************************************************
////**********************************************************

/*

React so Far:

**********
Components
**********

Components are functions that are called as jsx tags 

function App(props) is called via <App className="hi" />

*****
Props
*****

The inputs to the component functions are called props
There are two ways to get at them from inside the function

function App(props){
    console.log(props.val);
}

or

function App({val, hey, ...props}){
    console.log(val);
    console.log(props);
}

Example: plug this into console
    function hey({a, b, ...props}){
        console.log(props);
    }
    hey({a: "hi", b: "sup", c: "yo", d: "wow"})

props are always consts

*****
State
*****

Props are constant and associate with a single render of a single component.
But our page isn't constant and needs to have a state that flows between renders.

So we introduce State.
State's are initialize using the useState hook/function
[val, setVal] = useState(initialVal);

This useState will only be called during the components initial render
It returns a variable val which can be used to change the state, but shouldn't be
And it returns a function setVal which can be called to change the state and
trigger a rerender. 

The rerender will only happen if the new val is different from the old val.
Notably this means that if the state is an array and the new state is
that same array but some of the values inside have changed this will not
trigger a reRender. This is why .map is used

On consideration this is a dumb way of doing things with massive overhead.
I think we'd probably be better off just modifying the variable and then
having a rerender state that we toggle every time we want a rerender?

But convention is convention.

***********
Key and IDs
***********

When you have a procedurally generated array of components you need to
give them keys or React will freak out at you. Having duplicate keys will
make React freak out even harder. The best way to do this is to associate 
unique ids with each of the state objects that correspond to the component.

[{val: "hi", id: uuid.v4()},{val: "sup", id: uuid.v4()}]


*/

console.log("hi");
addEventListener("load",()=>{
    ReactDOM.render(<App />,
        document.getElementById("root"));

//*****************
// Component Design
//*****************

//Design Principles
// * Lift state as high as needed but no higher *
// * Try to Separate logical and presentational components *
// * Separate out utilities, ideally into their own file.



// // *********
// // Utilities
// // *********

// function sum(array){
//     var ret = 0;
//     for (let i = 0; i < array.length; i++) {
//         ret += array[i];
//     }
//     return ret;
// }

// function getRolls(numDice){
//     //returns an array of random numbers between 1 and 6 that is numDice long
//     var ret = [];
//     for(var i = 1; i <= numDice; i++){
//         console.log("getRolls",i);
//         ret.push(Math.floor(Math.random() * (6) + 1));
//     }
//     return ret;
// }

// function getIDs(num){
//     //returns an array of with num random id strings
//     var ret = [];
//     for(var i = 1; i <= num; i++){
//         ret.push(uuid.v4());
//     }
//     return ret;
// }

// // ******************
// // Display Components
// // ******************

// function Die({ val }) {
//     var dieStyle = {
//         padding: "25px",  
//         backgroundColor: "tomato",  
//         width: "50px",  
//         height: "50px",  
//         borderRadius: "10%",
//         fontSize: "50px",
//         textAlign: "center",
//         color: "white",
//         margin: "2px"
//     }
//     return (
//         <div style={dieStyle} className="Die">
//             {val}
//         </div>
//     );
// }


// function Dice({ dice, ids }) {
//     return (
//         <div className="Dice">
//             {
//             dice.map(
//                 (val, i) => {
//                     return <Die key={ids[i]} val={val} />
//                 }
//             )
//             }
//         </div>
//     );
// }


// // ******************
// // Logical Components
// // ******************

// function LuckyN({ numDice, goal }) {

//     const [dice, setDice] = React.useState(getRolls(numDice));
//     const [ids] = React.useState(getIDs(numDice));
//     const won = sum(dice) === goal;
    
//     console.log
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <h1>Lucky{goal}: { won ? "You won!" : "You Lose"}</h1>
//             <Dice dice={dice} ids={ids}/>
//             <button onClick={roll}>
//                 Roll Again!
//             </button>
//         </main>
//     );
// }

// // *******
// // * App *
// // *******

// function App() {
//     return (
//       <div className="App">
//         <LuckyN numDice={2} goal={7}/>
//       </div>
//     );
// }

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
//   - We use LuckyN and kinda App here for our logic, with Dice and 
//     particularly Die focused on presentation.
// * Put utilities in their own file. In our case that would be getRolls, getIDs, and sum
//   should be in their own utils.js file.
//   - One reason for that is that once they are in their own file they can be unit tested
//   - And then mocked for our testing of the components.


//*****************************
// Passing a function as a prop

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     const won = winCheck(dice);
  
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <h1>Lucky {goal}: { won ? "You won!" : "You Lose"}</h1>
//             <Dice dice={dice} />
//             <button onClick={roll}>
//                 Roll Again!
//             </button>
//         </main>
//     );
// }

// function rolledEven(dice){
//     return (sum(dice) % 2) === 0;
// }

// function App() {
//     return (
//       <div className="App">
//         <LuckyN 
//             numDice={2} 
//             winCheck={rolledEven} 
//             goal="even"
//         />
//       </div>
//     );
// }

// // Having the button and the h1 inside LuckyN is kind of against our design principles
// // about separating Presentation and Logic, especially if we make either of those 
// // components look nice.

// // Let's start with the button

// function Button({ label, roll }) {
//     var buttonStyle = {
//         padding: "15px",  
//         backgroundColor: "black",  
//         borderRadius: "10%",
//         fontSize: "20px",
//         textAlign: "center",
//         color: "white",
//         margin: "2px",
//         borderColor: "gray",
//     }
//     return (
//         <button
//             style={buttonStyle}
//             className="ReRollButton"
//             onClick={roll}>
//             {label}
//         </button>
//     );
// }

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     const won = winCheck(dice);
  
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <h1>Lucky {goal}: { won ? "You won!" : "You Lose"}</h1>
//             <Dice dice={dice} />
//             <Button roll={roll} label="Roll Again!" />
//             {/* passing in the roll function here is great
//             because it allows the child component to modify State
//             but only to do so in exactly the way it's supposed to */}
//         </main>
//     );
// }

// // Now let's work on the title real quick

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     function roll() { setDice(getRolls(numDice)); }
  
//     return (
//         <main className="LuckyN">
//             <Title label={`Lucky ${goal}`} won={winCheck(dice)}/>
//             <Dice dice={dice} />
//             <Button roll={roll} label="Roll Again!" />
//             {/* This right here is beautiful and 
//             what React is supposed to look like */}
//         </main>
//     );
// }

// function Title({label, won}){
//     return(
//         <h1>
//             {label}: { won ? "You Won!" : "You Lose"}
//         </h1>
//     )
// }

//***************************
// Re-Rolling individual Dice

// function d6(){
//     return Math.floor(Math.random() * (6) + 1);
// }

// function LuckyN({ numDice, winCheck, goal }) {
//     const [dice, setDice] = React.useState(getRolls(numDice));
//     function roll() { setDice(getRolls(numDice)); }
//     function reRoll(n) {
//         setDice(
//             dice => dice.map(
//                 function (v, idx){
//                     return (idx === n) ? d6() : v
//                 }
//             )
//         )
//     }
  
//     return (
//         <main className="LuckyN">
//             <Title label={`Lucky ${goal}`} won={winCheck(dice)}/>
//             <Dice dice={dice} reRoll={reRoll}/>
//             <Button roll={roll} label="Roll Again!" />
//         </main>
//     );
// }

// function Die({ val, reRoll, i }) {
//     var dieStyle = {
//         padding: "25px",  
//         backgroundColor: "tomato",  
//         width: "50px",  
//         height: "50px",  
//         borderRadius: "10%",
//         fontSize: "50px",
//         textAlign: "center",
//         color: "white",
//         margin: "2px"
//     }
//     function roll(){
//         reRoll(i);
//     }
//     return (
//         <div 
//             style={dieStyle} 
//             className="Die"
//             onClick={roll}
//         >
//             {val}
//         </div>
//     );
// }


// function Dice({ dice, reRoll}) {
//     return (
//         <section className="Dice">
//             {dice.map((v, i) =>
//                 <Die key={i} val={v} reRoll={reRoll} i={i}/>)}
//         </section>
//     );
// }

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
// * Generally you want to have useState and wrapper functions for seState
//   defined in a logical component and then passed down those wrapper functions 
//   into their child/presentational components as props.
// * try to minimize the amount of stuff you are storing in State
//   - in particular don't store derivable info in State
});

