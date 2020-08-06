// Functions for handling IO and code flow control functions

// TRAP operation (covers write)
export function handleTrap(setRunning, consoleLines, setConsoleLines) {
  //TODO:instead of setConsoleLines...idk?! will revisit

  setConsoleLines(
    consoleLines,
    setConsoleLines,
    "Running a TRAP operation...."
  );
  console.log("hit a TRAP HALT command, execution stopped");
  //TODO:instead of setRegister... return the value newValue, then app.jS will use that value to set state
  setRunning(false);
}

// Machine Code Flow Control
export function handleBranch() {}

export function handleBranchNeg() {}

export function handleBranchZero() {}

export function handleHalt() {}

// storage interfacing
export function handleLoad() {}

export function handleStore() {}
