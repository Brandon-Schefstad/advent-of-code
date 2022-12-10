function countVisibleTrees(input: string): number{
  const treesArr = input.split('\n')
  return treesArr
}

console.log(countVisibleTrees(`30373
25512
65332
33549
35390
`))