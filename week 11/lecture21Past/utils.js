function shiftElemLeft(row, i){
    var moveTo = i;
    while(moveTo > 0 && row[moveTo-1] === 0){
        moveTo --;
    }
    if(moveTo > 0 && row[moveTo-1] == row[i]){
        row[moveTo-1] = row[i] *2;
        row[i] = 0;
    }else{
        row[moveTo] = row[i];
        row[i] = 0;
    }
    return row;
}

function shiftRowLeft(row){
    for(var i = 0; i < row.length; i++){
        row[i]= shiftElemLeft(row, i);
    }
    return row
}

function shiftBoardLeft(board){
    for(var i = 0; i < board.length; i++){
        board[i]= shiftRowLeft(board[i]);
    }
    return board
}