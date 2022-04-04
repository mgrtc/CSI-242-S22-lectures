function shiftLeft(row,i, allowed){
    var val = row[i];
    var moveTo = i;

    while(moveTo > allowed && row[moveTo-1] === 0){
        moveTo--;
    }
    
    if(moveTo === allowed || row[moveTo - 1] !== val){
        row[i] = 0;
        row[moveTo] = val;
        return moveTo;
    }

    if(row[moveTo - 1] === val){
        row[moveTo - 1] = val*2;
        row[i] = 0;
        return moveTo;
    }

}

function handleRowLeft(row){
    row = duplicate(row);
    var allowed = 0;
    // console.log("HRL:",row);
    for(var i = 0; i < row.length; i++){
        if(row[i] !== 0){
            allowed = shiftLeft(row,i,allowed)
        }
        // console.log("HRL:",row,i,allowed)
    }
    // console.log("HRL ret:",row);
    return row;
}

function handleBoardLeft(board){
    for(var i = 0; i < board.length; i++){
        // console.log("HBL:",board[i],handleRowLeft(board[i]));
        board[i] = handleRowLeft(board[i]);
    }
    return duplicate(board);
}

function handleBoardRight(board){
    board = flipBoard(board);
    board = handleBoardLeft(board);
    board = flipBoard(board);
    return duplicate(board);
}

function handleBoardUp(board){
    board = rowsToCols(board);
    board = handleBoardLeft(board);
    board = rowsToCols(board);
    return duplicate(board);
}
function handleBoardDown(board){
    board = rowsToCols(board);
    board = flipBoard(board);
    board = handleBoardLeft(board);
    board = flipBoard(board);
    board = rowsToCols(board);
    return duplicate(board);
}


function duplicate(array){
    return array.map(
        val =>  val
    )
}

function flip(row){
    var ret = [];
    for(var i = row.length - 1; i >= 0; i--){
        ret.push(row[i]);
    }
    return ret;
}

function flipBoard(board){
    for(var i = 0; i < board.length; i++){
        board[i] = flip(board[i]);
    }
    return duplicate(board);
}

function rowsToCols(board){
    var ret = [];
    for(var i = 0; i < board.length; i++){
        ret.push([]);
        for(var j = 0; j < board.length; j++){
            ret[i].push(board[j][i]);
        }
    }
    return ret;
}

function randInt(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

function dropRandom(board,num){
    board = duplicate(board);
    var dropped = 0;
    var size = board.length;
    while(dropped < num){
        var x = randInt(0,size-1);
        var y = randInt(0,size-1);
        if(board[x][y] === 0){
            board[x][y] = 2 * randInt(1,2);
            dropped++;
        }
    }
    return board;
}