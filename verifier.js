function isAlive(cell, neighbours) {
    if (neighbours === 3 || cell === 1 && neighbours === 2) {
        return 1;
    } else {
        return 0;
    }
}

function generateGrid(root) {
    return new Array(root * root).fill(0)
}
//console.log(generateGrid(5))

function neighbourCount(cells, index) {
    const width = Math.sqrt(cells.length);
    const result =
        (cells[index - 1] || 0) +
        (cells[index + 1] || 0) +
        (cells[index - width] || 0) +
        (cells[index - width - 1] || 0) +
        (cells[index - width + 1] || 0) +
        (cells[index + width] || 0) +
        (cells[index + width + 1] || 0) +
        (cells[index + width - 1] || 0);
    return result;
}

// function counting(cells,index) {
//     const width = Math.sqrt(cells.length);
//     for(i=0; i < cells.length; i++) {
//         const result = 
//         (cells[index + width + i] || 0) + (cells[index + width - i] || 0) + (cells[index - width + i] || 0) + (cells[index - width - i] || 0)
//         return result
//     }
// } 

//console.log(counting([1, 1, 1, 0, 0, 0, 0, 0, 0], 4))
    //console.log(neighbourCount([1, 1, 1, 0, 0, 0, 0, 0, 0], 4))

    function liveDie(cellState) {
        return cellState.map(cell => isAlive(cell, 0));

    }
    //console.log(liveDie([1, 1, 1, 0]))

// export { isAlive }
// export { generateGrid }
// export { liveDie }
// export {neighbourCount}

// function neighbourCount(neighbour) {
//     if (neighbour < 2) {
//         return "dead";
//     } else {
//         return "alive";
//     }
// }
// function neighbourCount(num) {
//     let count = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] === 1) {
//             count++
//         }
//     } if (count < 2) {
//         return 'dead';
//     } else {
//         return 'alive';
//     }
// }




//export { neighbourCount }




// function golTest(input) {
//     const resolution = 3;
//     function getNeighbourCount (x, y) {
//         let count = 0;
//         for (let j = -1; j < 2; j++) {
//             for (let i = -1; i < 2; i++) {
//                 if (i === 0 && j === 0 || x + i < 0 || x + i > resolution - 1 || y + j < 0 || y + j > resolution - 1) continue;
//                 if (input[x + i][y + j] === 1) count ++;
//             }
//         }
//         return count;
//     }

//     function step() {
//         let newArr = [
//             [1, 1, 1],
//             [1, 1, 1],
//             [1, 1, 1],
//         ];
//         for (let y = 0; y < resolution; y++) {
//             for (let x = 0; x < resolution; x++) {
//                 const neighbours = getNeighbourCount(x, y);
//                 if (input[x][y] == 1 && neighbours < 2 || input[x][y] == 1 && neighbours > 3) newArr[x][y] = 0;
//                 if (input[x][y] == 0) newArr[x][y] = 0;
//             }
//         }
//         return newArr
//     }
//         return step();
// }

// export {golTest};