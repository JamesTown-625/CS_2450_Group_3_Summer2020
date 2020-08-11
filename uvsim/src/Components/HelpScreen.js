import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles({
  box: {
    padding: "20px",
    width: "80%",
    height: "550px",
    margin: "0 auto",
    marginTop: "150px",
    maxWidth: "650px",
  },
  textField: {
    color: "white",
    width: "100%",
    backgroundColor: "#263238",
    paddingLeft: "5px",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
});

const HelpScreen = (props) => {
  const classes = useStyles();
  let template = [
    `@ ORIG x0000\n0011000000000000\n\n@ add decimal 10 to register 1 (immediate mode\n0001001001101010\n@ add the contents of register 1 to register 2 (not immediate mode)\n0001010001000010\n\n@ add decimal 10 to register 4 (immediate mode)\n0001100100101010\n@ subtract decimal 5 to register 1 (immediate mode)\n0002001001100101\n@ subtract the value of register 2 from register 1 (not immediate mode)\n0002010001000010\n\n@ multiply register 2 by 2 (immediate mode)\n0003010010100010\n@ divide register 2 by 2 (not immediate mode)\n0004010010100010\n\n@ mod register 2 by 3 (immediate mode)\n0005010010100011\n@ register 1 to the power of the value of register 3 (not immediate mode)\n0006001001000011\n\n@ TRAP- HALT\n1111000000100101`,
    `@ ORIG x0000\n0011000000000000\n@ add decimal 10 to register 1 (immediate mode)\n0001001001101010\n\n@ branch past the following TRAP HALT command if r1 is positive\n0000001000000010\n@ TRAP- HALT\n1111000000100101\n\n@ add decimal 10 to register 1 (immediate mode)\n0001001001101010\n@ TRAP- HALT\n1111000000100101`,
    `@ ORIG x0000\n0011000000000000\n@ add decimal 10 to register 1 (immediate mode)\n0001001001101010\n\n@ store the value of register 1 to memory address 32\n0011001000100000\n@ load the value from memory address 32 and store it in register 2\n0010010000100000\n\n@ TRAP- HALT\n1111000000100101`,
    `@ ORIG x0000\n0011000000000000\n@ add decimal 9 to register 1 (immediate mode)\n0001001001101001\n\n@ add half of the ASCII offset to register 1 (immediate mode)\n0001001001111000\n@ add half of the ASCII offset to register 1 (immediate mode)\n0001001001111000\n\n@ TRAP- PUTS\n1111000000100010\n@ TRAP- HALT\n1111000000100101`,
  ];
  const [selectedTemplate, setSelectedTemplate] = useState([template[0]]);
  const [selectedOne, setSelectedOne] = useState("contained");
  const [selectedTwo, setSelectedTwo] = useState("outlined");
  const [selectedThree, setSelectedThree] = useState("outlined");
  const [selectedFour, setSelectedFour] = useState("outlined");

  const chooseTemplateOne = () => {
    setSelectedTemplate(template[0]);
    setSelectedOne("contained");
    setSelectedTwo("outlined");
    setSelectedThree("outlined");
    setSelectedFour("outlined");
  };

  const chooseTemplateTwo = () => {
    setSelectedTemplate(template[1]);
    setSelectedOne("outlined");
    setSelectedTwo("contained");
    setSelectedThree("outlined");
    setSelectedFour("outlined");
  };

  const chooseTemplateThree = () => {
    setSelectedTemplate(template[2]);
    setSelectedOne("outlined");
    setSelectedTwo("outlined");
    setSelectedThree("contained");
    setSelectedFour("outlined");
  };

  const chooseTemplateFour = () => {
    setSelectedTemplate(template[3]);
    setSelectedOne("outlined");
    setSelectedTwo("outlined");
    setSelectedThree("outlined");
    setSelectedFour("contained");
  };

  /*
    @ ORIG x0000
    0011000000000000
    @ add decimal 10 to register 1 (immediate mode)
    0001001001101010
    @ add the contents of register 1 to register 2 (not immediate mode)
    0001010001000010
    @ TRAP- HALT
    1111000000100101
    */
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      className={classes.modal}
    >
      <Paper className={classes.box}>
        <div className={classes.header}>Need Help? Here's some test code:</div>
        <Button
          color="primary"
          variant={selectedOne}
          onClick={chooseTemplateOne}
        >
          Arithmetic Operations
        </Button>
        <Button
          color="primary"
          variant={selectedTwo}
          onClick={chooseTemplateTwo}
        >
          Control Flow
        </Button>
        <Button
          color="primary"
          variant={selectedThree}
          onClick={chooseTemplateThree}
        >
          Loading and Storing
        </Button>
        <Button
          color="primary"
          variant={selectedFour}
          onClick={chooseTemplateFour}
        >
          Print to console
        </Button>
        <TextField
          multiline
          rows={20}
          className={classes.textField}
          defaultValue={selectedTemplate}
        ></TextField>
      </Paper>
    </Modal>
  );
};

export default HelpScreen;
