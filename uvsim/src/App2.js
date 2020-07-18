import React, { useState, useEffect } from "react";
import { Button, Input, Container, Label } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import UvsimTable from "./Components/UvsimTable"

const useStyles = makeStyles((theme) => ({
    App: {
        textAlign: 'center'
    }
}));

const App2 = () => {

    const classes = useStyles();
    const [memory, setMemory] = useState([]);
    const [memoryVal, setMemoryVal] = useState("")
    const [searchVal, setSearchVal] = useState("")
    const [found, setFound] = useState("")

    // handles the Add Button input
    const handleInput = (e) => {

        e.preventDefault();
        // array spreading to push a new object with the memoryVal and memoryAddress
        setMemory([...memory, { memoryAddress: Math.floor(Math.random() * 10000), memoryVal: memoryVal }])
        //click twice to see the memory address
        console.log(memory)

    }

    const handleFind = (e) => {
        e.preventDefault();
        // logic for taking the memory address and seeing if it matches any in the this.state.memory array
        memory.find((m) => {
            if (m.memoryAddress === parseInt(searchVal)) {
                setFound(m.memoryVal)
            }
        });
        console.log(memory)
    }

    // handles the input value for the first input
    const handleAddChange = e => {
        setMemoryVal(e.target.value)
    }

    // handles the input value for the second input
    const handleFindChange = e => {
        setSearchVal(e.target.value)
    }



    return (
        <div className={classes.App}>
            <Container className="title">
                <h1> CS2450 UVISM</h1>
            </Container>
            <Container className="demo">
                <h2> Add Value </h2>
                <Input value={memoryVal} onChange={handleAddChange} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleInput}
                >
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
            {/* Can be confusing this means if found exists to show the html else skip the html*/}
            {found &&
                (<h1 style={{ color: "green" }}> Found: {found} </h1>)
            }
            <Container>
                <h2> Load Into Register</h2>
            </Container>
            <UvsimTable />
        </div>
    )
}

export default App2