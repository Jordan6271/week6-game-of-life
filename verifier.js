const resolution = 3;
function getNeighbourCount(x, y, input) {
    let count = 0;
    for (let j = -1; j < 2; j++) {
        for (let i = -1; i < 2; i++) {
            if (
                (i === 0 && j === 0) ||
                x + i < 0 ||
                x + i > resolution - 1 ||
                y + j < 0 ||
                y + j > resolution - 1
            )
                continue;
            if (input[x + i][y + j] === 1) count++;
        }
    }
    return count;
}

function firstRule(input) {
    let newArr = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const neighbours = getNeighbourCount(x, y, input);
            if (input[x][y] == 1 && neighbours < 2) newArr[x][y] = 0;
            if (input[x][y] == 0) newArr[x][y] = 0;
        }
    }
    return newArr;
}

function secondRule(input) {
    let newArr = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const neighbours = getNeighbourCount(x, y, input);
            if (input[x][y] == 1 && neighbours > 3) newArr[x][y] = 0;
            if (input[x][y] == 0) newArr[x][y] = 0;
        }
    }
    return newArr;
}

function thirdRule(input) {
    let newArr = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const neighbours = getNeighbourCount(x, y, input);
            if (
                (input[x][y] == 1 && neighbours < 2) ||
                (input[x][y] == 1 && neighbours > 3)
            )
                newArr[x][y] = 0;
            if (input[x][y] == 0) newArr[x][y] = 0;
        }
    }
    return newArr;
}

function fourthRule(input) {
    let newArr = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const neighbours = getNeighbourCount(x, y, input);
            if (input[x][y] == 0 && neighbours !== 3) newArr[x][y] = 0;
        }
    }
    return newArr;
}

function fullRules(input) {
    let newArr = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const neighbours = getNeighbourCount(x, y, input);
            if (
                (input[x][y] == 1 && neighbours < 2) ||
                (input[x][y] == 1 && neighbours > 3)
            )
                newArr[x][y] = 0;
            if (input[x][y] == 0 && neighbours !== 3) newArr[x][y] = 0;
        }
    }
    return newArr;
}

export { firstRule, secondRule, thirdRule, fourthRule, fullRules };
