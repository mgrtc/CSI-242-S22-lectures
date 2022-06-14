var boardStyle = {  
    backgroundColor: "#bbada0",  
    padding: "5px",
    width: "440px",  
    height: "440px",
    borderRadius: "2.5%",
}

function useEvent(event, handler) {
    React.useEffect(() => {
      // initiate the event handler
      window.addEventListener(event, handler);
  
      // this will clean up the event every time the component is re-rendered
      return function cleanup() {
        window.removeEventListener(event, handler)
      }
    })
  }


function handlePress(event,board,setBoard){
    console.log(event.code, board);
    if(event.code == "KeyW"){
        setBoard(dropRandom(handleBoardUp(board),1))
    }
    else if(event.code == "KeyA"){
        setBoard(dropRandom(handleBoardLeft(board),1))
    }
    else if(event.code == "KeyS"){
        setBoard(dropRandom(handleBoardDown(board),1))
    }
    else if(event.code == "KeyD"){
        setBoard(dropRandom(handleBoardRight(board),1))
    }
}

function Game(){

    var blankBoard =       
    [[0,0,0,0],
    [0,0,0,0],
    [512,1024,2048,0],
    [32,64,128,256]];
    
    var [board, setBoard] = React.useState(dropRandom(blankBoard,3));
    
    function handlePressWrapper(event){
        handlePress(event, board, setBoard);
    }

    useEvent("keyup", handlePressWrapper);
    // if(window.i === undefined){
    //     window.i = 0;
    //     window.addEventListener("keyup",
    //         function(event){
    //             console.log(window.i, board[3][3]);
    //             window.i += 1;
    //             handlePress(event,board,setBoard);
    //             console.log(window.i, board[3][3]);
    //         }
    //     )
    // }

    return(
        <div tabIndex="0" style ={boardStyle} onKeyPress={(event)=>{handlePress(event,board,setBoard)}}>
            <Row vals={board[0]}/>
            <Row vals={board[1]}/>
            <Row vals={board[2]}/>
            <Row vals={board[3]}/>
        </div>
    )
};