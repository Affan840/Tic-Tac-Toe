let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let xscore = document.querySelector(".xscore");
let oscore = document.querySelector(".oscore");
let count = 0, x = 0, o = 0;
let user = 1;
let patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (user == 1) {
            box.innerText = "X";
            user = 2;
        }
        else if (user == 2) {
            box.innerText = "O";
            user = 1;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count == 9 && !isWinner) {
            msg.innerText = "Game is Draw";
            msgContainer.classList.remove("hide");
            gameDraw();
        }
    })
})
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
    })
    count = 0;
};
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    user = 1;
    msgContainer.classList.add("hide");
    count = 0;
});
newGame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    user = 1;
    msgContainer.classList.add("hide");
});
const showWinner = (x) => {
    msg.innerText = `Winner is ${x}`;
    msgContainer.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
    })
    count = 0;
}
const checkWinner = () => {
    for (let pattern of patterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner is " + pos1);
                count = 0;
                showWinner(pos1);
                if (pos1 === "X") {
                    xscore.innerText = `X Score = ${++x}`;
                }
                else {
                    oscore.innerText = `O Score = ${++o}`;
                }
            }
        }
    }
}