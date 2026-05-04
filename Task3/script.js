let turn = "X";
let gameOver = false;

function play(box) {
    if (box.innerText == "" && gameOver == false) {
        box.innerText = turn;
        checkWin();
        turn = turn == "X" ? "O" : "X";
    }
}

function checkWin() {
    let boxes = document.getElementsByClassName("box");

    let win = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (let i = 0; i < win.length; i++) {
        let a = boxes[win[i][0]].innerText;
        let b = boxes[win[i][1]].innerText;
        let c = boxes[win[i][2]].innerText;

        if (a != "" && a == b && b == c) {
            document.getElementById("result").innerText = a + " Wins";
            gameOver = true;
        }
    }
}

function resetGame() {
    let boxes = document.getElementsByClassName("box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }

    turn = "X";
    gameOver = false;
    document.getElementById("result").innerText = "";
}