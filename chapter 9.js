let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
turnO=true;
count=0;
enableBox();
msgContainer.classList.add("hide");

};

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        
     if(turnO===true){
     box.innerText="O";
     turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    } 
    box.disabled="true" ;
    count++;

    let isWinner=checkWinner();

    if(count===9 && !isWinner){
        gameDraw();
    }
    
    }); 
});
const gameDraw=()=>{
    msg.innerText=`Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledBox();
};

const disabledBox=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
};

const enableBox=()=>{
    for( let box of boxes){
    box.disabled=false;
        box.innerText="";
    }
};



const showWinner=(winner)=>{
    msg.innerText=`congratulations! the winner is ${winner} `
    msgContainer.classList.remove("hide");
    disabledBox();
}

const checkWinner=()=>{
    for( let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            
            showWinner(pos1Val);
            return true;
        }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);





