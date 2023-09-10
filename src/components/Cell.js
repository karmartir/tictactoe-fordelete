import React from 'react';

const Cell = ({item, index, winner, isDraw, playerMove, handleColor}) => {

    const backgroundColor = isDraw ? '#ffffff' : (winner ? '#eeddb9' : '#aee1ee')
    const celStyle = {
        border: '2px solid #2a1f77',
        margin: 'auto',
        borderRadius: '5px',
        height: '100px',
        width: '100px',
        fontSize: '4em',
        fontWeight: '1000',
        color:  handleColor(item),
        padding: 'auto',
        background: backgroundColor,
        cursor: 'pointer'
    }
    return (
        <button  disabled={winner} onClick={() => playerMove(index)} style={celStyle}>
            {item}
        </button>
    );
};

export default Cell;