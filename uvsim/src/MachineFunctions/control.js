// Functions for handling IO and code flow control functions

// TRAP operation (covers write)
export function handleTrap(setRunning, consoleLines, setConsoleLines) {
  setConsoleLines(
    consoleLines,
    setConsoleLines,
    "Running a TRAP operation...."
  );
  console.log("hit a TRAP HALT command, execution stopped");
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
