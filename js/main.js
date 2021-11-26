/* VARIABLES */
var scores, currentScore, activePlayer, gameIsNotOver;

var dice = document.querySelector('.dice');

var rollBtn = document.querySelector('.btn-roll');
var holdBtn = document.querySelector('.btn-keep');
var newBtn = document.querySelector('.btn-new');


/* INIT FUNCTION */
function init() {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameIsNotOver = true;

    dice.classList.add('js-dice');

    document.querySelector('#score-0').innerText = '0';
    document.querySelector('#score-1').innerText = '0';
    document.querySelector('#current-0').innerText = '0';
    document.querySelector('#current-1').innerText = '0';

    document.querySelector('#name-0').innerText = 'Batman';
    document.querySelector('#name-1').innerText = 'Joker';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

};


init();


/* ROLL BUTTON */
rollBtn.addEventListener('click', function() {

    if (gameIsNotOver) {
        var rollTheDice = Math.floor( Math.random() * 6 ) + 1;
        var playerCurrent = document.querySelector('#current-' + activePlayer);

        dice.classList.remove('js-dice');
        dice.src = 'img/dice-' + rollTheDice + '.png';

        if (rollTheDice !== 1) {
            currentScore += rollTheDice;
            playerCurrent.innerText = currentScore;
        } else {
            nextPlayer();
        };
    };

});


/* HOLD BUTTON */
holdBtn.addEventListener('click', function() {

    if (gameIsNotOver) {
        scores[activePlayer] += currentScore;

        document.querySelector('#score-' + activePlayer).innerText = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).innerText = 'The Winner';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gameIsNotOver = false;
        } else {
            nextPlayer();
        };
    };

});


/* NEXT PLAYER FUNCTION */
function nextPlayer() {
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;

    document.querySelector('#current-0').innerText = 0;
    document.querySelector('#current-1').innerText = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};


/* NEW GAME BUTTON */
newBtn.addEventListener('click', init);

