import React, { useState, useEffect } from "react";
import { Button, Input, Container, Label } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from '@material-ui/core/styles';
import UvsimTable from "./Components/UvsimTable";
import AddressTable from "./Components/AddressTable"
import RegisterAccumulator from "./Components/RegisterAccumulator"
import Console from "./Components/Console"
import mainTheme from "./Styles/mainTheme"
import "./Styles/global.css"

const useStyles = makeStyles((theme) => ({

    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '30px'
    },
    leftGrid: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridGap: '30px'
    }
}));

const App2 = () => {

    const classes = useStyles();

    const [memory, setMemory] = useState([
        { memoryAddress: "0000", operation: "0000" },
        { memoryAddress: "0001", operation: "0000" },
        { memoryAddress: "0002", operation: "0000" },
        { memoryAddress: "0003", operation: "0000" },
    ]);

    const [memoryVal, setMemoryVal] = useState("");
    const [searchVal, setSearchVal] = useState("");
    const [loadVal, setLoadVal] = useState("");
    const [loadedVal, setLoadedVal] = useState([]);
    const [found, setFound] = useState("");
    const [x, changeX] = useState(10);



    const renderTable = () => {
        changeX(1);
        console.log(" re-rendering table");
    };

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

    return (
        <MuiThemeProvider theme={mainTheme}>
            <div>
                <div className={classes.container}>
                    <div className={classes.leftGrid}>
                        <RegisterAccumulator />
                        <Console handleInput={handleInput} />
                    </div>
                    <div>
                        <AddressTable key={x} memory={memory} />
                    </div>
                </div >
            </div>
        </MuiThemeProvider>
    );
};

export default App2;

/*
<Container className="demo">
                <h2> Add Value </h2>
                <Input value={memoryVal} onChange={handleAddChange} />
                <Button variant="contained" color="primary" onClick={handleInput}>
                    Add
        </Button>
            </Container>
            <Container>
                <h2> Find Memory Value </h2>
                <Input value={searchVal} onChange={handleFindChange} />
                <Button variant="contained" color="primary" onClick={handleFind}>
                    Find
        </Button>
            </Container>
            {/* Can be confusing this means if found exists to show the html else skip the html}
{ found && <h1 style={{ color: "green" }}> Found: {found} </h1> }
<Container>
    <h2> Load From Register</h2>
    <Input value={loadVal} onChange={handleLoadChange} />
    <Button variant="contained" color="primary" onClick={handleLoad}>
        Loaded
        </Button>
    {/* will  have to loop through loadedValues and set them to a register }
</Container>
    */