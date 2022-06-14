function Row({row}){
    return(
        <div>
            <Block val={row[0]}/>
            <Block val={row[1]}/>
            <Block val={row[2]}/>
            <Block val={row[3]}/>
        </div>
    )
}