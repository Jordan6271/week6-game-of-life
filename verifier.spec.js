import {golTest} from './verifier';

// Rules of the Game of Life
// 1. Any live cell with fewer than two live neighbours dies as if by under population.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.

describe("game of life rules", () => {
    // Any live cell with fewer than two live neighbours dies as if by under population.
    it("should die with fewer than 2 live neighbours", () => {
        let before = [
            [0, 1, 0],
            [0, 1, 1],
            [1, 0, 1],
        ];
        let after =  [
            [0, 1, 1],
            [1, 0, 1],
            [0, 0, 1],
        ];
        const result = golTest(before);
        expect(result).toStrictEqual(after);
    })

    // Any live cell with more than three live neighbours dies, as if by overcrowding.
    it("should die with more than 3 live neighbours", () => {
        let before = [
            [0, 1, 1],
            [1, 1, 1],
            [1, 0, 0],
        ];
        let after = [
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 0],
        ];
        const result = golTest(before);
        expect(result).toStrictEqual(after);
    })

    // Isn't point 3 already tested by the prior 2 tests due to the fact it outputs an array?

    // Any dead cell with exactly three live neighbours becomes a live cell.
    it("should become a live cell if dead with exactly 3 neighbours", () => {
        let before = [
            [0, 1, 1],
            [1, 1, 1],
            [1, 0, 1],
        ];
        let after = [
            [1, 0, 1],
            [1, 0, 0],
            [1, 0, 1],
        ];
        const result = golTest(before);
        expect(result).toStrictEqual(after);
    })
})