import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from '@material-ui/core/styles';
import AddressTable from "./Components/AddressTable"
import RegisterAccumulator from "./Components/RegisterAccumulator"
import Console from "./Components/Console"
import Header from "./Components/Header"
import mainTheme from "./Styles/mainTheme"
import "./Styles/global.css"
import { test } from "./functions"

const useStyles = makeStyles((theme) => ({

    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '30px'
    },
    leftGrid: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridGap: '30px'
    }
}));

const App = () => {

    const classes = useStyles();

    const [memory, setMemory] = useState([
        // example line of machine code - 0001 add decimal #10 to register 1
        { memoryAddress: "0000", machine_language_line: "0001001001101010" },
        { memoryAddress: "0001", machine_language_line: "0001001001101010" },
        { memoryAddress: "0002", machine_language_line: "0001001001101010" },
        { memoryAddress: "0003", machine_language_line: "0001001001101010" },
    ]);
    const [program_counter, setProgramCounter] = useState(0);
    //https://dev.to/brettblox/react-hooks-usestate-43en#:~:text=Updating%20Arrays%20and%20Objects,found%20in%20class%2Dbased%20components.
    const [registers, setRegisters] = useState({
        jerry: {
            firstName: 'Jerry',
            lastName: 'Garcia',
            address: {
                street: '710 Ashbury Street',
                city: 'San Francisco',
                state: 'CA',
                zip: '94117'
            }
        },
        jim: {
            firstName: 'Jim',
            lastName: 'Morrison',
            address: {
                street: '8021 Rothdell Trail',
                city: 'Los Angeles',
                state: 'CA',
                zip: '90046'
            }
        }

    });
    const [codeInput, setCodeInput] = useState('');
    const [x, changeX] = useState(10);
    const [y, changeY] = useState(0)

    useEffect(() => {

    }, [y])

    const handleRun = () => {

        let line = memory[program_counter].machine_language_line;
        let opcode = memory[program_counter].machine_language_line.substring(0, 4);
        console.log(`opcode:${opcode}`)
        console.log('running test func, y is currently 0')
        test(y, changeY)
        console.log(`y is now ${y}`)
        switch (opcode) {

            // ADD
            case "0001":
                // code block
                //handleAdd(line)

                break;
            default:
            // code block
        }
    }


    const renderTable = () => {
        changeX(1);
        console.log(" re-rendering table");
    };

    const openCodeWindow = () => {
        //Pop up window on click
        console.log('test')
    }

    const updateCode = (e) => {
        setCodeInput(e.target.value)
        console.log(codeInput)
    }

    const saveCode = (e) => {
        //Save machine code that's entered into window
        //COMMENTS ARE CURRENTLY NOT SUPPORTED
        let userCode = codeInput.split('\n');
        let addressCounter = 0;
        // if the user puts more lines than we have current address's we push new spots until they are equal
        userCode.forEach(u => {
            //TODO add memory Address logic
            if (userCode.length !== memory.length) {
                setMemory([...memory, { memory_address: addressCounter, machine_language_line: u }])
                addressCounter++;
            }
            return
        })

        // the code line length should be equal to the amount of memory spots we have. So this just updates
        memory.forEach((m, i) => {
            let userInput = x[i] || null
            setMemory(m.machine_language_line = userInput)

        });
    }

    return (
        <MuiThemeProvider theme={mainTheme}>
            <Header />
            <div>
                <div>Test</div>
                <div className={classes.container}>
                    <div className={classes.leftGrid}>
                        <RegisterAccumulator />
                        <Console handleRun={handleRun} updateCode={updateCode} codeInput={codeInput} saveCode={saveCode} openCodeWindow={openCodeWindow} />
                    </div>
                    <div>
                        <AddressTable key={x} memory={memory} />
                    </div>
                </div >
            </div>
        </MuiThemeProvider>
    );
};

export default App;

/*
const handleAdd = (line) => {
        let destination = line.substring(4, 7);
        let source1 = line.substring(7, 10);
        let immediate = line.substring(10, 11);
        console.log(`dst:${destination} src:${source1} immediate:${line.substring(10, 11)}`)

        if (parseInt(immediate)) {

            let immediate_val = parseInt(line.substring(11), 2);
            let reg = parseInt(destination)
            console.log(`immediate value: ${immediate_val}`)
            console.log(`destination: ${destination}`)
            console.log(`to register: ${reg}`)
            let destRegister = "r" + destination
            console.log(`register: ${destRegister}`)

            // ADD immediate_val to r1 (stored as a state in app.js)
            // console.log(registers);


            console.log(registers)
        }
        else {
            console.log('not immediate mode')
            let source2 = line.substring(line.length - 3)
            console.log(source2)
            // ADD source1 and source2 and then put that value in the destination register
        }
    }

*/