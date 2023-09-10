import React, {useEffect, useState} from 'react';
import './App.css'
import GameBoard from "./components/GameBoard";
const App = () => {

    const initialState = new Array(9).fill(null);
    const [board, setBoard] = useState(initialState);
    const [isNextX, setIsNextX] = useState(true);
    const [winner, setWinner] = useState('');
    const [isDraw, setIsDraw] = useState(false);

    const toggle = isNextX ? 'X' : 'O'
    const playerMove = (index) => {
        if(board[index]=== null) {
        setBoard(board.map((item, ind) =>
        index === ind ? toggle : item
        ))
        setIsNextX(!isNextX)
        }
    }

    const gameReset = () => {
        setBoard(initialState)
        setWinner('')
        setIsNextX(true)
        setIsDraw(false)
    }

    const checkWinner = () => {
        const winningCombinations = [
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ]
        for(let i = 0; i< winningCombinations.length; i++){
            const [a, b, c] = winningCombinations[i]
            if(board[a]=== board[b] && board[b] === board[c] && board[a] !== null){
                setWinner(board[a])
                setIsDraw(false)
                return
            }
        }
        if(!board.includes(null)){
            setIsDraw(true)
        }
    }

    useEffect(() => {checkWinner()})

    const handleColor = (toggle) => {
        return toggle === 'O' ? 'red' : 'blue'; // Change the color here
    }

    return (
        <div className='App'>
            <h1>Tic Tac Toe app</h1>

            <GameBoard
                board={board}
                winner={winner}
                playerMove={playerMove}
                handleColor={handleColor}
                isDraw={isDraw}
            />
            <br/>
            <br/>
            <strong>{!winner && !isDraw && `The next move is for "${toggle}"`}</strong>
            <strong>{winner && `Congratulations! The "${winner}" is a winner!`}</strong>
            <strong>{isDraw && `it's a Draw`}</strong>
            <br/>
            <br/>
            <button onClick={() => gameReset()}>Restart the game</button>
        </div>
    );
};

export default App;