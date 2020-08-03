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

export function handleAdd(line, registers, setRegisters) {
    let destination = line.substring(4, 7);
    let source1 = line.substring(7, 10);
    let immediate = line.substring(10, 11);
    console.log(`dst:${destination} src:${source1} immediate:${line.substring(10, 11)}`)

    if (parseInt(immediate)) {

        let immediate_val = parseInt(line.substring(11), 2);
        let reg = parseInt(destination)
        console.log(`immediate value: ${immediate_val}`)
        console.log(`destination: ${destination}`)
        console.log(`to register: ${reg}`)

        console.log(`register: ${destRegister}`)

        // ADD immediate_val to r1 (stored as a state in app.js)

        console.log(registers)

        setRegisters({
            ...registers,
            // Overwrite person you want to update
            jerry: {
                // Copy Jerry's existing properties
                ...registers.jerry,
                // Overwrite Jerry's address  
                address: {
                    // Copy everything over from Jerry's original address
                    ...registers.jerry.address,
                    // Update the street
                    street: '712 Ashbury Street'
                }
            }
        }
        )
        console.log(registers)
        let destRegister = "r" + destination
        console.log(`register: ${destRegister}`)

        // ADD immediate_val to r1 (stored as a state in app.js)

        console.log(registers)

        setRegisters({
            ...registers,
            // Overwrite person you want to update
            jerry: {
                // Copy Jerry's existing properties
                ...registers.jerry,
                // Overwrite Jerry's address  
                address: {
                    // Copy everything over from Jerry's original address
                    ...registers.jerry.address,
                    // Update the street
                    street: '712 Ashbury Street'
                }
            }
        }
        )
        console.log(registers)
    }
    else {
        console.log('not immediate mode')
        let source2 = line.substring(line.length - 3)
        console.log(source2)
        // ADD source1 and source2 and then put that value in the destination register
    }
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

export function test(y, changeY) {
    return changeY(100)
}

/*

    const [memoryVal, setMemoryVal] = useState("");
    const [searchVal, setSearchVal] = useState("");
    const [loadVal, setLoadVal] = useState("");
    const [loadedVal, setLoadedVal] = useState([]);
    const [found, setFound] = useState("");

// handles the Add Button input
const handleInput = (e) => {
    let randomNumSet = new Set();

    //generate number. Set() does not let you have duplicates
    for (let index = 0; index < 200; index++) {
        randomNumSet.add(Math.floor(Math.random() * 100));
    }

    //grab the first 100 numbers in the array unique
    let randomSetToArray = Array.from(randomNumSet).slice(0, 99);

    e.preventDefault();
    //loops through and adds the n to memoryAddress
    // array spreading to push a new object with the memoryVal and memoryAddress

    randomSetToArray.forEach((n) => {
        if (memory.memoryAddress !== n) {
            setMemory([
                ...memory,
                { memoryAddress: n, memoryVal: memoryVal, operation: 11 },
            ]);
            return;
        }
    });

    //click twice to see the memory address
    console.log(memory);
    renderTable();
};

const handleFind = (e) => {
    e.preventDefault();
    // logic for taking the memory address and seeing if it matches any in the this.state.memory array

    memory.find((m) => {
        if (m.memoryAddress === parseInt(searchVal)) {
            setFound(m.memoryVal);
            let randomNumSet = new Set();

            //generate number. Set() does not let you have duplicates
            for (let index = 0; index < 200; index++) {
                randomNumSet.add(Math.floor(Math.random() * 100));
            }

            //grab the first 100 numbers in the array unique
            let randomSetToArray = Array.from(randomNumSet).slice(0, 99);

            //loops through and adds the n to memoryAddress
            // array spreading to push a new object with the memoryVal and memoryAddress

            randomSetToArray.forEach((n) => {
                if (memory.memoryAddress !== n) {
                    setMemory([
                        ...memory,
                        { memoryAddress: n, memoryVal: memoryVal, operation: 10 },
                    ]);
                    return;
                }
            });
        }
        console.log(memory);
        renderTable()
    });
}

// handles the input value for the first input
const handleAddChange = (e) => {
    setMemoryVal(e.target.value);
};

// handles the input value for the second input
const handleFindChange = (e) => {
    setSearchVal(e.target.value);
};

// handles input for the load value
const handleLoadChange = (e) => {
    setLoadVal(e.target.value);
};
// handles the load value
const handleLoad = (e) => {
    // click and saves it to available register
    memory.find((m) => {
        if (m.memoryAddress === parseInt(searchVal)) {
            setFound(m.memoryVal);
            let randomNumSet = new Set();

            //generate number. Set() does not let you have duplicates
            for (let index = 0; index < 200; index++) {
                randomNumSet.add(Math.floor(Math.random() * 100));
            }

            //grab the first 100 numbers in the array unique
            let randomSetToArray = Array.from(randomNumSet).slice(0, 99);

            //loops through and adds the n to memoryAddress
            // array spreading to push a new object with the memoryVal and memoryAddress

            randomSetToArray.forEach((n) => {
                if (memory.memoryAddress !== n) {
                    setMemory([
                        ...memory,
                        { memoryAddress: n, memoryVal: memoryVal, operation: 20 },
                    ]);
                    return;
                }
            });
        }
        console.log(memory);
        renderTable()
    });
};
*/