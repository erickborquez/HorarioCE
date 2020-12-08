import React, { useContext, useEffect, useState } from "react";

import { PreferencesContext } from "../context/PreferencesContext";

import Paragraph from "./Paragraph";
import Title from "./Title";

import { IconButton, makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {},
  select: {
    marginTop: 38,
    width: 400,
    fontSize: 22,
    fontWeight: 600,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
  },
  materias: {
    margin: "16px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  materia: {
    borderRadius: 8,
    padding: "4px 10px 4px 25px",
    background: theme.palette.primary.main,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  materiaNombre: {
    width: 250,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  deleteIcon: {
    color: "white",
  },
}));

const SelectMaterias = () => {
  const classes = useStyles();

  const { state, dispatch } = useContext(PreferencesContext);
  const [center, setCenter] = useState("asfasf");
  const [materias, setMaterias] = useState(["asfasf"]);
  const [value, setValue] = useState(materias[0]);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    if (state.section !== 2) return;
    if (center === state.center) return;
    setCenter(state.center);
    setMaterias([]);
    setInputValue(undefined);
    setValue(undefined);

    const update = async () => {
      const { materias } = await import(
        `../shared/materias/${state.center}.json`
      );
      setMaterias(materias);
    };
    update();
  }, [state, center]);

  const handleChange = (event, value) => {
    setValue(undefined);
    setInputValue(undefined);
    if (value) dispatch({ type: "add-materia", value });
  };
  const handleInputChange = (event, value) => {
    setInputValue("");
  };

  const handleRemoveMateria = (materia) => {
    dispatch({ type: "remove-materia", value: materia });
  };

  return (
    <div className={classes.root} id="2">
      <Title>Materias</Title>
      <Paragraph>Elige las materias que deseas cursar</Paragraph>
      <Autocomplete
        value={value}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        id={`materia-autocomplete-${center}`}
        disabled={state.section !== 2}
        options={materias}
        getOptionLabel={(materia) => `${materia.clave} ${materia.nombre}`}
        renderInput={(params) => (
          <TextField
            placeholder="Elige una materia"
            {...params}
            className={classes.select}
            variant="outlined"
          />
        )}
      ></Autocomplete>
      {state.materias.length > 0 && (
        <div className={classes.materias}>
          <Paragraph>Materias elegidas</Paragraph>

          {state.materias.map((materia) => (
            <div className={classes.materia}>
              <span
                className={classes.materiaNombre}
              >{`${materia.clave} ${materia.nombre}`}</span>
              <IconButton
                className={classes.deleteIcon}
                size="small"
                aria-label="delete"
                onClick={() => handleRemoveMateria(materia)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMaterias;
