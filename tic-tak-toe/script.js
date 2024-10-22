let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")
let msgContainer=document.querySelector(".msgContainer")
let newGameBtn=document.querySelector("#newBtn")
let msg=document.querySelector("#msg")

let turnO = true;//playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log("box was clicked",count)
        
    
        if (turnO) {
            box.innerText = 'O';
            
            // count++;
            turnO = false;
            
        }
    
        else {
            box.innerText = 'X';
            turnO = true;
            // count++;
        }
        box.disabled = true;
        
        checkWinner();
    })
});


const showWinner=(winner)=>{
    msg.innerText=`congrats, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes();
};
const Draw=(draw)=>{
    msg.innerText=`It's a Draw, Wanna play again?`
    msgContainer.classList.remove("hide")
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val===pos2Val && pos2Val===pos3Val){

                    console.log("Winner",pos1Val);
                    return showWinner(pos1Val);
                }
                
                else if(count===9 &&(pos1Val===pos2Val && pos2Val===pos3Val) ){
                    console.log("Winner",pos1Val);
                    return showWinner(pos1Val);
                   
                }
                else if(count===9 && pos1Val!=pos2Val && pos2Val!=pos3Val){
                    Draw();
                    console.log("Draw")

                }

                //use a new variable count, which counts button clicks. When the total count reaches 9 but Game has no winners, that means the game was draw.
            }
    }

}
// const Draw=()=>{
//     let count.addEventListener("click"Draw)
//     if(count===9){


//     }
// }
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("hide");

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
