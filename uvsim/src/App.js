import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import AddressTable from "./Components/AddressTable";
import RegisterAccumulator from "./Components/RegisterAccumulator";
import HelpScreen from "./Components/HelpScreen";
import Console from "./Components/Console";
import Header from "./Components/Header";
import mainTheme from "./Styles/mainTheme";
import "./Styles/global.css";
import {
  handleAdd,
  handleSubtract,
  handleMultiply,
  handleDivide,
  handleModulus,
  handleExponent,
} from "./MachineFunctions/arithmetic";
import { handleTrap } from "./MachineFunctions/control";
import { printUsedFunctionToConsole } from "./functions";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    marginTop: "100px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "30px",
  },
  leftGrid: {
    display: "grid",
    gridAutoRows: "auto",
    gridGap: "30px",
  },
}));

const App = () => {
  const classes = useStyles();
  const [memory, setMemory] = useState([
    //example line of machine code - 0001 add decimal #10 to register 1
    // { memoryAddress: 0, machine_language_line: "0001001001101010" },
    // { memoryAddress: 1, machine_language_line: "0001001001000001" },
    // { memoryAddress: 2, machine_language_line: "0010001001101010" },
    // { memoryAddress: 3, machine_language_line: "0010001001001010" },
    // { memoryAddress: 4, machine_language_line: "0010001001001010" },
    // { memoryAddress: 5, machine_language_line: "0010001001001010" },
    // { memoryAddress: 6, machine_language_line: "0010001001001010" },
    // { memoryAddress: 7, machine_language_line: "0010001001001010" },
    // { memoryAddress: 8, machine_language_line: "0010001001001010" },
    // { memoryAddress: 9, machine_language_line: "0010001001001010" },
    // { memoryAddress: 10, machine_language_line: "0010001001001010" },
  ]);
  const [registers, setRegisters] = useState({
    r001: { value: 0 },
    r010: { value: 0 },
    r011: { value: 0 },
    r100: { value: 0 },
    r101: { value: 0 },
    r110: { value: 0 },
    r111: { value: 0 },
  });
  const [addressCounter, setAddressCounter] = useState(0);
  const [program_counter, setProgramCounter] = useState(0);
  const [codeInput, setCodeInput] = useState("");
  const [x, changeX] = useState(10);
  const [consoleLines, setConsoleLines] = useState([]);
  //const [running, setRunning] = useState(false)
  const [loading, setLoading] = useState(false);
  let running = false;
  const setRunning = (bool) => {
    running = bool;
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log("rerendering");
    for (let i = 0; i <= 1000; i++) {
      setMemory((memory) => [
        ...memory,
        { memoryAddress: i, machine_language_line: "0000000000000000" },
      ]);
    }
  }, []);

  useEffect(() => {
    console.log("running getData()");
    //getData().then(data => setRunning(data))
  }, [loading]);

  const getData = () => {
    const promise = Promise.resolve(true);
    return promise;
  };

  const handleRun = () => {
    printUsedFunctionToConsole(
      consoleLines,
      setConsoleLines,
      "calling handleRun"
    );

    //setLoading(true)
    running = true;

    while (running == true) {
      let line = memory[program_counter].machine_language_line;
      console.log(`loop iteration  PC:${program_counter} CURRENT LINE:${line}`);
      executeOperation();
    }
  };

  const handleStep = () => {
    console.log(addressCounter);
    if (memory[program_counter].machine_language_line) {
      executeOperation();
    }
  };

  const executeOperation = () => {
    let line = memory[program_counter].machine_language_line;
    let opcode = memory[program_counter].machine_language_line.substring(0, 4);
    /*
0011000000000000
0001001001101010
0001010001000010
1111000000100101
        */
    console.log(`pc ${program_counter} line ${line}`);
    switch (opcode) {
      // ADD
      case "0001":
        console.log(running);
        handleAdd(line, registers, setRegisters);
        break;
      // TRAP
      case "1111":
        console.log(running);
        handleTrap(setRunning, consoleLines, setConsoleLines);
        break;

      // NON LC3 NATIVE OPCODES (added functionality)
      case "0002":
        handleSubtract(line, registers, setRegisters);
        break;
      case "0003":
        handleMultiply(line, registers, setRegisters);
        break;
      case "0004":
        handleDivide(line, registers, setRegisters);
        break;
      case "0005":
        handleModulus(line, registers, setRegisters);
        break;
      case "0006":
        handleExponent(line, registers, setRegisters);
        break;
      default:
    }
    //program_counter++;
    setProgramCounter(program_counter + 1);
  };

  // simply function to update the value need to trigger rerender
  const updateMemory = (userInput) => {
    printUsedFunctionToConsole(
      consoleLines,
      setConsoleLines,
      "calling updateMemory"
    );

    memory.forEach((m, i) => {
      // console.log(i, addressCounter);
      m.machine_language_line = userInput[i];
      setAddressCounter(addressCounter + 1);
    });
  };
  const updateCode = (e) => {
    printUsedFunctionToConsole(
      consoleLines,
      setConsoleLines,
      "calling updateCode"
    );

    setCodeInput(e.target.value);
    console.log(codeInput);
  };

  const saveCode = (e) => {
    printUsedFunctionToConsole(
      consoleLines,
      setConsoleLines,
      "calling saveCode"
    );

    console.log("##########################################");
    //Save machine code that's entered into window
    let userCode = codeInput.split("\n");
    console.log(`code input-\n${codeInput}`);
    console.log(userCode[0]);
    console.log(userCode[1]);
    console.log(userCode[2]);
    console.log(userCode[3]);
    console.log("##########################################");
    // userCode.forEach((line) => { console.log(line); });
    let filteredLines = [];
    userCode.forEach((line) => {
      if (line.search("@") == -1) {
        filteredLines.push(line.trim());
      }
    });
    let addressCounter = 0;
    // if the user puts more lines than we have current address's we push new spots until they are equal
    filteredLines.forEach((u) => {
      //TODO add memory Address logic
      //userCode.length < 1000)
      if (filteredLines.length !== memory.length) {
        setMemory([
          ...memory,
          {
            memory_address: addressCounter.toString(),
            machine_language_line: u,
          },
        ]);

        updateMemory(filteredLines);
        return;
      }
    });
    // the code line length should be equal to the amount of memory spots we have. So this just updates
    updateMemory(filteredLines);
  };

  return (
    <MuiThemeProvider theme={mainTheme}>
      <Header />
      <div>
        <div>Test</div>
        <div className={classes.container}>
          <div className={classes.leftGrid}>
            <RegisterAccumulator registers={registers} />
            <Console
              handleRun={handleRun}
              handleStep={handleStep}
              updateCode={updateCode}
              codeInput={codeInput}
              saveCode={saveCode}
              consoleLines={consoleLines}
              setConsoleLines={setConsoleLines}
            />
          </div>
          <div>
            <AddressTable key={x} memory={memory} setMemory={setMemory} />
          </div>
        </div>
      </div>
      <Button
        onClick={handleOpen}
        style={{
          position: "fixed",
          right: "0",
          bottom: "0",
          marginRight: "25px",
          marginBottom: "30px",
        }}
      >
        <HelpIcon fontSize="large" />
      </Button>
      <HelpScreen open={open} handleClose={handleClose} />
    </MuiThemeProvider>
  );
};

export default App;
