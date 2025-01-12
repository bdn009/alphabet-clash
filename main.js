function play(){
    hideElementById('home-screen');
    showElementById('play-screen');
    continueGame();

}
function handleKeyUp(event){
    const playerPressed=event.key;
    // console.log(playerPressed);
    const alphabetDisplay=document.getElementById('alphabet-display').innerText
    const expectedAlphabet=alphabetDisplay.toLowerCase()
    // console.log(alphabetDisplay)
    // console.log(expectedAlphabet)
    
    if (playerPressed===expectedAlphabet) {
        const scores=document.getElementById('score');
        const score=scores.innerText;
        const currentScore=parseInt(score);
        // new score
        const newScore=currentScore+1;
        scores.innerText=newScore
        // play again
        removebgcolor(expectedAlphabet);
        continueGame();
    } else {
        const lifes=document.getElementById('life');
        const life=lifes.innerText;
        const currentLife=parseInt(life);
        const newLife=currentLife-1;
        lifes.innerText=newLife
        if (newLife==0) {
            gameOver();
        }
    }
}
function gameOver(){
    hideElementById('play-screen');
    showElementById('score-screen');
    const lastScore=document.getElementById('score');
    const lastScoreText=lastScore.innerText;
    const scoreEnd=document.getElementById('score-end');
    scoreEnd.innerText=lastScoreText;
}
function playAgain(){
    hideElementById('score-screen');
    showElementById('play-screen');
    setElementValueById('life', 3);
    setElementValueById('score', 0);
}
document.addEventListener('keyup', handleKeyUp);
function continueGame(){
    const alphabet=randomAlphabet();
    const alphabetDisplay=document.getElementById('alphabet-display');
    alphabetDisplay.innerText=alphabet;
    setbgcolor(alphabet);
}

