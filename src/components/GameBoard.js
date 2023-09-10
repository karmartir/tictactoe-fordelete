import React from 'react';
import Cell from "./Cell";


const GameBoard = ({board, winner, playerMove, handleColor}) => {

    const gameBoardStyle = {
        border: '2px solid #2a1f77',
        borderRadius: '5px',
        height: '300px',
        width: '300px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    }


    return (
        <div style={gameBoardStyle}>
            {board.map((item, index) =>
                <Cell key={index}
                      item={item}
                      index={index}
                      winner={winner}
                      playerMove={playerMove}
                      handleColor={handleColor}

                />)}
        </div>
    );
};

export default GameBoard;