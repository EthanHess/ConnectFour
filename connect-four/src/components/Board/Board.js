import React from 'react'; 
import './Board.css'; 

import { Cell } from '../Cell/Cell'; 

export const Board = (props) => {
    const cells = props.cellValues.map((value, index) => {
    const canHighlight = props.winningCombination && props.winningCombination.indexOf(index) >= 0; 
    const toAnimate = props.cellsToAnimate; 

    return <Cell key={index} 
                 value={value}  
                 canHighlight={canHighlight == true || toAnimate.includes(index)}
                 onClick={()=> props.cellClicked(index)}/>
    }); 

    return(
      <div id="board">
          {cells}
      </div>
  )
}