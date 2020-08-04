/*
Arithmetic operation:
Add = 30	Add a word from a specific location in memory to the word in the accumulator (leave the result in the accumulator) 
SUBTRACT = 31	Missing
DIVIDE = 32		Missing
MULTIPLY = 33	Missing
*/

export function handleAnd(line, registers, setRegisters, setConsoleLines) {
  setConsoleLines("Running an AND operation....");
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;
  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    // AND immediate_val with source1 register val (stored as a state in app.js)
    newVal = immediate_val & source1Val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  } else {
    let source2Register = "r" + line.substring(line.length - 3);
    let source2Val = registers[source2Register].value;
    newVal = source1Val & source2Val;
    // AND source1 with source2 and then put that value in the destination register
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  }
}

export function handleAdd(line, registers, setRegisters) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;
  //   console.log(
  //     `dst:${destination} src:${source1} immediate:${line.substring(10, 11)}`
  //   );

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    // ADD immediate_val to source1 register val (stored as a state in app.js)
    newVal = immediate_val + source1Val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  } else {
    let source2Register = "r" + line.substring(line.length - 3);
    let source2Val = registers[source2Register].value;
    newVal = source1Val + source2Val;
    console.log(
      `source1val ${source1Val} source2val ${source2Val} newval ${newVal}`
    );
    // ADD source1 and source2 and then put that value in the destination register
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  }
}

export function handleSubtract(line, registers, setRegisters) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers.source1.value;
  let immediate = line.substring(10, 11);
  let newVal;
  // console.log(`dst:${destination} src:${source1} immediate:${line.substring(10, 11)}`)
  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    // ADD immediate_val to source1 register val (stored as a state in app.js)
    newVal = source1Val - immediate_val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  } else {
    let source2Register = "r" + line.substring(line.length - 3);
    let source2Val = registers[source2Register].value;
    newVal = source1Val - source2Val;
    // Subtract source1 from source2 and then put that value in the destination register
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  }
}

export function handleMultiply(line, registers, setRegisters) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;
  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    // multiply immediate_val and source1 then store in register val
    newVal = source1Val * immediate_val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  } else {
    let source2Register = "r" + line.substring(line.length - 3);
    let source2Val = registers[source2Register].value;
    // multiply source1 and source2 and then put that value in the destination register
    newVal = source1Val * source2Val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  }
}

export function handleDivide(line, registers, setRegisters) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;
  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    // divide source1 by immediate_val then store in register val
    newVal = source1Val / immediate_val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  } else {
    let source2Register = "r" + line.substring(line.length - 3);
    let source2Val = registers[source2Register].value;
    // divide source1 by source2 and then put that value in the destination register
    newVal = source1Val / source2Val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  }
}

export function handleModulus(line, registers, setRegisters) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;
  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    // mod source1 by immediate value then store in register val
    newVal = source1Val % immediate_val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  } else {
    let source2Register = "r" + line.substring(line.length - 3);
    let source2Val = registers[source2Register].value;
    // mod source1 by source2 and then put that value in the destination register
    newVal = source1Val % source2Val;
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  }
}

export function handleExponent(line, registers, setRegisters) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;
  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    // source1 to the power of immediate value then store in register val
    newVal = Math.Pow(source1Val, immediate_val);
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  } else {
    let source2Register = "r" + line.substring(line.length - 3);
    let source2Val = registers[source2Register].value;
    // source1 to the power of source2 and then put that value in the destination register
    newVal = Math.Pow(source1Val, source2Val);
    setRegisters({
      ...registers,
      [destination]: {
        value: newVal,
      },
    });
  }
}
