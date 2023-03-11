const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');
const btnRoll=document.querySelector('.btn--roll');
const current0=document.getElementById('current--0');
const current1=document.getElementById('current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');


const init=function(){
    scores=[0,0]
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    activePlayer=0
    currentScore=0
    playing=true
    diceEl.classList.add('hidden')

    player0.classList.add('player--active')
    player1.classList.remove('player--active')



}

init()

//switch player
const switchPlayer=function(){
    document.getElementById('current--'+activePlayer).textContent=0
    activePlayer=activePlayer===0?1:0
    currentScore=0

     player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
    
    
}

//roll the button
btnRoll.addEventListener('click',function(){
    if(playing)
    {diceValue=Math.trunc(Math.random() * 6)+1;
    

    diceEl.classList.remove('hidden')
    diceEl.src='dice-' +diceValue + '.png'

    if(diceValue!==1){
        console.log("player"+activePlayer)
        currentScore+=diceValue
        // ram="current"+activePlayer
        document.getElementById('current--'+activePlayer).textContent=currentScore
    }
    else{
        
        switchPlayer()
    }}
})

//hold button
btnHold.addEventListener('click',function(){
    if(playing)
   { scores[activePlayer]+=currentScore;
    document.getElementById('score--'+ activePlayer).textContent=scores[activePlayer];

    if(scores[activePlayer]>=10){
        playing=false;
        diceEl.classList.add('hidden')
        document.querySelector('.player--'+activePlayer).classList.add('player--winner');
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');

    }
    else{
        switchPlayer();
    }}
})

//reset the game
btnNew.addEventListener('click',init)