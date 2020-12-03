import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Accordion, makeStyles } from "@material-ui/core";
import theme from "../theme";
import { borders } from "@material-ui/system";
import StyledSelect from "../components/StyledSelect";
import * as data from '../shared/data/materias.json';
import InputLabel from "@material-ui/core/InputLabel";




const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      background: theme.palette.primary.dark,
      borderRadius: 10,
    },
  },

  sideLogo: {
    color: "secondary",

    font: theme.palette.secondary.light,
  },

  multilineColor: {
    color: theme.palette.secondary.light,
  },

  floatingLabelFocusStyle: {
    color: theme.palette.secondary.light,
  },

}));


const word = data.profesores;

const Preferences = () => {
  const classes = useStyles();
  const [nrc, setNrc] = useState("");
  const [teacher, setTeacher] = useState("");
  const [selected, setSelected] = useState(null);

  const handleWordChange = (event, value) => {
    setSelected(value.props.value);
  }

  const onChange = (e) => {
    setNrc(e.target.value);
    //setTeacher(event.target.value);
  };

  const onChangeTeacher = (e) => {
    setTeacher(e.target.value);
  };

  const handleOnChange = (event, value) => {
    setSelected(value.props.value);
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.sideLogo}
        InputProps={{
          className: classes.multilineColor,
        }}
        onChange={onChange}
        id="standard-basic"
        InputLabelProps={{
          className: classes.floatingLabelFocusStyle,
        }}
        variant="filled"
        label="NRC"
      />
      <br></br>
      <div style={{ width: "50%" }}>
      <StyledSelect
          options={word}
          value={selected}
          handleChange={handleWordChange}
          nullInitialValue
        />
      </div> 
      <Button disabled={!nrc} color="secondary" variant="contained">
        Continuar
      </Button>
    </form>
  );
};

export default Preferences;
