package main

import (
	"fmt"
	"strings"
)

func printHello() {
	fmt.Println("Hello World")
}

// Main runs functions in a row top to bottom
func main() {

	listOfElves := `3120
4127
1830
1283
5021
3569
3164
2396
4367
2821
6118
4450
1300
3648
1933

4841
6135
5806
8128
4069
6511
3601
4786`
	fmt.Println(strings.Split(listOfElves, "\n"))

	// Check input string for
}
