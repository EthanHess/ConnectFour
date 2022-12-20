// TT Combo

// 0 1 2
// 3 4 5
// 6 7 8

const winningMatrix = {
    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[2,6],[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[6,7],[2,5],[0,4]]
};

//Combo map 

// 0  1  2  3  4  5  6
// 7  8  9  10 11 12 13
// 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27
// 28 29 30 31 32 33 34 
// 35 36 37 38 39 40 41

//NOTE: Above is from Tic Tac Toe, below is for Connect Four, follow same logic (NOTE: May want to check order)
const winningGameCombos = {
    0: [[1,2,3],[7,14,21],[8,16,24]],
    1: [[0,2,3],[2,3,4],[8,15,22],[9,17,25]],
    2: [[1,3,4],[3,4,5],[9,16,23],[10,18,26]], 
    3: [[1,2,4],[2,4,5],[4,5,6],[10,17,24],[11,19,27],[9,15,21]], 
    4: [[1,2,3],[2,3,5],[3,5,6],[11,18,25],[10,16,22]], 
    5: [[3,4,6],[11,17,23],[12,19,26]],
    6: [[3,4,5],[12,18,24],[13,20,27]], //MARK: End first row
    7: [[8,9,10],[0,14,21],[14,21,28],[15,23,31]], 
    8: [[7,9,10],[9,10,11],[1,15,22],[0,16,24],[15,22,29],[16,24,32]], 
    9: [[7,8,10],[8,10,11],[10,11,12],[1,17,25],[2,16,23],[3,15,21],[16,23,30],[17,25,33]], 
    10: [[7,8,9],[8,9,11],[9,11,12],[11,12,13],[2,18,26],[3,17,24],[4,16,22],[17,24,31],[18,26,34],[16,22,28]], 
    11: [[8,0,10],[9,10,12],[10,12,13],[3,19,27],[4,18,25],[5,17,23],[18,25,32],[17,23,29]],
    12: [[9,10,11],[10,11,13],[5,19,26],[6,18,24],[19,26,33],[18,24,30]],
    13: [[10,11,12],[6,20,27],[19,25,31],[20,27,34]], //MARK: End second row
    14: [[0,7,21],[7,21,28],[21,28,35],[22,30,38],[15,16,17]], 
    15: [[1,8,22],[14,16,17],[7,23,31],[16,17,18],[23,31,39],[22,29,36],[8,22,29]], 
    16: [[0,8,24],[8,24,32],[24,32,40],[23,30,37],[9,23,30],[2,9,23],[10,22,28],[14,15,17],[15,17,18],[17,18,19]], 
    17: [[14,15,16],[15,16,18],[16,18,19],[18,19,20],[3,10,24],[10,24,31],[24,31,38],[1,9,25],[9,25,33],[25,33,41],[23,29,35],[11,23,29],[5,11,23]],
    18: [[15,16,17],[16,17,19],[17,19,20],[2,10,26],[10,26,34],[4,11,25],[11,25,32],[25,32,39],[6,12,24],[12,24,30],[24,30,36]], 
    19: [[3,11,27],[13,25,31],[25,31,37],[5,12,26],[12,26,33],[26,33,40],[16,17,18],[17,18,20]], 
    20: [[6,13,27],[13,27,34],[27,34,41],[26,32,28]], //MARK: End third row
    21: [[0,7,14],[7,14,28],[22,23,24],[15,9,3],[14,28,35]],
    22: [[21,23,24],[23,24,25],[14,30,38],[28,16,10],[16,10,4],[1,8,15],[8,15,29],[15,29,36]],
    23: [[21,22,24],[22,24,25],[24,25,26],[2,9,16],[9,16,30],[16,30,37],[7,15,31],[15,31,39],[35,29,17],[29,17,11],[17,11,5]], 
    24: [[21,22,23],[22,23,25],[25,26,37],[3,10,17],[10,17,31],[17,31,38],[0,8,16],[8,16,32],[16,32,40],[36,30,18],[30,18,12],[18,12,6]], 
    25: [[22,23,24],[23,24,26],[24,26,27],[4,11,18],[11,18,32],[18,32,29],[37,31,19],[31,19,13],[1,9,17],[9,17,33],[17,33,41]], 
    26: [[24,25,27],[23,24,25],[5,12,19],[12,19,33],[19,33,40],[38,32,20],[2,10,18],[10,18,34]],
    27: [[24,25,26],[6,13,20],[13,20,34],[20,34,41],[3,11,19]], //MARK: End fourth row
    28: [[7,14,21],[14,21,35],[29,30,31],[22,16,10]],
    29: [[28,30,31],[30,31,32],[8,15,22],[15,22,36]], 
    30: [[28,29,31],[29,31,32],[31,32,33],[14,22,38],[36,24,18],[24,18,12]], 
    31: [[28,29,30],[29,30,32],[30,32,33],[32,33,34],[17,24,38],[7,15,23],[15,23,39],[37,25,19],[25,19,13],[10,17,24]], 
    32: [[29,30,31],[20,31,33],[31,33,34],[18,25,32],[16,24,40],[8,16,24],[11,18,25],[38,26,20]],
    33: [[30,31,32],[31,32,34],[9,17,25],[17,25,41],[12,19,26],[19,26,40]],
    34: [[13,20,27],[20,27,41],[31,32,33],[10,18,26]], //MARK: End fifth row
    35: [[14,21,28],[36,37,38],[29,23,17]], 
    36: [[15,22,29],[35,37,38],[37,38,39],[30,24,18]], 
    37: [[35,36,38],[38,39,40],[16,23,30],[31,25,19]], 
    38: [[35,36,37],[36,37,39],[37,39,40],[14,22,30],[32,26,20],[18,25,32]],
    39: [[36,37,38],[37,38,40],[38,40,41],[18,25,32],[15,23,31]], 
    40: [[38,39,41],[19,26,33],[16,24,32]], 
    41: [[20,27,34],[38,39,40],[17,25,33]], //MARK: End sixth row
};

