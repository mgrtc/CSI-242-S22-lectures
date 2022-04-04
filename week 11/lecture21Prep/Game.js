var boardStyle = {  
    backgroundColor: "#bbada0",  
    padding: "5px",
    width: "440px",  
    height: "440px",
    borderRadius: "2.5%",
}

function handlePress(event,board,setBoard){
    console.log(event.code, board);
    if(event.code == "KeyW"){
        console.log("W")
        setBoard(dropRandom(handleBoardUp(board),1))
    }
    if(event.code == "KeyA"){
        setBoard(dropRandom(handleBoardLeft(board),1))
    }
    if(event.code == "KeyS"){
        setBoard(dropRandom(handleBoardDown(board),1))
    }
    if(event.code == "KeyD"){
        setBoard(dropRandom(handleBoardRight(board),1))
    }
}

function Game(){
    var blankBoard =       
        [[0,0,0,0],
        [0,0,0,0],
        [512,1024,2048,0],
        [32,64,128,256]];
    var [board, setBoard] = React.useState(dropRandom(blankBoard,2))


    return(
        <div tabIndex="0" style ={boardStyle} onKeyPress={(event)=>{handlePress(event,board,setBoard)}}>
            <Row vals={board[0]}/>
            <Row vals={board[1]}/>
            <Row vals={board[2]}/>
            <Row vals={board[3]}/>
        </div>
    )
};