var boardStyle = {  
    backgroundColor: "#bbada0",  
    padding: "5px",
    width: "440px",  
    height: "440px",
    borderRadius: "2.5%",
}

// document.addEventListener("keypress", ()=>{
//     setGamesState("5");
// })

function handlePress(event, gameState, setGameState){
    var newState = {score: gameState.score, board: shiftBoardLeft(gameState.board)};
    console.log(newState);
    if(event.code === "KeyA"){
        setGameState(newState);
    }
}

function Game(){
    var [gameState, setGameState] = React.useState({
        score: 0,
        board:[
            [0,4,0,0],
            [0,0,0,0],
            [0,0,2,0],
            [0,0,0,0]
        ]
    })
    console.log(gameState)
    return(
        <div>
            <span>Score: {gameState.score}</span>
            <div tabIndex="0" style={boardStyle} onKeyPress={(event)=>{handlePress(event, gameState, setGameState)}}>
                <Row row={gameState.board[0]}/>
                <Row row={gameState.board[1]}/>
                <Row row={gameState.board[2]}/>
                <Row row={gameState.board[3]}/>
            </div>
        </div>
    )
}