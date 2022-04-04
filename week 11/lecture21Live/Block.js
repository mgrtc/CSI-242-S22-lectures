var colors = {
    0: "rgba(240, 230, 220, 0.35)",
    2: "rgba(240, 200, 150, 0.5)",
    4: "rgba(240, 150, 125, 0.6)",
    8: "rgba(240, 125, 100, 0.65)",
    16: "rgba(200, 100, 150, 0.7)",
    32: "rgba(170, 75, 175, 0.75)",
    64: "rgba(150, 50, 200, 0.8)",
    128: "rgba(100, 20, 230, 0.85)",
    256: "rgba(150, 20, 150, 0.9)",
    512: "rgba(200, 100, 100, 0.95)",
    1024: "rgba(240, 150, 20, 1)",
    2048: "rgba(240, 200, 0, 1)",
}

function blockStyle(val){
    return {
        padding: "25px",  
        backgroundColor: colors[val],  
        width: "50px",  
        height: "50px",  
        borderRadius: "10%",
        fontSize:"50px",
        textAlign: "center",
        color: "white",
        margin: "5px",
        float: "left",
    }
}

function Block({val}){
    return(
        <div style={blockStyle(val)}>{val === 0 ? "" : val}</div>
    )
}