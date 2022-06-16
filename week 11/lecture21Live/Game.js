var boardStyle = {  
    backgroundColor: "#bbada0",  
    padding: "5px",
    width: "440px",  
    height: "440px",
    borderRadius: "2.5%",
}

function handlePress(event, board, setBoard,setWin){
    var ret;
    if(event.code === "KeyW" || event.code === "ArrowUp"){
        ret = handleBoardUp(board);
    } else if(event.code === "KeyA" || event.code === "ArrowLeft"){
        ret = handleBoardLeft(board);
    } else if(event.code === "KeyS" || event.code === "ArrowDown"){
        ret = handleBoardDown(board);
    } else if(event.code === "KeyD" || event.code === "ArrowRight"){
        ret = handleBoardRight(board);
    }

    if(! check2DArrayEqVals(ret,board)){
        var newBoard = dropRandom(ret,1); 
        if(checkLose(newBoard)){
            setWin(-1);
        }else{
            setBoard(newBoard)
        }
    }
}

function Game(){

    var initBoard = [
        [0,0,0,0],
        [2,2,8,8],
        [4,4,2,2],
        [8,16,4,2048],
    ]

    var [board, setBoard] = React.useState(initBoard);
    var [win, setWin] = React.useState(0); // 0 is game is still going, 1 is win, -1 is lose
    
    function handlePressWrapper(event){
        handlePress(event,board,setBoard, setWin);
    }

    React.useEffect(() => {
        // initiate the event handler
          window.addEventListener("keyup", handlePressWrapper);
    
        // this will clean up the event every time the component is re-rendered
          return function cleanup() {
              window.removeEventListener("keyup", handlePressWrapper)
          }
      })

    // console.log(win)
    if(win === -1){
        board[0] = ["Y","O","U"," "]
        board[1] = ["L","O","S","E"]
        board[2] = ["!","!","!","!"]
        board[3] = ["!","!","!","!"]
    }

    return(
        <div style={boardStyle}>
            <Row row={board[0]}/>
            <Row row={board[1]}/>
            <Row row={board[2]}/>
            <Row row={board[3]}/>
        </div>
    )
}