import React, { useState, useEffect } from "react";
import { Button, Input, Container, Label } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UvsimTable from "./Components/UvsimTable";

const useStyles = makeStyles((theme) => ({
  App: {
    textAlign: "center",
  },
}));

const App2 = () => {
  const classes = useStyles();
  const [memory, setMemory] = useState([
    { memoryAddress: "00", operation: "00" },
    { memoryAddress: "01", operation: "00" },
    { memoryAddress: "02", operation: "00" },
    { memoryAddress: "03", operation: "00" },
  ]);
  const [memoryVal, setMemoryVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [loadVal, setLoadVal] = useState("");
  const [loadedVal, setLoadedVal] = useState([]);
  const [found, setFound] = useState("");
  const [x, setX] = useState(10);

  const trigger = () => {
    setX(4);
    console.log("triggering re-render");
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
    trigger();
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
    trigger()
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
      trigger()
    });
  };

  return (
    <div className={classes.App}>
      <Container className="title">
        <h1> CS2450 UVISM</h1>
      </Container>
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
      {/* Can be confusing this means if found exists to show the html else skip the html*/}
      {found && <h1 style={{ color: "green" }}> Found: {found} </h1>}
      <Container>
        <h2> Load From Register</h2>
        <Input value={loadVal} onChange={handleLoadChange} />
        <Button variant="contained" color="primary" onClick={handleLoad}>
          Loaded
        </Button>
        {/* will  have to loop through loadedValues and set them to a register */}
      </Container>
      <UvsimTable key={x} var={x} memory={memory} />
    </div>
  );
};

export default App2;
