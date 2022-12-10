// MOVE [amount] FROM [start] TO [end]
// Amount: Slice of stack from top to bottom
// Start: Moving from
// End: Moving To
function parseDirections(input: string): string[][]{
  // Turns directions into array of subarrays, each with a triplet of values.
  return input.split('\n').map((string)=>{
    return string.replace('move','').replace('from','').replace('to','').trim().replace('\n','').split('  ')
  })
}
function supplyStacks(crates: crates , input: string): string{
  const arrayDirections = parseDirections(input)
  for(let i = 0; i <arrayDirections.length; i++){
    const AMOUNT = arrayDirections[i][0]
    const STARTSTACK = arrayDirections[i][1]
    const ENDSTACK = arrayDirections[i][2]
    const cratesToMove: string[] = crates[STARTSTACK].splice(-AMOUNT)
    crates[ENDSTACK] = crates[ENDSTACK].concat(cratesToMove)
  }
  return Object.values(crates).map((arr)=>{
    return arr.at(-1)
  }).join('')
}

//                         [Z] [W] [Z]
//         [D] [M]         [L] [P] [G]
//     [S] [N] [R]         [S] [F] [N]
//     [N] [J] [W]     [J] [F] [D] [F]
// [N] [H] [G] [J]     [H] [Q] [H] [P]
// [V] [J] [T] [F] [H] [Z] [R] [L] [M]
// [C] [M] [C] [D] [F] [T] [P] [S] [S]
// [S] [Z] [M] [T] [P] [C] [D] [C] [D]
//  1   2   3   4   5   6   7   8   9
interface crates {
  '1': string[]
  '2': string[]
  '3': string[]
  '4': string[]
  '5': string[]
  '6': string[]
  '7': string[]
  '8': string[]
  '9': string[]
}
const crates = {
  '1': ['S','C','V','N'],
  '2': ['Z','M','J','H','N','S'],
  '3': ['M','C','T','G','J','N','D'],
  '4': ['T','D','F','J','W','R','M'],
  '5': ['P','F','H'],
  '6': ['C','T','Z','H','J'],
  '7': ['D','P','R','Q','F','S','L','Z'],
  '8': ['C','S','L','H','D','F','P','W'],
  '9': ['D','S','M','P','F','N','G','Z'],
}

