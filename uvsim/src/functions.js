/*
I don't know if this is necessary, but if it is...............
..the idea is to have a function to handle user input for each of the following commands:

READ = 10		Read a word from the keyboard into a specific location in memory.
WRITE = 11		Missing 
Load/store operations:
LOAD = 20		Load a word from a specific location in memory into the accumulator. 
STORE = 21		Missing 
Arithmetic operation:
Add = 30	Add a word from a specific location in memory to the word in the accumulator (leave the result in the accumulator) 
SUBTRACT = 31	Missing
DIVIDE = 32		Missing
MULTIPLY = 33	Missing
Control operation:
BRANCH = 40		Branch to a specific location in memory
BRANCHNEG = 41	Missing
BRANCHZERO = 42	Missing
HALT = 43		Missing
Debugging operation:
MEMDUMP 		Print the memory image on the screen. 
BREAK		Missing
CONTINUE		Missing
*/

//We can move these functions into the components, I just put here for clarity
//starting with a function to handle initial input

export function handleInput() {
    //Accept keywords listed above ^^^ handle error
    //Prompt user to enter one of those commands if input is invalid

}

//based on valid input, call one of the following functions

export function handleRead() {

}

export function handleWrite() {

}

export function handleLoad() {

}

export function handleStore() {

}

export function handleAdd() {

}

export function handleSubtract() {

}

export function handleMultipy() {

}

export function handleDivide() {

}

export function handleBranch() {

}

export function handleBranchNeg() {

}

export function handleBranchZero() {

}

export function handleHalt() {

}

export function handleMemDump() {

}

export function handleBreak() {

}

export function handleContinue() {


}