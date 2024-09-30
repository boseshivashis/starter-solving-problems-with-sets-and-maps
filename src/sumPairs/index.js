/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {

//     inputs: an array of numbers named A
//         a target value named N

// initialize a new Map named numbers
// initialize a new Map named solution

// for each element e in A do:
//    add e to numbers

// for each element e in A do;
//   calculate diff = N - e
//   if diff is not equal to e then  (1)
//      look up diff in numbers
//      if diff is in numbers then
//        add [e, diff] to solution (2)

// convert solution to an array and return it

    if(A && A.length === 0) {
        return [];
    }

    let numbers = new Map();
    let solution = new Map();

    A.forEach( (number) => {numbers.set(number, 0)});

    A.forEach( (number) => {
        let diff = N - number;
        if( diff !== number) {
            //const pairKey = [Math.min(number, diff), Math.max(number, diff)].toString();

            if(numbers.has(diff) && !solution.has(diff)) {
                solution.set(number, diff);
            }
        }
    });
    
    return [...solution];
}

module.exports = sumPairs;
