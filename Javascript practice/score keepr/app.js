let p1Display=document.querySelector('#p1Display')
let p2Display=document.querySelector('#p2Display')
let reset=document.querySelector('#resetBtn')
let p1Btn=document.querySelector('#p1Btn')
let p2Btn=document.querySelector('#p2Btn')
let winningScoreSelect=document.querySelector('#playto')

let scoreP1=0;
let scoreP2=0;
let winScore=3;
let isGameOver= false;
p1Btn.addEventListener('click',function(){
    if(!isGameOver){
        scoreP1 += 1;
    if(scoreP1===winScore){ 
     isGameOver=true;
     p1Btn.classList.add('hover')
     p2Btn.classList.add('hover')
     p1Display.classList.add('winner')
     p2Display.classList.add('looser')
    }
    p1Display.textContent=scoreP1;
}
})

p2Btn.addEventListener('click',function(){
    if(!isGameOver){
        scoreP2 += 1;
    if(scoreP2===winScore){ 
     isGameOver=true;
     p1Btn.classList.add('hover')
     p2Btn.classList.add('hover')
     p2Display.classList.add('winner')
     p1Display.classList.add('looser')
    }
    p2Display.textContent=scoreP2;
}
})

winningScoreSelect.addEventListener('change',function(){
    winScore=parseInt(this.value) 
    resetfunc()
})


reset.addEventListener('click',resetfunc)

function resetfunc(){
    isGameOver=false;
    scoreP1=0;
    scoreP2=0;
    p1Display.textContent=0
    p2Display.textContent=0
    p1Display.classList.remove('winner','looser')
    p2Display.classList.remove('winner','looser')
    p1Btn.classList.remove('hover')
     p2Btn.classList.remove('hover')
}