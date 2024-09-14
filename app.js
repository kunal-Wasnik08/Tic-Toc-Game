let boxes = document.querySelectorAll(".box");
let msgContainer =document.querySelector(".msg_container ");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new_btn");
let resetBtn= document.querySelector("#resetbtn");


const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

 let turnO =true; //playerO =true  and player x
 const resetgame =()=>{
    turnO=true;
    enableBox();

 }
  
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO= false;
        

        }
        else{
            box.innerText= "X";
            turnO =true;
        }
        box.disabled=true;
        checkWinner();

    })
})



const disableBox =()=>{
    for(let box of boxes){
        box.disabled=true;
    }}
const enableBox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}
     const showWinner =(winner)=>{        
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
//   msgContainer.classList.remove("hide");
  disableBox();
// };
     }
    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
            
            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                          console.log("win the game "+pos1Val);

        showWinner(pos1Val);
        // return true;
      }
    }}}
    newbtn.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);