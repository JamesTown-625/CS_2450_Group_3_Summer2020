// Functions for handling IO and code flow control functions

// TRAP operation (covers write)
export function handleTrap(line, consoleLines) {
  let trapVector = parseInt(line.substring(line.length - 8), 2).toString(16);
  switch (trapVector) {
    // PUTS
    case "22":
    // WRITE STORED STRING FROM LAST ACCESSED REGISTER TO CONSOLE
    // HALT
    case "25":
      return "HALT";
    default:
  }
  return {};
}

// Machine Code Flow Control
export function handleBranch(line, recentRegister, registers) {
  const pcOffset = parseInt(line.substring(line.length - 9), 2);
  const n = !!parseInt(line.substring(4, 5), 2);
  const z = !!parseInt(line.substring(5, 6), 2);
  const p = !!parseInt(line.substring(6, 7), 2);
  console.log(`offset ${pcOffset} n ${n} z ${z} p ${p}`);
  if ((n && z && p) || (n && z) || (z && p) || (n && p)) {
    // branch condition is impossible with the above conditions, return 0
    return 0;
  }
  if (n && registers[recentRegister].value < 0) {
    return pcOffset;
  }
  if (z && registers[recentRegister].value === 0) {
    return pcOffset;
  }
  if (p && registers[recentRegister].value > 0) {
    return pcOffset;
  }
  return 0;
}

// storage interfacing
export function handleLoad(line, memory) {
  let destinationRegister = "r" + line.substring(4, 7);
  let memoryLocation = parseInt(line.substring(line.length - 9), 2);
  let memorySourceValue = memory[memoryLocation].machine_language_line;
  return { destinationRegister, memorySourceValue };
}

export function handleStore(line, registers) {
  let sourceRegister = "r" + line.substring(4, 7);
  let sourceRegisterValue = registers[sourceRegister].value;
  let memoryDestination = parseInt(line.substring(line.length - 9), 2);
  return { memoryDestination, sourceRegisterValue };
}
