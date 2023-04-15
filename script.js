let win = false;
let turn = "X";
function clickbox(b){
    if(win == false){
        if(b.innerHTML == ""){
            b.innerHTML = turn;
            checkWin();
            change();   
        }
    }
}
function change(){
    if(turn == "X"){
        turn = "O";
        document.getElementById('resetbtn').innerHTML = "Turn: O";  }else{
        turn = "X";
        document.getElementById('resetbtn').innerHTML = "Turn: X";

    }
}
function reset(){
let button = document.querySelectorAll("button");
button.innerHTML = "";
}

function checkWin(){
    let a0 = document.getElementById('0');
    let a1 = document.getElementById('1');
    let a2 = document.getElementById('2');
    let a3 = document.getElementById('3');
    let a4 = document.getElementById('4');
    let a5 = document.getElementById('5');
    let a6 = document.getElementById('6');
    let a7 = document.getElementById('7');
    let a8 = document.getElementById('8');

    if(a0.innerHTML == "X" && a1.innerHTML == "X" && a2.innerHTML == "X" || a3.innerHTML == "X" && a4.innerHTML == "X" && a5.innerHTML == "X" || a6.innerHTML == "X" && a7.innerHTML == "X" && a8.innerHTML == "X" || a0.innerHTML == "X" && a3.innerHTML == "X" && a6.innerHTML == "X" || a1.innerHTML == "X" && a4.innerHTML == "X" && a7.innerHTML == "X" || a2.innerHTML == "X" && a5.innerHTML == "X" && a8.innerHTML == "X" || a0.innerHTML == "X" && a4.innerHTML == "X" && a8.innerHTML == "X" || a2.innerHTML == "X" && a4.innerHTML == "X" && a6.innerHTML == "X"){
        printX();
    }
    if(a0.innerHTML == "O" && a1.innerHTML == "O" && a2.innerHTML == "O" || a3.innerHTML == "O" && a4.innerHTML == "O" && a5.innerHTML == "O" || a6.innerHTML == "O" && a7.innerHTML == "O" && a8.innerHTML == "O" || a0.innerHTML == "O" && a3.innerHTML == "O" && a6.innerHTML == "O" || a1.innerHTML == "O" && a4.innerHTML == "O" && a7.innerHTML == "O" || a2.innerHTML == "O" && a5.innerHTML == "O" && a8.innerHTML == "O" || a0.innerHTML == "O" && a4.innerHTML == "O" && a8.innerHTML == "O" || a2.innerHTML == "O" && a4.innerHTML == "O" && a6.innerHTML == "O"){
        printO();
    }
  
    function printX(){
        document.getElementById('result').innerHTML = "X &nbsp;is winner!";
        win = true;
    }
    function printO(){
        document.getElementById('result').innerHTML = "O &nbsp;is winner!";
        win = true;

    }
}