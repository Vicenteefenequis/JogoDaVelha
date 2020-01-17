document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick);
    })

})

function handleClick(event){
    let square = event.target;
    // evento que foi clicando
    let position = square.id;
  

    if(handleMove(position)){


        setTimeout(()=>{
            alert("O Jogo Acabou O Vecendor Foi "+playerTime);
        }, 10);
    }
  
    updateSquares();
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];


        if (symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }

    })
}

function reset() { 
    window.location.reload()
}