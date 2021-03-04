function golTest(input) {
    const resolution = 3;
    function getNeighbourCount (x, y) {
        let count = 0;
        for (let yy = -1; yy < 2; yy++) {
            for (let xx = -1; xx < 2; xx++) {
                if (xx === 0 && yy === 0) continue;
                if (x + xx < 0 || x + xx > resolution - 1) continue;
                if (y + yy < 0 || y + yy > resolution - 1) continue;
                if (input[x + xx][y + yy] === 1) count ++;
            }
        }
        return count;
    }
    
    function step() {
        let newArr = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        for (let y = 0; y < resolution; y++) {
            for (let x = 0; x < resolution; x++) {
                const neighbours = getNeighbourCount(x, y);
                if (input[x][y] == 1 && neighbours < 2) newArr[x][y] = 0;
                if (input[x][y] == 0) newArr[x][y] = 0;
            }
        }
        return newArr
    }
        return step();




    // const neighbour = 0;
    // const msg = `you have ${neighbour} neighbours`;
    // if (neighbour < 2) {
    //     return input;
    // } else {
    //     return msg;
    // }        
}

export {golTest};