//Tic Tac Toe example
export const calculateWinner = (cellValues, numberOfTurnsLeft, cellIndex) => {
    const winningRanges = winningMatrix[cellIndex]; 

    for (let i = 0; i < winningRanges.length; i++) {
        const currentValue = cellValues[cellIndex]; 
        const firstOption = cellValues[winningRanges[i][0]]; 
        const secondOption = cellValues[winningRanges[i][1]]; 

        if (currentValue === firstOption && firstOption === secondOption) {
            return {
                hasResult: true, 
                winner: currentValue, 
                winningCombination: [cellIndex, winningRanges[i][0], winningRanges[i][1]]
            }; 
        }
    }

    if (numberOfTurnsLeft === 0) {
        return {
            hasResult: true, 
            winner: undefined, 
            winningCombination: []
        }; 
    }

    return {
        hasResult: false, 
        winner: undefined, 
        winningCombination: []
    }; 
}

//Connect Four
export const connectFourWinner = (cellValues, numberOfTurnsLeft, cellIndex) => {
    const winningRanges = winningGameCombos[cellIndex]; 

    for (let i = 0; i < winningRanges.length; i++) {
        const currentValue = cellValues[cellIndex]; 
        const firstOption = cellValues[winningRanges[i][0]]; 
        const secondOption = cellValues[winningRanges[i][1]]; 
        const thirdOption = cellValues[winningRanges[i][2]];

        //All red or black
        if (currentValue === firstOption && firstOption === secondOption && secondOption === thirdOption) {
            return {
                hasResult: true, 
                winner: currentValue, 
                winningCombination: [cellIndex, winningRanges[i][0], winningRanges[i][1], winningRanges[i][2]]
            }; 
        }
    }

    if (numberOfTurnsLeft === 0) {
        return {
            hasResult: true, 
            winner: undefined, 
            winningCombination: []
        }; 
    }

    return {
        hasResult: false, 
        winner: undefined, 
        winningCombination: []
    }; 
}