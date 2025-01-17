let player = 'O'
let gameStatus = true;
let count = 0;


function ResetGame() {
    window.location.reload()
}

function fun(id) {

    if (gameStatus == true) {

        if (document.getElementById(id).innerHTML == '') {
            if (player == 'X') {
                document.getElementById(id).innerHTML = 'X'
                count++;
                CheckWinner()
                CheckDraw()
                player = 'O'

            } else {
                document.getElementById(id).innerHTML = 'O'
                count++
                CheckWinner()
                CheckDraw()

                player = 'X'

            }

        }
        else {
            alert('Double click on a cell is not allowed')
        }

    }
    else {
        alert('Game is already over, Please Restart the Game')
    }

    if (gameStatus == true) {
        document.getElementById('player').innerHTML = player + "'s turn"
    }
    else {
        document.getElementById('player').innerHTML = ''
    }


}
function CheckWinner() {
    let c1 = document.getElementById('box1').innerHTML
    let c2 = document.getElementById('box2').innerHTML
    let c3 = document.getElementById('box3').innerHTML
    let c4 = document.getElementById('box4').innerHTML
    let c5 = document.getElementById('box5').innerHTML
    let c6 = document.getElementById('box6').innerHTML
    let c7 = document.getElementById('box7').innerHTML
    let c8 = document.getElementById('box8').innerHTML
    let c9 = document.getElementById('box9').innerHTML


    if (c1 == player && c2 == player && c3 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
    else if (c4 == player && c5 == player && c6 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
    else if (c7 == player && c8 == player && c9 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
    else if (c1 == player && c4 == player && c7 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
    else if (c2 == player && c5 == player && c8 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
    else if (c3 == player && c6 == player && c9 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
    else if (c1 == player && c5 == player && c9 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
    else if (c3 == player && c5 == player && c7 == player) {
        document.getElementById('result').innerHTML = player + " is the winner"
        gameStatus = false
    }
}

function CheckDraw() {

    if (count == 9 && gameStatus == true) {
        document.getElementById('result').innerHTML = "Game Drawn"
        gameStatus = false
        console.log("Game drawn")
    }
}