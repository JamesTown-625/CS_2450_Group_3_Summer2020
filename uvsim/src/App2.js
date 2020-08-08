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
    let value, destination;
    const { memory, running, registers } = this.state;
    let newRegisterList = this.state.registers;
    console.log("in executeOperation");
    let line = memory[this.state.program_counter].machine_language_line;
    let opcode = memory[
      this.state.program_counter
    ].machine_language_line.substring(0, 4);

    console.log(`pc ${this.state.program_counter} line ${line}`);
    switch (opcode) {
      // ADD
      case "0001":
        const add = handleAdd(line, registers);
        value = add.newVal;
        destination = add.destination;
        newRegisterList[destination].value = value;
        this.setState({
          registers: newRegisterList,
        });
        break;

      // TRAP
      case "1111":
        console.log(`trap running ${running}`);
        this.setState({ running: false });
        break;

      // NON LC3 NATIVE OPCODES (added functionality)
      case "0002":
        const subtract = handleSubtract(line, registers);
        value = subtract.newVal;
        destination = subtract.destination;
        newRegisterList[destination].value = value;
        this.setState({
          registers: newRegisterList,
        });
        break;

      case "0003":
        const multiply = handleMultiply(line, registers);
        value = multiply.newVal;
        destination = multiply.destination;
        newRegisterList[destination].value = value;
        this.setState({
          registers: newRegisterList,
        });
        break;
      case "0004":
        const divide = handleDivide(line, registers);
        value = divide.newVal;
        destination = divide.destination;
        newRegisterList[destination].value = value;
        this.setState({
          registers: newRegisterList,
        });
        break;
      case "0005":
        const modulus = handleModulus(line, registers);
        value = modulus.newVal;
        destination = modulus.destination;
        newRegisterList[destination].value = value;
        this.setState({
          registers: newRegisterList,
        });
        break;
      case "0006":
        const exponent = handleExponent(line, registers);
        value = exponent.newVal;
        destination = exponent.destination;
        newRegisterList[destination].value = value;
        this.setState({
          registers: newRegisterList,
        });
        break;
      default:
    }
    //program_counter++;
    //TODO: change to this.setState
    let tempCounter = this.state.program_counter;
    tempCounter = tempCounter + 1;
    /*
0011000000000000
0001001001101010
0001010001000010
1111000000100101
        */
    const { program_counter } = this.state;

    this.setState({ ...program_counter, program_counter: program_counter + 1 });

    console.log("\n\n\n\n\n\n\n");
    // console.log("reached setProgramCounter");
    //setStep(step + 1)
  };

  handleRun = () => {
    const { running, memory } = this.state;

    // printUsedFunctionToConsole(
    //     consoleLines,
    //     setConsoleLines,
    //     "calling handleRun"
    // );

    //this.setState({ ...running, running: true });
    // this.setState({ running: true }, () => {
    //   const { running } = this.state;
    //   console.log("running is: ", running);
    //   while (running == true) {
    //     console.log("Running is true");
    //     let line = memory[this.state.program_counter].machine_language_line;
    //     console.log(
    //       `loop iteration  PC:${this.state.program_counter} CURRENT LINE:${line}`
    //     );
    //     this.executeOperation();
    //   }
    // });
    // this.setState((state) => ({
    //   running: true
    // }));

    this.setState({ running: true });
    setTimeout(() => {
      console.log("okay tryyyyy");
      while (this.state.running == true) {
        console.log("Running is true");
        let line = memory[this.state.program_counter].machine_language_line;
        console.log(
          `loop iteration  PC:${this.state.program_counter} CURRENT LINE:${line}`
        );
        this.executeOperation();
      }
    }, 50);
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
    const { memory, program_counter } = this.state;
    memory[program_counter]["machine_language_line"]
      ? this.executeOperation()
      : console.log("end of program");
  };

  updateCode = (e) => {
    const { codeInput } = this.state;

    //TODO:instead of setCodeInput, this.setState to set to target value
    //setCodeInput(e.target.value);
    this.setState({ codeInput: e.target.value });
    // console.log(codeInput);
  };

  saveCode = () => {
    const { memory, codeInput, addressCounter } = this.state;

    let filteredLines = [];
    let userCode = codeInput.split("\n");
    // filter out comments
    userCode.forEach((line) => {
      if (line.search("@") == -1 && line !== "") {
        filteredLines.push(line.trim());
      }
    });
    // prepare data address object
    const updatedMemo = memory.map((m, i) => ({
      memoryAddress: i,
      machine_language_line: filteredLines[i],
    }));

    // update the state with the new data address object
    this.setState({
      memory: updatedMemo,
      addressCounter: addressCounter + 1,
    });

    // console.log(
    //   "userCode",
    //   userCode,
    //   "memory",
    //   memory,
    //   "updatedMemo",
    //   updatedMemo
    // );
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
              <RegisterAccumulator
                registers={this.state.registers}
                pc={this.state.program_counter}
              />
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
          <HelpIcon onClick={this.handleOpen} fontSize="large" />
        </Button>
        <HelpScreen open={this.state.open} handleClose={this.handleClose} />
      </MuiThemeProvider>
    );
  }
}
