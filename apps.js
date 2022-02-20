const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
var missed = 0;



// LISTEN FOR THE GAME TO BEGIN
startButton.addEventListener('click', () => {
    const overlay_start = document.getElementById('overlay');
    overlay_start.style.display = 'none';
});



// CREATE AN ARRAY
const phrases = [ 
    ['The sky is blue'],
    ['My tea is hot'],
    ['I love javascript'],
    ['I enjoy hikes']
];



// RETURN A RANDOM PHRASE FROM AN ARRAY
function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length)
    
    for (let i = randomNumber; i < randomNumber + 1; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            var myChar = (arr[i][j].split(''));
        }
    }
    return myChar;
}
const phraseArray = getRandomPhraseAsArray(phrases);



// ADDS THE LETTERS OF A STRING TO THE DISPLAY
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }  
    }
};
addPhraseToDisplay(phraseArray);



//CHECK IF A LETTER IS IN THE PHRASE
function checkLetter(button) {
    const li = document.getElementsByTagName('li')
    var match = null;
    for (let i = 0; i < li.length; i++) {
        if (button.textContent === li[i].textContent) {
            li[i].className += 'show';
            button.textContent = match;
            console.log(match);
        } else {
            console.log('not working');
        }
    }
    return match
};



// LISTEN TO THE KEYBOARD
qwerty.addEventListener('click', (e) => {
    
    if (e.target.tagName === 'BUTTON' && e.target.className != 'chosen') {
        var button = e.target;
        button.className = 'chosen';
        const letterFound = checkLetter(button);
    } else if (e.target.tagName === 'BUTTON' && e.target.className === 'chosen'){
        document.querySelector('img').remove();
        missed += 1;
    }
});



// CHECK IF WIN OR LOSE GAME
function checkWin() {
    if (li.className === 'letter') {
        isLetter.append(li);
    } else if (li.className === 'show'){
        isShow.append(li);
    };

    if (isShow.length === isLetter.length) {
        const overlay = document.getElementById(overlay);
        overlay.className += 'win';
        overlay.style.display = 'flex';
    } else if (missed > 4) {
        const overlay = document.getElementById(overlay);
        overlay.className += 'lose';
        overlay.h2.textContent = 'You Lose!';
        overlay.style.display = 'flex';
    }
};



