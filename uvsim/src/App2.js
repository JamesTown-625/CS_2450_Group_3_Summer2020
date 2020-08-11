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
  handleAnd,
  handleNot,
  handleAdd,
  handleSubtract,
  handleMultiply,
  handleDivide,
  handleModulus,
  handleExponent,
} from "./MachineFunctions/arithmetic";
import {
  handleTrap,
  handleBranch,
  handleLoad,
  handleStore,
} from "./MachineFunctions/control";
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
    recentRegister: "",
    addressCounter: 0,
    program_counter: 0,
    codeInput: "",
    prevInput: "",
    consoleLines: [],
    running: false,
    open: false,
    fileReader: new FileReader(),
    helpWindow: 0,
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
    const { memory, running, registers, program_counter } = this.state;
    let pcOffset;
    let newProgramCounterVal;
    let newRegisterList = this.state.registers;
    console.log("in executeOperation");
    let line = memory[this.state.program_counter].machine_language_line;
    let opcode = memory[
      this.state.program_counter
    ].machine_language_line.substring(0, 4);

    console.log(`pc ${this.state.program_counter} line ${line}`);
    switch (opcode) {
      // BRANCH
      case "0000":
        pcOffset = handleBranch(line, this.state.recentRegister, registers);
        newProgramCounterVal = program_counter + pcOffset;
        break;

      // ADD
      case "0001":
        const add = handleAdd(line, registers);
        value = add.newVal;
        destination = add.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;

      // LD
      case "0010":
        const load = handleLoad(line, memory);
        newRegisterList = this.state.registers;
        newRegisterList[load.destinationRegister].value =
          load.memorySourceValue;
        this.setState({
          recentRegister: load.destinationRegister,
          registers: newRegisterList,
        });
        break;

      // ST
      case "0011":
        if (!parseInt(line.substring(4, 7), 2)) {
          break;
        }
        const store = handleStore(line, registers);
        let newMemory = this.state.memory;
        newMemory[store.memoryDestination].machine_language_line =
          store.sourceRegisterValue;
        this.setState({
          memory: newMemory,
        });
        break;

      // AND
      case "0101":
        const and = handleAnd(line, registers);
        value = and.newVal;
        destination = and.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;

      // NOT
      case "0101":
        const not = handleNot(line, registers);
        value = not.newVal;
        destination = not.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;

      // TRAP
      case "1111":
        const trap = handleTrap(line, this.state.consoleLines);
        if (trap === "HALT") {
          this.setState({ running: false });
        }
        break;

      // NON LC3 NATIVE OPCODES (added functionality)
      case "0002":
        const subtract = handleSubtract(line, registers);
        value = subtract.newVal;
        destination = subtract.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;

      case "0003":
        const multiply = handleMultiply(line, registers);
        value = multiply.newVal;
        destination = multiply.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;
      case "0004":
        const divide = handleDivide(line, registers);
        value = divide.newVal;
        destination = divide.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;
      case "0005":
        const modulus = handleModulus(line, registers);
        value = modulus.newVal;
        destination = modulus.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;
      case "0006":
        const exponent = handleExponent(line, registers);
        value = exponent.newVal;
        destination = exponent.destination;
        newRegisterList[destination].value = value;
        this.setState({
          recentRegister: destination,
          registers: newRegisterList,
        });
        break;
      default:
    }

    let tempCounter = this.state.program_counter;
    tempCounter = tempCounter + 1;

    pcOffset
      ? this.setState({
          ...program_counter,
          program_counter: newProgramCounterVal,
        })
      : this.setState({
          ...program_counter,
          program_counter: program_counter + 1,
        });

    console.log("\n\n\n\n\n\n\n");
  };

  handleRun = () => {
    const { running, memory } = this.state;

    if (memory[0].machine_language_line == "0000000000000000") {
      console.log("All 0's... returning");
      return;
    }

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
    console.log("closing window");
    this.setState({ helpWindow: this.state.helpWindow + 1 });
  };

  handleStep = () => {
    const { memory, program_counter } = this.state;
    memory[program_counter]["machine_language_line"]
      ? this.executeOperation()
      : console.log("end of program");
  };

  updateCode = (e) => {
    let tempCode = this.state.codeInput;
    tempCode = tempCode + `\n` + e.target.value;

    this.setState({ codeInput: tempCode });
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
  };

  handleFileRead = (e) => {
    const content = this.fileReader.result;
    console.log(content);
    console.log("handleFileRead");
  };

  handleFile = (file) => {
    let tempReader = new FileReader();
    tempReader.onloadend = () => {
      const content = tempReader.result;
      console.log(content);
      this.setState({ codeInput: content });
    };

    tempReader.readAsText(file);
    console.log("handlefile");
    this.setState({ fileReader: tempReader });
  };

  render() {
    const { consoleLines, codeInput, memory } = this.state;

    return (
      <MuiThemeProvider theme={mainTheme}>
        <Header />
        <div>
          <div className="container">
            <div className="leftGrid">
              <RegisterAccumulator
                registers={this.state.registers}
                pc={this.state.program_counter}
              />
              <Console
                handleRun={this.handleRun}
                handleStep={this.handleStep}
                updateCode={this.updateCode}
                codeInput={codeInput}
                saveCode={this.saveCode}
                consoleLines={consoleLines}
                codeInput={this.state.codeInput}
                handleFile={this.handleFile}
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
        <HelpScreen
          key={this.state.helpWindow}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </MuiThemeProvider>
    );
  }
}
