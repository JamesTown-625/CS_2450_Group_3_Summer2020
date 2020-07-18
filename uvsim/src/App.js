import React from "react";
import { Button, Input, Container, Label } from "@material-ui/core";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // memory state will be our {memoryAddress: '', memoryVal: ''} && it will act like real memory
    // memoryVal state is the value that we want to save to memory
    // seachVal is the memoryAddress that we want to find with it's value
    // found is the value that is found.
    this.state = {
      memory: [],
      memoryVal: "",
      searchVal: "",
      found: "",
    };
    //binding each function
    this.handleInput = this.handleInput.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleFindChange = this.handleFindChange.bind(this);
    this.handleFind = this.handleFind.bind(this);
  }
  // handles the Add Button input
  handleInput(e) {
    e.preventDefault();
    // array spreading to push a new object with the memoryVal and memoryAddress
    this.setState({
      memory: [...this.state.memory, { memoryAddress: Math.floor(Math.random() * 10000), memoryVal: this.state.memoryVal }]
    });
    //click twice to see the memory address
    console.log(this.state.memory)

  }

  // handles the Find button
  handleFind(e) {
    e.preventDefault();
    // logic for taking the memory address and seeing if it matches any in the this.state.memory array
    this.state.memory.find((m) => {
      if (m.memoryAddress === parseInt(this.state.searchVal)) {
        this.setState({
          found: m.memoryVal,
        });
      }
    });
  }
  // handles the input value for the first input
  handleAddChange(e) {
    this.setState({
      memoryVal: e.target.value,
    });
  }
  // handles the input value for the second input
  handleFindChange(e) {
    this.setState({
      searchVal: e.target.value,
    });
  }
  render() {
    //destructuring state for readability (preference: I can remove this if you don't like it)
    const { memoryVal, memory, searchVal, found } = this.state;
    return (
      <div className="App">
        <Container className="title">
          <h1> CS2450 UVISM</h1>
        </Container>
        <Container className="demo">
          <h2> Add Value </h2>
          <Input value={memoryVal} onChange={this.handleAddChange} />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleInput}
          >
            Add
          </Button>
        </Container>

        <Container>
          <h2> Find Memory Value </h2>
          <Input value={searchVal} onChange={this.handleFindChange} />
          <Button variant="contained" color="primary" onClick={this.handleFind}>
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
      </div>
    );
  }
}

export default App;