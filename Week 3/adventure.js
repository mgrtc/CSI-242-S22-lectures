

window.addEventListener('load', (event) => {
    left = 20;
    bottom = 20;
    leftInterval = null;
    rightInterval = null;
    upInterval = null;
    downInterval = null;


    body = document.getElementsByTagName("body").item(0)
    body.insertAdjacentHTML('beforeend', '<div id="me"></div>');
    me = document.getElementById("me")


    document.addEventListener('keydown', start_animation);
    document.addEventListener('keyup', end_animation);
    // pos_left = 10;
    // pos_bottom = 30;
    function start_animation(e) {
        console.log(e.code);
        console.log("ri:",rightInterval);
        if(rightInterval == null && e.code == "KeyD"){
            rightInterval = setInterval(frameRight, 10); // function, millisenconds between calls
            function frameRight() {
                console.log(window.getComputedStyle(me).left)
                left = left + 2
                me.style.left = `${left}px`;
            }
        }
        if(leftInterval == null && e.code == "KeyA"){
            leftInterval = setInterval(frameLeft, 10); // function, millisenconds between calls
            function frameLeft() {
                left = left - 2
                me.style.left = `${left}px`;
            }
        }
        if(upInterval == null && e.code == "KeyW"){
            upInterval = setInterval(frameUp, 10); // function, millisenconds between calls
            function frameUp() {
                console.log(window.getComputedStyle(me).bottom)
                bottom = bottom + 2
                me.style.bottom = `${bottom}px`;
            }
        }
        if(downInterval == null && e.code == "KeyS"){
            downInterval = setInterval(frameDown, 10); // function, millisenconds between calls
            function frameDown() {
                console.log(window.getComputedStyle(me).bottom)
                bottom = bottom - 2
                me.style.bottom = `${bottom}px`;
            }
        }
    }
    function end_animation(e) {
        if(e.code == "KeyD"){
            clearInterval(rightInterval);
            rightInterval = null
        }
        if(e.code == "KeyA"){
            clearInterval(leftInterval);
            leftInterval = null 
        }
        if(e.code == "KeyW"){
            clearInterval(upInterval);
            upInterval = null 
        }
        if(e.code == "KeyS"){
            clearInterval(downInterval);
            downInterval = null 
        }
    }
});
document.addEventListener("click", (event)=>{console.log(event.target)})
        // if(type(e) == "keydown" && e.code === "KeyA" && left == null){
        //     left = setInterval(leftFrame, 10); // function, millisenconds between calls
        //     function leftFrame() {
        //         pos++; 
        //         elem.style.top = pos + 'px'; 
        //         elem.style.left = pos + 'px';
        //         elem.style.backgroundColor = `#${pos.toString(16)}0000`;
        //     }
        //     left -= 15;
        //     me.style.left = left;
        //     // checkCollisions()
        // }
        // if(e.code === "KeyD"){
        //     left += 15;
        //     me.style.left = left;
        // }
        // if(e.code === "KeyW"){
        //     console.log(window.scrollY)
        //     if(window.scrollY > 0 ){
        //         window.scrollBy(0, -20);
        //     }else{
        //         console.log("a", getComputedStyle(me).bottom, parseInt(getComputedStyle(me).bottom), parseInt(getComputedStyle(me).bottom)+15)
        //         bottom = parseInt(getComputedStyle(me).bottom) + 15;
        //         console.log("b", bottom)
        //         me.style.bottom = bottom
        //     }
        // }
        // if(e.code === "KeyS"){
        //     if(bottom > 30){
        //         bottom -= 15;
        //         me.style.bottom = bottom;
        //     }else{
        //         window.scrollBy(0, 20);
        //     }
        // }
        // console.log("me", me.getBoundingClientRect());
//     }
// });

// function checkCollisions(direction, location){
//     [...document.getElementsByTagName("p")].forEach(elem =>{
//         console.log("p",elem.getBoundingClientRect());
//     });
// }