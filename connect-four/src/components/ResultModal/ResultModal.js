import React from 'react'; 
import './ResultModal.css'; 
import classNames from 'classnames'; 

export const ResultModal = (props) => {
    const resultModalClasses = classNames({
        'modal-open': props.isGameOver
    }); 

    //TODO update for Red / Black
    const message = props.winner ? `The winner is ${props.winner}` : 'It is a tie'; 

    return(
        <div id="modal-overlay" className={resultModalClasses}>
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span>{message}</span>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button"
                onClick={props.onNewGameClicked}>Start New Game</button>
            </div>
        </div>
      </div>
  )
}