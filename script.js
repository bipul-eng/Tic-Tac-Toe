let boxes=document.querySelectorAll(".col1");
let turn1="X";
let button1=document.getElementById("reserved");

let winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
const checkWinner=()=>
{
for ( let winPatttern of winPatterns)
{
  let val1=boxes[winPatttern[0]].innerText; 
  let val2=boxes[winPatttern[1]].innerText;
  let val3=boxes[winPatttern[2]].innerText;
  if(val1!="" && val2!= "" && val3!="")
  {  
    if(val1 === val2&&val2===val3)
    { 
        if(turn1=="X")
        {
            turn1="O"
        }
        
        else
        { 
            turn1="X";
        } 
        document.getElementById("ok").innerHTML=`Winner: <br> ${turn1} Is Winner`
        
        boxes.forEach((box)=>
{
        box.classList.add("disabled");
        box.classList.add("borderbox");
})
    }
}
}
}
boxes.forEach((box)=>
{
box.addEventListener("click",Check=()=>
{   
    box.innerHTML=turn1;
    box.classList.add("disabled");
    if(turn1=="X")
    {
        turn1="O"
    }
    else
    { 
        turn1="X";
    } 
    checkWinner(); 
})
})

button1.addEventListener("click",reset);
function reset()
{
    boxes.forEach((box)=>
    {
    box.innerHTML="";
    box.classList.remove("disabled");
    document.getElementById("ok").innerHTML="";
    box.classList.remove("borderbox");
})
}




