addEventListener("load",()=>{
    ReactDOM.render(<App />,
        document.getElementById("root"));
});

function App(){
    return(
        <Game />
    )
}