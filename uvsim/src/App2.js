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
import "./Styles/app.css";

export default class App2 extends React.Component {
  state = {
    memory: [],
    registers: {
      r001: { value: 0 },
      r010: { value: 0 },
      r011: { value: 0 },
      r100: { value: 0 },
      r101: { value: 0 },
      r110: { value: 0 },
      r111: { value: 0 },
    },
    addressCounter: 0,
    program_counter: 0,
    codeInput: "",
    consoleLines: [],
    running: false,
    open: false,
  };

  componentDidMount() {
    const { memory } = this.state;
    // setProgramCounter(program_counter => program_counter + 1)
    let tempArray = [...this.state.memory];
    for (let i = 0; i <= 1000; i++) {
      tempArray.push({
        memoryAddress: i,
        machine_language_line: "0000000000000000",
      });
      this.setState({ memory: tempArray });

      //   this.setState({
      //     memory: [
      //       ...memory,
      //       { memoryAddress: i, machine_language_line: "0000000000000000" },
      //     ],
      //   });
    }

    console.log(this.state.memory);
  }

  executeOperation = () => {
    const { memory, program_counter, running, registers } = this.state;
    console.log("in executeOperation");
    let line = memory[this.state.program_counter].machine_language_line;
    let opcode = memory[
      this.state.program_counter
    ].machine_language_line.substring(0, 4);

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

        //TODO:instead of handleFoo(line,foo,setFOo), pass in state
        const add = handleAdd(line, registers);
        console.log(add);
        let value = add.newVal;
        let destination = add.destination;
        // this.setState({
        //   registers: {
        //     destination: {
        //       value: value,
        //     },
        //   },
        // });
        this.setState({
          registers: { ...registers[destination], value },
        });
        console.log(registers);

        break;
      // TRAP
      case "1111":
        console.log(`trap running ${running}`);
        //TODO:instead of handleFoo(line,foo,setFOo), pass in state

        this.setState({ running: false });
        break;
      // NON LC3 NATIVE OPCODES (added functionality)
      //   case "0002":
      //     //TODO:instead of handleFoo(line,foo,setFOo), pass in state
      //     handleSubtract(line, registers, setRegisters);
      //     break;
      //   case "0003":
      //     //TODO:instead of handleFoo(line,foo,setFOo), pass in state
      //     handleMultiply(line, registers, setRegisters);
      //     break;
      //   case "0004":
      //     //TODO:instead of handleFoo(line,foo,setFOo), pass in state
      //     handleDivide(line, registers, setRegisters);
      //     break;
      //   case "0005":
      //     //TODO:instead of handleFoo(line,foo,setFOo), pass in state
      //     handleModulus(line, registers, setRegisters);
      //     break;
      //   case "0006":
      //     //TODO:instead of handleFoo(line,foo,setFOo), pass in state
      //     handleExponent(line, registers, setRegisters);
      //     break;
      //   default:
    }
    //program_counter++;
    //TODO: change to this.setState
    this.setState({ program_counter: program_counter + 1 });

    console.log("reached setProgramCounter");
    //setStep(step + 1)
  };

  handleRun = () => {
    const { running, memory, program_counter } = this.state;
    // printUsedFunctionToConsole(
    //     consoleLines,
    //     setConsoleLines,
    //     "calling handleRun"
    // );

    setTimeout(() => {
      //TODO: change to this.setState
      this.setState({ running: !running });

      while (running == true) {
        let line = memory[program_counter].machine_language_line;
        console.log(
          `loop iteration  PC:${program_counter} CURRENT LINE:${line}`
        );
        this.executeOperation();
      }
    }, 3000);

    while (running == true) {
      let line = this.state.memory[this.state.program_counter]
        .machine_language_line;
      console.log(`loop iteration  PC:${program_counter} CURRENT LINE:${line}`);
      this.executeOperation();
    }
  };

  //Open Help Window
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  //Close Help Window
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleStep = () => {
    console.log(this.state.registers);
    this.executeOperation();
  };

  updateCode = (e) => {
    const { codeInput } = this.state;

    //TODO:instead of setCodeInput, this.setState to set to target value
    //setCodeInput(e.target.value);
    this.setState({ codeInput: e.target.value });
    console.log(codeInput);
  };

  saveCode = () => {
    const { memory, codeInput, addressCounter } = this.state;

    let filteredLines = [];
    let userCode = codeInput.split("\n");
    const updatedMemo = memory.map((m, i) => ({
      memoryAddress: i,
      machine_language_line: userCode[i],
    }));

    userCode.forEach((line) => {
      if (line.search("@") == -1) {
        filteredLines.push(line.trim());
      }
    });

    this.setState({
      memory: updatedMemo,
      addressCounter: addressCounter + 1,
    });

    console.log(
      "userCode",
      userCode,
      "memory",
      memory,
      "updatedMemo",
      updatedMemo
    );
  };

  render() {
    const { consoleLines, codeInput, memory } = this.state;

    return (
      <MuiThemeProvider theme={mainTheme}>
        <Header />
        <div>
          <div>Test</div>
          <div className="container">
            <div className="leftGrid">
              <RegisterAccumulator registers={this.state.registers} />
              <Console
                // setClicked={setClicked}
                //TODO: change to this.setState
                handleRun={this.handleRun}
                handleStep={this.handleStep}
                updateCode={this.updateCode}
                codeInput={codeInput}
                saveCode={this.saveCode}
                consoleLines={consoleLines}
              />
            </div>
            <div>
              <AddressTable memory={memory} />
            </div>
          </div>
        </div>
        <Button
          onClick={this.handleOpen}
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
        <HelpScreen open={this.open} handleClose={this.handleClose} />
      </MuiThemeProvider>
    );
  }
}
