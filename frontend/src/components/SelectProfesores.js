import React, { useContext, useEffect, useState } from "react";

import { PreferencesContext } from "../context/PreferencesContext";

import api from "../api";

import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";

import Paragraph from "./Paragraph";
import Title from "./Title";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  select: {
    marginTop: 32,
    width: 200,
    fontSize: 22,
    fontWeight: 600,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
  },
  headers: {
    padding: "16px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  clave: {
    padding: "8px",
    borderBottom: "2px solid transparent",
    transition: "all .2s",
    "&:hover": {
      cursor: "pointer",
    },
  },
  claveSelected: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  profesores: {
    display: "flex",
    flexDirection: "column",
  },
}));
const SelectProfesor = () => {
  const classes = useStyles();
  const [clave, setClave] = useState(undefined);
  const { state, dispatch } = useContext(PreferencesContext);

  useEffect(() => {
    const destroyer = () => {};
    const { center } = state;
    const getData = async () => {
      const requests = state.materias.map((materia) => {
        const url = `siiau/${center}/${materia.clave}`;
        return api.get(url);
      });

      const response = await Promise.all(requests);
      const materiasResponse = response.map(({ data }) => {
        return data.data;
      });
      const newMaterias = state.materias.map((materia, i) => {
        const profesores = [];
        materiasResponse[i].forEach(({ professor }) => {
          if (profesores.findIndex((p) => p.nombre === professor) === -1)
            profesores.push({ nombre: professor, selected: true });
        });
        return { ...materia, options: materiasResponse[i], profesores };
      });
      dispatch({ type: "set-materias", value: newMaterias });
      setClave(newMaterias[0].clave);
    };
    getData();
    return destroyer;
  }, []);

  const handleMateriaClick = (materia) => {
    if (state.section !== 3) return;
    setClave(materia.clave);
  };

  const handleProfesorClick = (profesor) => {
    const newProfesor = { ...profesor, selected: !profesor.selected };
    const materias = state.materias.map((materia) => {
      if (materia.clave !== clave) return materia;

      console.log(materia.profesores);
      const profesores = materia.profesores.map((p) => {
        console.log(p, profesor, p.nombre === profesor.nombre);
        return p.nombre === profesor.nombre ? newProfesor : p;
      });
      return { ...materia, profesores };
    });

    dispatch({ type: "set-materias", value: materias });
  };

  const headers = state.materias.map((materia, i) => {
    return (
      <span
        onClick={() => handleMateriaClick(materia)}
        className={clsx(
          classes.clave,
          materia.clave === clave && classes.claveSelected
        )}
      >
        {materia.clave}
      </span>
    );
  });

  const list =
    state.materias.find((materia) => materia.clave === clave)?.profesores || [];

  const profesoresComponent = list.map((profesor) => (
    <FormControlLabel
      disabled={state.section !== 3}
      onChange={() => handleProfesorClick(profesor)}
      control={<Checkbox checked={profesor.selected} name={profesor.nombre} />}
      label={profesor.nombre}
    />
  ));

  return (
    <div className={classes.root} id="3">
      <Title>Profesores</Title>
      <Paragraph>Elige los profesores por cada materia</Paragraph>
      <div className={classes.headers}>{headers}</div>
      <div className={classes.profesores}>
        {profesoresComponent || (
          <Paragraph>No hay profesores para esta materia</Paragraph>
        )}
      </div>
    </div>
  );
};

export default SelectProfesor;
