function Row({vals}){
    return(
        <div>
            <Block val={vals[0]}/>
            <Block val={vals[1]}/>
            <Block val={vals[2]}/>
            <Block val={vals[3]}/>
        </div>
    );
}