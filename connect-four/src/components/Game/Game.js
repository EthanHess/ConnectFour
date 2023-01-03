import React, { useState, useEffect } from 'react'; //Hook = can use state w/o writing class
import './Game.css'; 
import { Board } from '../Board/Board'; 
import { ResultModal } from '../ResultModal/ResultModal'; 
import { calculateWinner, connectFourWinner } from '../../utils/WinnerCalculator.js'; 


export const Game = () => {

    //Connect four has 6 rows and 7 columns, 42 spaces in total
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']); 
    const [xIsNext, setXIsNext] = useState(true); 
    const [isGameOver, setIsGameOver] = useState(false); 
    const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(42); 
    const [winner, setWinner] = useState(); 
    const [winningCombination, setWinningCombination] = useState([]);

    var [curRowFirstCount, setCurRowFirstCount] = useState(0)
    var [curRowSecondCount, setCurRowSecondCount] = useState(0)
    var [curRowThirdCount, setCurRowThirdCount] = useState(0)
    var [curRowFourthCount, setCurRowFourthCount] = useState(0)
    var [curRowFifthCount, setCurRowFifthCount] = useState(0)
    var [curRowSixthCount, setCurRowSixthCount] = useState(0)
    var [curRowSeventhCount, setCurRowSeventhCount] = useState(0)
    var [cellsToAnimate, setCellsToAnimate] = useState([])

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === ''

    const restartGame = () => {
      //TODO update to 42
      setCellValues(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']); 
      setXIsNext(true);
      setIsGameOver(false); 
      setNumberOfTurnsLeft(42); 
      setWinner(); 
      setWinningCombination([]); 

      setCurRowFirstCount(0)
      setCurRowSecondCount(0)
      setCurRowThirdCount(0)
      setCurRowFourthCount(0)
      setCurRowFifthCount(0)        
      setCurRowSixthCount(0)
      setCurRowSeventhCount(0)
      setCellsToAnimate([])
    }

    //NOTE: since in connect four pieces fall to the bottom, will need to grab the lowest available index of current column,

    //35 - 41 = first row bottom, will also need to check storage
    //28-34 is next row up and so on

    const onCellClicked = (cellIndex) => {
      console.log('cell index', cellIndex); 
      //New Array because in React, state only updates if the value you're setting points to a different location in memory
      if (isCellEmpty(cellIndex)) {
        //First row test for making coin fall to bottom
        //Would be more efficient to check here to see if it's already on the correct index, therefore no need to compute
        const lowestIndex = lowestPossibleIndex(cellIndex)
        console.log('lowest index -- cell index', lowestIndex, cellIndex)

        const toAnimate = indicesToAnimate(lowestIndex)
        setCellsToAnimate(toAnimate)
        console.log('toAnimate', toAnimate)

        setTimeout(() => {
            setCellsToAnimate([])
        }, 1000)

        //NOTE: Replaced "cellIndex" with "lowestIndex" for reference
        const newCellValues = [...cellValues]; 
        newCellValues[lowestIndex] = xIsNext ? 'X' : 'O'; //X is Red

        const newNumberOfTurnsLeft = numberOfTurnsLeft - 1; 
        //Calc result
        //const calcResult = calculateWinner(newCellValues, newNumberOfTurnsLeft, cellIndex); 

        const calcResultCF = connectFourWinner(newCellValues, newNumberOfTurnsLeft, lowestIndex); 
      
        setCellValues(newCellValues); 
        setXIsNext(!xIsNext);
        setIsGameOver(calcResultCF.hasResult); 
        setNumberOfTurnsLeft(newNumberOfTurnsLeft); 
        setWinner(calcResultCF.winner); 
        setWinningCombination(calculateWinner.winningCombination); 
      }
    }

    const lowestPossibleIndex = (index) => {
          //First column (vertical)
      if (index === 0 || index === 7 || index === 14 || index === 21 || index === 28 || index === 35) {
        switch(curRowFirstCount) {
            case 0: 
                setCurRowFirstCount(curRowFirstCount += 1)
                return 35; 
            case 1: 
                setCurRowFirstCount(curRowFirstCount += 1)
                return 28; 
            case 2: 
                setCurRowFirstCount(curRowFirstCount += 1)
                return 21; 
            case 3: 
                setCurRowFirstCount(curRowFirstCount += 1)
                return 14; 
            case 4: 
                setCurRowFirstCount(curRowFirstCount += 1)
                return 7; 
            case 5: 
                setCurRowFirstCount(curRowFirstCount += 1)
                return 0; 
        }
    }

    //Second column
    if (index === 1 || index === 8 || index === 15 || index === 22 || index === 29 || index === 36) {
      switch(curRowSecondCount) {
        case 0: 
            setCurRowSecondCount(curRowSecondCount += 1)
            return 36; 
        case 1: 
            setCurRowSecondCount(curRowSecondCount += 1)
            return 29; 
        case 2: 
            setCurRowSecondCount(curRowSecondCount += 1)
            return 22; 
        case 3: 
            setCurRowSecondCount(curRowSecondCount += 1)
            return 15; 
        case 4: 
            setCurRowSecondCount(curRowSecondCount += 1)
            return 8; 
        case 5: 
            setCurRowSecondCount(curRowSecondCount += 1)
            return 1; 
      }
    }

    //Third column 
    if (index === 2 || index === 9 || index === 16 || index === 23 || index === 30 || index === 37) {
      switch(curRowThirdCount) {
        case 0: 
            setCurRowThirdCount(curRowThirdCount += 1)
            return 37; 
        case 1: 
            setCurRowThirdCount(curRowThirdCount += 1)
            return 30; 
        case 2: 
            setCurRowThirdCount(curRowThirdCount += 1)
            return 23; 
        case 3: 
            setCurRowThirdCount(curRowThirdCount += 1)
            return 16; 
        case 4: 
            setCurRowThirdCount(curRowThirdCount += 1)
            return 9; 
        case 5: 
            setCurRowThirdCount(curRowThirdCount += 1)
            return 2; 
      }
    }

    //Fourth column 
    if (index === 3 || index === 10 || index === 17 || index === 24 || index === 31 || index === 38) {
      switch(curRowFourthCount) {
        case 0: 
            setCurRowFourthCount(curRowFourthCount += 1)
            return 38; 
        case 1: 
            setCurRowFourthCount(curRowFourthCount += 1)
            return 31; 
        case 2: 
            setCurRowFourthCount(curRowFourthCount += 1)
            return 24; 
        case 3: 
            setCurRowFourthCount(curRowFourthCount += 1)
            return 17; 
        case 4: 
            setCurRowFourthCount(curRowFourthCount += 1)
            return 10; 
        case 5: 
            setCurRowFourthCount(curRowFourthCount += 1)
            return 3; 
      }
    }

    //Fifth column
    if (index === 4 || index === 11 || index === 18 || index === 25 || index === 32 || index === 39) {
      switch(curRowFifthCount) {
        case 0: 
            setCurRowFifthCount(curRowFifthCount += 1)
            return 39; 
        case 1: 
            setCurRowFifthCount(curRowFifthCount += 1)
            return 32; 
        case 2: 
            setCurRowFifthCount(curRowFifthCount += 1)
            return 25; 
        case 3: 
            setCurRowFifthCount(curRowFifthCount += 1)
            return 18; 
        case 4: 
            setCurRowFifthCount(curRowFifthCount += 1)
            return 11; 
        case 5: 
            setCurRowFifthCount(curRowFifthCount += 1)
            return 4; 
      }
    }

    //Sixth column 
    if (index === 5 || index === 12 || index === 19 || index === 26 || index === 33 || index === 40) {
      switch(curRowSixthCount) {
        case 0: 
            setCurRowSixthCount(curRowSixthCount += 1)
            return 40; 
        case 1: 
            setCurRowSixthCount(curRowSixthCount += 1)
            return 33; 
        case 2: 
            setCurRowSixthCount(curRowSixthCount += 1)
            return 26; 
        case 3: 
            setCurRowSixthCount(curRowSixthCount += 1)
            return 19; 
        case 4: 
            setCurRowSixthCount(curRowSixthCount += 1)
            return 12; 
        case 5: 
            setCurRowSixthCount(curRowSixthCount += 1)
            return 5; 
      }
    }

    //Seventh column 
    if (index === 6 || index === 13 || index === 20 || index === 27 || index === 34 || index === 41) {
      switch(curRowSeventhCount) {
        case 0: 
            setCurRowSeventhCount(curRowSeventhCount += 1)
            return 41; 
        case 1: 
            setCurRowSeventhCount(curRowSeventhCount += 1)
            return 34; 
        case 2: 
            setCurRowSeventhCount(curRowSeventhCount += 1)
            return 27; 
        case 3: 
            setCurRowSeventhCount(curRowSeventhCount += 1)
            return 20; 
        case 4: 
            setCurRowSeventhCount(curRowSeventhCount += 1)
            return 13; 
        case 5: 
            setCurRowSeventhCount(curRowSeventhCount += 1)
            return 6; 
      }
    }
  }

  const indicesToAnimate = (lowestIndex) => {
    console.log('lowestIndex func', lowestIndex)

    //Top / second to top row, do nothing
    if (lowestIndex === 0) { return [] }
    if (lowestIndex === 1) { return [] }
    if (lowestIndex === 2) { return [] }
    if (lowestIndex === 3) { return [] }
    if (lowestIndex === 4) { return [] }
    if (lowestIndex === 5) { return [] }
    if (lowestIndex === 6) { return [] }

    //First row test, then do others
    const indicesHash = { 7: [0], 
                         14: [7, 0], 
                         21: [14, 7, 0], 
                         28: [21, 14, 7, 0], 
                         35: [28, 21, 14, 7, 0], 
                         8:  [1], 
                         15: [8, 1], 
                         22: [15, 8, 1], 
                         29: [22, 15, 8, 1], 
                         36: [29, 22, 15, 8, 1],
                         9:  [2], 
                         16: [9, 2], 
                         23: [16, 9, 2], 
                         30: [23, 16, 9, 2], 
                         37: [30, 23, 16, 9, 2],
                         10: [3], 
                         17: [10, 3], 
                         24: [17, 10, 3], 
                         31: [24, 17, 10, 3], 
                         38: [31, 24, 17, 10, 3],
                         11: [4], 
                         18: [11, 4], 
                         25: [18, 11, 4], 
                         32: [25, 18, 11, 4], 
                         39: [32, 25, 18, 11, 4],
                         12: [5], 
                         19: [12, 5], 
                         26: [19, 12, 5], 
                         33: [26, 19, 12, 5], 
                         40: [33, 26, 19, 12, 5],
                         13: [6], 
                         20: [13, 6], 
                         27: [20, 13, 6], 
                         34: [27, 20, 13, 6], 
                         41: [34, 27, 20, 13, 6],}

    console.log('indicesHash[lowestIndex]', indicesHash[lowestIndex])

    return indicesHash[lowestIndex]
  }

  return(
    <>
    <div id="game">
      <h1>Connect Four</h1>
      <Board 
        cellsToAnimate={cellsToAnimate}
        cellValues={cellValues}
        winningCombination={winningCombination}
        cellClicked={onCellClicked}/> 
    </div>
      <ResultModal 
        isGameOver={isGameOver}
        winner={winner}
        onNewGameClicked={restartGame} />
    </>
  )
}