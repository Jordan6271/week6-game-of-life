import {golTest} from './verifier';

//Any live cell with fewer than two live neighbours dies as if by under population.
describe("queryOne", () => {
    it("should die with fewer than 2 live neighbours", () => {
        let before = [
            [0, 1, 0],
            [0, 1, 1],
            [1, 0, 0],
        ];
        let after =  [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ];
        const result = golTest(before);
        expect(result).toStrictEqual(after);
    })
})

// 1. Any live cell with fewer than two live neighbours dies as if by under population.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.