const directions = `move 3 from 9 to 6
move 7 from 6 to 2
move 1 from 1 to 5
move 7 from 7 to 1
move 3 from 9 to 7
move 1 from 9 to 1
move 1 from 7 to 2
move 11 from 1 to 8
move 9 from 8 to 2
move 1 from 6 to 7
move 3 from 7 to 3
move 7 from 3 to 4
move 9 from 8 to 7
move 3 from 3 to 1
move 2 from 5 to 2
move 6 from 7 to 3
move 1 from 1 to 7
move 1 from 9 to 2
move 1 from 5 to 3
move 1 from 8 to 2
move 2 from 7 to 5
move 1 from 1 to 4
move 3 from 5 to 8
move 2 from 8 to 7
move 1 from 8 to 9
move 7 from 3 to 1
move 8 from 2 to 5
move 3 from 7 to 3
move 1 from 5 to 1
move 1 from 9 to 6
move 1 from 7 to 4
move 1 from 6 to 3
move 1 from 7 to 1
move 9 from 4 to 5
move 8 from 1 to 2
move 3 from 3 to 2
move 1 from 1 to 6
move 7 from 5 to 6
move 1 from 1 to 5
move 1 from 3 to 5
move 21 from 2 to 3
move 8 from 6 to 3
move 5 from 4 to 9
move 9 from 3 to 8
move 17 from 3 to 5
move 6 from 2 to 1
move 2 from 9 to 1
move 3 from 3 to 6
move 3 from 2 to 5
move 7 from 8 to 2
move 3 from 6 to 9
move 2 from 2 to 4
move 1 from 2 to 6
move 2 from 2 to 6
move 2 from 6 to 5
move 1 from 6 to 1
move 2 from 2 to 7
move 1 from 8 to 2
move 4 from 9 to 1
move 4 from 1 to 6
move 1 from 8 to 5
move 3 from 6 to 9
move 1 from 9 to 1
move 2 from 9 to 2
move 4 from 4 to 5
move 1 from 7 to 8
move 1 from 7 to 5
move 8 from 1 to 8
move 1 from 1 to 9
move 1 from 6 to 8
move 2 from 2 to 6
move 1 from 1 to 3
move 1 from 2 to 5
move 1 from 3 to 4
move 3 from 9 to 4
move 4 from 4 to 1
move 29 from 5 to 1
move 2 from 6 to 3
move 2 from 3 to 5
move 2 from 5 to 9
move 7 from 8 to 1
move 3 from 8 to 6
move 6 from 1 to 6
move 2 from 9 to 8
move 2 from 5 to 3
move 3 from 5 to 6
move 2 from 5 to 6
move 1 from 5 to 1
move 2 from 3 to 9
move 1 from 8 to 6
move 1 from 8 to 3
move 1 from 3 to 5
move 5 from 1 to 5
move 5 from 6 to 2
move 25 from 1 to 9
move 9 from 9 to 3
move 7 from 6 to 8
move 9 from 5 to 9
move 2 from 6 to 5
move 6 from 9 to 7
move 1 from 6 to 8
move 3 from 2 to 1
move 3 from 8 to 1
move 5 from 9 to 6
move 3 from 9 to 1
move 4 from 6 to 9
move 2 from 7 to 4
move 1 from 4 to 1
move 1 from 6 to 2
move 7 from 1 to 6
move 1 from 9 to 8
move 9 from 3 to 9
move 5 from 1 to 7
move 1 from 5 to 7
move 3 from 1 to 7
move 3 from 6 to 7
move 8 from 9 to 1
move 3 from 7 to 3
move 1 from 5 to 6
move 3 from 1 to 7
move 4 from 1 to 4
move 2 from 8 to 5
move 1 from 4 to 2
move 3 from 2 to 7
move 2 from 6 to 4
move 1 from 1 to 2
move 18 from 7 to 5
move 1 from 7 to 5
move 1 from 2 to 3
move 4 from 5 to 9
move 1 from 2 to 1
move 2 from 3 to 9
move 2 from 3 to 4
move 2 from 6 to 5
move 1 from 8 to 3
move 4 from 9 to 7
move 1 from 1 to 9
move 3 from 5 to 2
move 2 from 8 to 6
move 2 from 6 to 1
move 5 from 5 to 7
move 7 from 9 to 7
move 11 from 5 to 9
move 3 from 7 to 6
move 6 from 4 to 9
move 5 from 7 to 3
move 6 from 3 to 6
move 2 from 1 to 2
move 2 from 4 to 9
move 6 from 9 to 2
move 1 from 7 to 5
move 10 from 2 to 9
move 4 from 9 to 4
move 1 from 4 to 3
move 31 from 9 to 3
move 1 from 9 to 4
move 6 from 3 to 8
move 1 from 5 to 8
move 5 from 6 to 4
move 4 from 3 to 2
move 1 from 4 to 6
move 22 from 3 to 7
move 6 from 4 to 7
move 4 from 6 to 2
move 8 from 8 to 1
move 3 from 2 to 8
move 2 from 1 to 9
move 1 from 2 to 6
move 3 from 2 to 5
move 2 from 5 to 4
move 2 from 6 to 4
move 24 from 7 to 4
move 1 from 7 to 4
move 2 from 1 to 5
move 2 from 9 to 6
move 10 from 4 to 6
move 3 from 1 to 6
move 6 from 7 to 1
move 2 from 2 to 3
move 1 from 7 to 4
move 2 from 8 to 4
move 1 from 8 to 5
move 4 from 5 to 2
move 5 from 4 to 1
move 2 from 7 to 8
move 2 from 8 to 4
move 5 from 6 to 3
move 2 from 4 to 3
move 1 from 7 to 5
move 2 from 3 to 6
move 1 from 5 to 1
move 3 from 6 to 8
move 11 from 4 to 3
move 7 from 6 to 1
move 3 from 8 to 1
move 1 from 2 to 3
move 2 from 6 to 9
move 2 from 2 to 3
move 3 from 4 to 3
move 2 from 9 to 4
move 1 from 6 to 3
move 5 from 1 to 2
move 2 from 4 to 3
move 24 from 3 to 7
move 3 from 3 to 9
move 1 from 2 to 6
move 1 from 2 to 5
move 1 from 6 to 1
move 4 from 2 to 1
move 2 from 9 to 2
move 1 from 2 to 4
move 18 from 7 to 5
move 1 from 2 to 1
move 1 from 9 to 1
move 2 from 5 to 7
move 13 from 1 to 8
move 3 from 4 to 9
move 7 from 1 to 7
move 13 from 7 to 6
move 1 from 9 to 5
move 3 from 4 to 3
move 1 from 9 to 8
move 3 from 1 to 3
move 1 from 9 to 5
move 2 from 1 to 4
move 2 from 7 to 3
move 4 from 3 to 1
move 1 from 1 to 5
move 9 from 6 to 7
move 5 from 7 to 1
move 2 from 4 to 1
move 4 from 6 to 1
move 3 from 5 to 3
move 3 from 3 to 5
move 7 from 1 to 6
move 6 from 6 to 1
move 1 from 6 to 8
move 2 from 7 to 9
move 2 from 1 to 5
move 1 from 3 to 7
move 7 from 5 to 9
move 10 from 1 to 5
move 8 from 8 to 4
move 6 from 4 to 8
move 1 from 4 to 1
move 2 from 9 to 8
move 2 from 1 to 3
move 2 from 7 to 3
move 1 from 7 to 8
move 4 from 3 to 8
move 1 from 3 to 2
move 20 from 5 to 8
move 1 from 2 to 4
move 4 from 9 to 4
move 4 from 4 to 5
move 18 from 8 to 6
move 3 from 9 to 6
move 1 from 3 to 9
move 10 from 8 to 7
move 7 from 7 to 9
move 7 from 8 to 5
move 3 from 7 to 8
move 6 from 5 to 1
move 6 from 9 to 4
move 1 from 9 to 6
move 1 from 3 to 6
move 1 from 8 to 5
move 1 from 9 to 4
move 12 from 6 to 7
move 5 from 7 to 1
move 6 from 8 to 5
move 1 from 5 to 1
move 3 from 5 to 3
move 8 from 4 to 9
move 2 from 3 to 7
move 4 from 7 to 2
move 10 from 5 to 6
move 11 from 1 to 6
move 4 from 2 to 5
move 1 from 3 to 8
move 1 from 8 to 9
move 1 from 4 to 7
move 3 from 7 to 4
move 1 from 1 to 6
move 1 from 4 to 7
move 1 from 7 to 1
move 4 from 5 to 2
move 3 from 7 to 1
move 2 from 4 to 8
move 20 from 6 to 8
move 4 from 1 to 5
move 2 from 5 to 2
move 6 from 6 to 1
move 5 from 1 to 8
move 7 from 6 to 2
move 6 from 9 to 7
move 2 from 9 to 8
move 2 from 7 to 4
move 4 from 2 to 6
move 3 from 5 to 8
move 12 from 8 to 7
move 1 from 4 to 3
move 1 from 2 to 9
move 1 from 9 to 2
move 1 from 6 to 8
move 1 from 3 to 1
move 2 from 1 to 6
move 1 from 4 to 2
move 3 from 6 to 2
move 2 from 5 to 7
move 1 from 9 to 8
move 6 from 2 to 4
move 17 from 7 to 1
move 10 from 1 to 7
move 4 from 2 to 6
move 10 from 7 to 8
move 3 from 6 to 2
move 4 from 4 to 1
move 2 from 6 to 4
move 4 from 2 to 6
move 1 from 7 to 1
move 2 from 4 to 3
move 12 from 1 to 7
move 5 from 6 to 3
move 17 from 8 to 2
move 4 from 3 to 8
move 1 from 4 to 2
move 20 from 8 to 7
move 19 from 2 to 6
move 7 from 6 to 3
move 7 from 3 to 5
move 2 from 5 to 7
move 4 from 6 to 9
move 1 from 4 to 2
move 1 from 2 to 1
move 2 from 3 to 6
move 1 from 2 to 6
move 1 from 3 to 1
move 4 from 6 to 2
move 1 from 5 to 9
move 7 from 7 to 3
move 7 from 3 to 8
move 5 from 8 to 1
move 2 from 8 to 3
move 1 from 2 to 1
move 3 from 5 to 6
move 1 from 3 to 9
move 2 from 9 to 2
move 8 from 1 to 7
move 3 from 7 to 6
move 2 from 2 to 4
move 21 from 7 to 3
move 10 from 3 to 1
move 2 from 9 to 2
move 7 from 3 to 4
move 3 from 3 to 7
move 4 from 2 to 3
move 3 from 7 to 8
move 1 from 3 to 6
move 1 from 3 to 2
move 4 from 7 to 9
move 10 from 1 to 6
move 1 from 5 to 9
move 6 from 7 to 2
move 24 from 6 to 5
move 2 from 8 to 4
move 1 from 8 to 6
move 2 from 2 to 9
move 5 from 2 to 7
move 1 from 2 to 9
move 11 from 4 to 1
move 3 from 3 to 2
move 4 from 9 to 7
move 1 from 1 to 5
move 1 from 6 to 1
move 5 from 1 to 9
move 5 from 9 to 7
move 5 from 7 to 5
move 23 from 5 to 2
move 5 from 7 to 8
move 6 from 5 to 6
move 1 from 3 to 7
move 1 from 5 to 7
move 6 from 7 to 8
move 3 from 6 to 1
move 2 from 8 to 7
move 4 from 2 to 1
move 4 from 8 to 5
move 7 from 2 to 3
move 1 from 7 to 4
move 1 from 4 to 7
move 4 from 3 to 8
move 6 from 1 to 9
move 4 from 8 to 6
move 3 from 1 to 5
move 3 from 8 to 5
move 1 from 1 to 8
move 3 from 9 to 1
move 3 from 6 to 7
move 1 from 7 to 9
move 3 from 8 to 3
move 8 from 5 to 7
move 11 from 2 to 8
move 5 from 8 to 3
move 1 from 8 to 7
move 10 from 3 to 4
move 2 from 5 to 8
move 3 from 9 to 2
move 1 from 9 to 6
move 7 from 2 to 7
move 6 from 9 to 4
move 1 from 8 to 5
move 3 from 6 to 8
move 1 from 5 to 3
move 2 from 3 to 1
move 6 from 1 to 3
move 13 from 7 to 5
move 16 from 4 to 3
move 2 from 1 to 5
move 5 from 5 to 4
move 11 from 3 to 4
move 2 from 7 to 1
move 7 from 3 to 1
move 2 from 8 to 3
move 8 from 1 to 9
move 12 from 4 to 8
move 1 from 1 to 4
move 2 from 6 to 2
move 3 from 7 to 8
move 2 from 4 to 6
move 5 from 8 to 1
move 3 from 7 to 5
move 6 from 5 to 7
move 2 from 2 to 5
move 1 from 4 to 9
move 5 from 1 to 8
move 6 from 3 to 1
move 7 from 5 to 7
move 7 from 9 to 2
move 1 from 6 to 7
move 1 from 1 to 9
move 2 from 5 to 3
move 2 from 9 to 6
move 13 from 7 to 3
move 2 from 6 to 1
move 1 from 9 to 2
move 16 from 8 to 7
move 6 from 8 to 5
move 3 from 2 to 5
move 4 from 2 to 1
move 3 from 1 to 8
move 2 from 8 to 9
move 1 from 8 to 7
move 1 from 2 to 1
move 8 from 3 to 1
move 1 from 4 to 5
move 1 from 6 to 3
move 2 from 9 to 7
move 5 from 1 to 4
move 15 from 7 to 9
move 11 from 9 to 3
move 7 from 1 to 3
move 2 from 1 to 6
move 1 from 6 to 3
move 2 from 4 to 5
move 2 from 4 to 9
move 7 from 5 to 9
move 5 from 9 to 3
move 1 from 1 to 6
move 5 from 5 to 9
move 1 from 4 to 8
move 1 from 8 to 4
move 3 from 7 to 4
move 8 from 9 to 5
move 1 from 6 to 4
move 4 from 9 to 3
move 1 from 9 to 3
move 23 from 3 to 1
move 12 from 1 to 2
move 6 from 1 to 9
move 5 from 9 to 7
move 3 from 3 to 7
move 6 from 4 to 3
move 1 from 6 to 8
move 6 from 1 to 2
move 3 from 7 to 3
move 3 from 2 to 5
move 10 from 3 to 5
move 1 from 1 to 8
move 12 from 2 to 5
move 3 from 2 to 9
move 2 from 8 to 4
move 13 from 5 to 1
move 2 from 9 to 2
move 2 from 1 to 3
move 11 from 3 to 1
move 2 from 2 to 1
move 2 from 1 to 9
move 16 from 1 to 7
move 17 from 5 to 8
move 1 from 1 to 2
move 3 from 9 to 6`
console.log(supplyStacks(crates, directions))