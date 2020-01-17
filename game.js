//Incializando variaveis

//Tabuleiro com as posiçoes vasias
let board = ['','','','','','','','',''];
// 0 Para jogador Bola e 1 para Jogador X
let playerTime = 0;
//Simbolos do game
let symbols = ['o','x'];
//Variavel do GameOver
let gameOver = false;

//Funçao que vai fazer a movimentação do jogo
function handleMove(position){
   
    //gameOver
    if(gameOver){
        return;
    }
    //garantindo que o tabuleiro esta vazio
    if(board[position] == ''){
        //pegando  a posiçao do tabuleiro e adicionando um symbolo
        board[position] = symbols[playerTime];
        //passando a vez pro proximo jogador 
        //verificando vencedor 
        gameOver = isWin();
        if (gameOver == false){
            if(playerTime==0){
                playerTime = 1;
            }else{
                playerTime = 0;
            }
       }
    }

   

    return gameOver;
}

function isWin(){
    let winStates =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    
    for(let i = 0; i < winStates.length;i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1]!= ''){
            return true;
        }
    }

    return false;

}

function clear(){
    //Tabuleiro com as posiçoes vasias
    let board = ['','','','','','','','',''];
    // 0 Para jogador Bola e 1 para Jogador X
    let playerTime = 0;
    //Variavel do GameOver
    let gameOver = false;
    
}