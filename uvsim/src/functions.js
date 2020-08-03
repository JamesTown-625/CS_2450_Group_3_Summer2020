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

//DEBUG OPERATIONS

export function handleMemDump() {}

export function handleBreak() {}

export function handleContinue() {}

export function printUsedFunctionToConsole(consoleLines, setConsoleLines, str) {
  if (consoleLines.length >= 7) {
    consoleLines.splice(0, 1);
    setConsoleLines([...consoleLines]);
    setConsoleLines([...consoleLines, str]);
    console.log("if", consoleLines);
  } else {
    setConsoleLines([...consoleLines, str]);
  }
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
