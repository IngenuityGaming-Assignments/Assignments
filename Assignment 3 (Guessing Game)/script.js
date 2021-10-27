window.onkeypress = function(e){
    if(e.keyCode === 13){
        check();
        return
    }
}

const sb = document.getElementById('submit-btn');
const sta = document.getElementById('startover-btn');
sta.onclick = function(){
    location.reload();
}

const hint = document.getElementById('hint-btn');
const msg = document.getElementById('helper-text');
const inpu = document.getElementById('number-input');

const guess = document.getElementById('guesses-remaining');
const prev_guess = document.getElementById('prev-guesses');

const ran = Math.abs(Math.floor(Math.random()*100));
console.log(ran)

var hint_left = false;
hint.onclick = function(){
    if(!hint_left){
        const ran2 = ran - Math.ceil(Math.random()*10)
        const ran3 = Math.ceil(Math.random()*10)

        if(ran == 1){
            ran2 = 0;
        }
        else if(ran2 < 1){
            ran2 = 1
        }
        alert('Number is between ' + (ran2) + " - " + (ran + ran3));
        hint_left = true;
    }
    else{
        alert('No Hint Left');
    }
}
        
async function check(e){
    const inp = parseInt(inpu.value)

    if(!Number.isInteger(inp)){
        alert('Enter a number');
        inpu.value = "";
        return
    }

    if(inp < (ran + 10) && inp > ran){
        msg.innerText = "Try little lower"
    }
    else if((ran - 10) < inp && inp < ran){
        msg.innerText = "Try little higher"
    }
    else if(inp > 100 || inp < 0){
        msg.innerText = "Enter a guess from 0 - 100"
    }
    else if(inp > ran){
        msg.innerText = "Make lower guess"
    }
    else{
        msg.innerText = "Make higher guess"
    }

    if(inp === ran){
        alert('Congrats! You won')
        location.reload()
    }
    else if(parseInt(guess.innerText) === 1){
        location.reload()
    }

    if(prev_guess.innerText === ''){
        prev_guess.innerText = 'Your previous guesses are : ' + inp
    }
    else{
        prev_guess.innerText = prev_guess.innerText + ", " + inp 
    }
    inpu.value = ""
    guess.innerText = parseInt(guess.innerText) - 1;
}