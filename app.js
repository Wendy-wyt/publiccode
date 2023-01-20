const p1Button=document.getElementById('p1Button');
const p2Button=document.getElementById('p2Button');
const p1Display=document.getElementById('p1Display');
const p2Display=document.getElementById('p2Display');
const resetButton=document.getElementById('resetButton')
const winningSelect=document.getElementById('playto');

const p1={
    score: 0,
    button: document.getElementById('p1Button'),
    display: document.getElementById('p1Display')
}

const p2={
    score: 0,
    button: document.getElementById('p2Button'),
    display: document.getElementById('p2Display')
}

let isGameOver=false;
let winningScore=3;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score+=1;
        player.display.textContent=player.score;
        if(player.score==winningScore){
            isGameOver=true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
    }
}

p1Button.addEventListener('click', function(){
    updateScores(p1, p2);
})

p2Button.addEventListener('click', function(){
    updateScores(p2,p1);
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver=false;
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove("winner","loser");
        p.button.disabled=false;
    }
}

winningSelect.addEventListener('change', function(){
    winningScore=parseInt(this.value);
    reset();
})
