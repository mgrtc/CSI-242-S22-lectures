////***************************
////***************************
//// Lecture 16: Intro to React 
////***************************
////***************************

// function Hello() {
//     var a = 5+7;
//     return( <p>Sup 5+7 is {a}</p> );

// }
  
// ReactDOM.render(<Hello />,
//     document.getElementById("root"));

////*******************************
//// JSX Rules
////*******************************

// Elements in JSX must either:
// Have an explicit closing tag: <b> ... </b>
// Be explicitly self-closed: <input name="msg" />
// Cannot leave off that / or will get syntax error

// JSX must be have a single top element:
// const out = <b>Hi</b>;

// They cannot have multiple top elements:
// const out = <b>Hi</b> <i>!!!</i>; //error

// You can always wrap those in a top-level element:

// const out = <div> <b>Hi</b> <i>!!!</i> </div>;

////*************
//// Applications
////*************

// function App() {
//     return (
//       <div>
//         <h1>Greetings!</h1>
//         <Hello />
//         <Hello />
//       </div>
//     );
//   }

// // leave this render un-commented for rest of lecture
ReactDOM.render(<App />,
    document.getElementById("root"));


////************************
//// Splitting up Components
////************************
 //Go to lecture16React Folder


////****************************
//// Props: Customize components
////****************************

// function App() {
//     return (
//         <div>
//             <Hello to="5" author="Bob" />
//             <Hello to="Bob" author="Alice" />
//         </div>
//     )
// }

// function Hello(props) {
//     // props.to = "Alice"; //error
//     return (
//         <div>
//             <p>Secret Message: </p>
//             <p>
//             Hey {props.to}, <br/>
//             I have a secret <br/>
//             - {props.author}
//             </p>
//         </div>
//     )
// }

// Notes on Properties
/* 
    - Props are immutable i.e. they are consts
    - They are always strings by default
    - They are only other types if wrapped in {}
    <User name="Mike" salary={ 60000 }
    hobbies={ ["dogs", "reading", "board games"] } />
*/

//********************
// Destructuring Props

// function Hello({ to, author="Big Brother" }) {
//     return <p>Hi { to } <br/> - { author }</p>;
// }

// function App() {
//     return (
//         <div>
//             <Hello to="Alice" author="Bob" />
//             <Hello to="Bob" />
//         </div>
//     )
// }

// Notes on Properties
/* 
    Function components can return one of:
        - a single valid DOM object
        - an array of DOM objects
        - things that can easily turned into strings
        - null
    Nothing else is allowed

    But outside of the return, all the other things 
    you'd do in a JS function are cool
*/

////********************
//// Conditionals in JSX
////********************


// function Lottery({ winner }) {
//     if (winner)
//         return <p>You win!</p>;
//     else
//         return <p>You lose!</p>;
// }

// ////********
// //// Ternary

// function Lottery({ winner }) {
//     return (
//         <p>You {winner ? "win" : "lose"}!</p>
//     );
// }

// function App() {
//     return (
//         <div>
//             <Lottery winner={true}/>
//             <Lottery winner={false}/>
//         </div>
//     )
// }

////*************
//// Loops in JSX
////*************

function Messages({ msgs }) {
    return (
        <div>
            { msgs.map(m => <p key={m} >{m}</p>) }
        </div>
    );
}

// function Messages({ msgs }) {
//     var ret = [];
//     for (var msg of msgs){
//         ret.push(<p key={msg} >{msg}</p>);
//     }
//     return (
//         <div>
//             {ret}
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <Messages msgs={["Hello world", "Hello to you too", "Uhhhh, I was not expecting a reply???"]}/>
//         </div>
//     );
// }

////*****************
//// Styling in React
////*****************

// class is a reserved keyword in JS so we do this with className

// function Message() {
//     return <div className="Message">Hi!</div>;
// }

// function App() {
//     return (
//         <div>
//             <Message/>
//         </div>
//     )
// }

////***************
//// inline Styling

// pretty similar to html, but now style = a JS object instead of a string

function Box({ favoriteColor, otherColor, message }) {
    const myStyles = {
      color: favoriteColor,
      backgroundColor: otherColor,
    };
  
    return <span style={myStyles}>{message}</span>;
  }

function App() {
    return (
        <div>
            <Box
            favoriteColor = "blue"
            otherColor = "gray"
            message = "Hello World"
            />
        </div>
    )
}
