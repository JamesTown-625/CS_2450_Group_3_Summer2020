/*
Arithmetic operation:
Add = 30	Add a word from a specific location in memory to the word in the accumulator (leave the result in the accumulator) 
SUBTRACT = 31	Missing
DIVIDE = 32		Missing
MULTIPLY = 33	Missing
*/

export function handleAnd(line, registers) {
  console.log("handleAdd");
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    newVal = immediate_val & source1Val;
    return { destination, newVal };
  }

  let source2Register = "r" + line.substring(line.length - 3);
  let source2Val = registers[source2Register].value;
  newVal = source1Val & source2Val;
  return { destination, newVal };
}

export function handleNot(line, registers) {
  console.log("handleAdd");
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let newVal;
  newVal = ~source1Val;
  return { destination, newVal };
}

export function handleAdd(line, registers) {
  console.log("handleAdd");
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    newVal = immediate_val + source1Val;
    return { destination, newVal };
  }

  let source2Register = "r" + line.substring(line.length - 3);
  let source2Val = registers[source2Register].value;
  newVal = source1Val + source2Val;
  return { destination, newVal };
}

export function handleSubtract(line, registers) {
  console.log("handlesubtract");
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    newVal = source1Val - immediate_val;
    return { destination, newVal };
  }

  let source2Register = "r" + line.substring(line.length - 3);
  let source2Val = registers[source2Register].value;
  newVal = source1Val - source2Val;
  console.log(
    `source1Val ${source1Val} source2Val ${source2Val} newVal ${newVal}`
  );
  return { destination, newVal };
}

export function handleMultiply(line, registers) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    newVal = source1Val * immediate_val;
    return { destination, newVal };
  }

  let source2Register = "r" + line.substring(line.length - 3);
  let source2Val = registers[source2Register].value;
  newVal = source1Val * source2Val;
  return { destination, newVal };
}

export function handleDivide(line, registers) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    newVal = source1Val / immediate_val;
    return { destination, newVal };
  }

  let source2Register = "r" + line.substring(line.length - 3);
  let source2Val = registers[source2Register].value;
  newVal = source1Val / source2Val;
  return { destination, newVal };
}

export function handleModulus(line, registers) {
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    newVal = source1Val % immediate_val;
    return { destination, newVal };
  }

  let source2Register = "r" + line.substring(line.length - 3);
  let source2Val = registers[source2Register].value;
  newVal = source1Val % source2Val;
  return { destination, newVal };
}

export function handleExponent(line, registers) {
  console.log("handleExponent");
  let destination = "r" + line.substring(4, 7);
  let source1 = "r" + line.substring(7, 10);
  let source1Val = registers[source1].value;
  let immediate = line.substring(10, 11);
  let newVal;

  if (parseInt(immediate)) {
    let immediate_val = parseInt(line.substring(11), 2);
    newVal = Math.pow(source1Val, immediate_val);
    return { destination, newVal };
  }

  let source2Register = "r" + line.substring(line.length - 3);
  let source2Val = registers[source2Register].value;
  console.log(`source2Val ${source2Val}`);
  newVal = Math.pow(source1Val, source2Val);
  return { destination, newVal };
}
