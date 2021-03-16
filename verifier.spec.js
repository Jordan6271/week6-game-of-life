
import { isAlive, generateGrid, liveDie, neighbourCount} from './verifier';

// Rules of the Game of Life
// 1. Any live cell with fewer than two live neighbours dies as if by under population.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.

describe('Game of life rules', () => {
    describe('isAlive', () => {
        it('is dead without neighbours', () => {
            expect(isAlive(0, 0)).toEqual(0);
        })
        it('is dead and has 3 live neighbours should live(1)', () => {
            expect(isAlive(0, 3)).toEqual(1)
        })
        it('live cell with 0 neighbours dies(0)', () => {
            expect(isAlive(1, 0)).toEqual(0)

        })
        it('live cell with 2 neighbours lives (1)', () => {
            expect(isAlive(1, 2)).toEqual(1)
        })
    })
    describe('grid', () => {
        it('Should generate an array of input * input', () => {
            expect(generateGrid(1)).toEqual([0]);
            expect(generateGrid(2)).toEqual([0, 0, 0, 0])
        })
    })
    ///for below width is determined by square root of length of array - i.e. an array of 4 numbers sqrt = 2 (2x2 grid) :
    //[1,1]
    //[1,0]
    describe('neighbour count', () => {
        it('should count 1 for an array of one', () => {
            expect(neighbourCount([1], 0)).toEqual(0);
        })
        it('should count 2 neighbours', () => {
            expect(neighbourCount([1,1,1,0],0)).toEqual(2)
           
        })
        it('should count 2 neighbours', () => {
            expect(neighbourCount([1,1,1,0],1)).toEqual(2)
        })
        it('should count 2 neighbours', () => {
            expect(neighbourCount([1,1,1,0],2)).toEqual(2)
        })
        it('should count 3 neighbours', () => {
            expect(neighbourCount([1,1,1,0],3)).toEqual(3)
        })
        it('should count 3 neighbours', () => {
            expect(neighbourCount([1,1,1,0,0,0,0,0,0],4)).toEqual(3)
            //[1,1,1]
            //[0,0,0]
            //[0,0,0]
        })
    })

    describe('live/die', () => {
        it('does not update dead (0) cells', () => {
            const cellState = generateGrid(1);
            expect(liveDie(cellState)).toEqual(cellState)
        })
        it('returns all dead cells', () => {
            const initialCellState = generateGrid(2);
            const cellState = generateGrid(2);
            cellState[0] = 1;
            expect(liveDie(cellState)).toEqual(initialCellState)
        })
        xit('should return all live cells(1)', () => {
            const cellState = [1,1,1,0];
            expect(liveDie(cellState)).toEqual([1,1,1,1])
        })
    })

})
//     it('any cell with less than two live neighbours dies', () => {
//         let cellState = [[0,1,1,1]]
//         const cellArray = neighbourCount(cellState);
//         expect(cellArray).toBe('alive');

//     })
// })


// describe("game of life rules", () => {
//     // Any live cell with fewer than two live neighbours dies as if by under population.
//     it("should die with fewer than 2 live neighbours", () => {
//         let before = [
//             [0, 1, 0],
//             [0, 1, 1],
//             [1, 0, 1],
//         ];
//         let after =  [
//             [0, 1, 0],
//             [0, 1, 1],
//             [0, 0, 1],
//         ];
//         const result = golTest(before);
//         expect(result).toStrictEqual(after);
//     })

//     // Any live cell with more than three live neighbours dies, as if by overcrowding.
//     it("should die with more than 3 live neighbours", () => {
//         let before = [
//             [0, 1, 1],
//             [1, 1, 1],
//             [1, 0, 0],
//         ];
//         let after = [
//             [1, 0, 1],
//             [1, 0, 1],
//             [1, 0, 0],
//         ];
//         const result = golTest(before);
//         expect(result).toStrictEqual(after);
//     })

//     // Isn't point 3 already tested by the prior 2 tests due to the fact it outputs an array?

//     // Any dead cell with exactly three live neighbours becomes a live cell.
//     it("should become a live cell if dead with exactly 3 neighbours", () => {
//         let before = [
//             [0, 1, 1],
//             [1, 1, 1],
//             [1, 0, 1],
//         ];
//         let after = [
//             [1, 0, 1],
//             [1, 0, 0],
//             [1, 0, 1],
//         ];
//         const result = golTest(before);
//         expect(result).toStrictEqual(after);
//     })
// })