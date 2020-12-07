import React, { useContext, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";

import Banner from "../components/Banner";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import SelectCenter from "../components/SelectCenter";
import SelectMaterias from "../components/SelectMaterias";
import { PreferencesContext } from "../context/PreferencesContext";

import { getMateria } from "../shared/requests";
import { normalizeMateria } from "../shared/normalize";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    maxWidth: 1200,
    padding: 16,
    textAlign: "center",
    margin: "0 auto",
    marginBottom: 80,
  },
  subtitle: {
    fontFamily: "Acme, sans-serif",
    lineHeight: "25px",
    fontWeight: "normal",
    fontSize: "50px",
    color: theme.palette.primary.dark,
  },
}));

const Main = () => {
  const classes = useStyles();
  const [section, setSection] = useState(1);
  const { state, dispatch } = useContext(PreferencesContext);

  useEffect(() => {
    const init = async () => {
      const rawMateria = getMateria("I7020");
      console.log(rawMateria);
      const materiaNormalized = normalizeMateria(rawMateria);
      console.log(materiaNormalized);
    };
    init();
  }, []);

  useEffect(() => {
    if (section === state.section) return;

    const element = document.getElementById(state.section);
    setTimeout(() => {
      if (element) element.scrollIntoView();
    }, 200);
    setSection(state.section);
  }, [section, state]);

  return (
    <div className={classes.root}>
      <Banner />
      <div className={classes.container}>
        <Title>¿Cómo funciona?</Title>
        <Paragraph>
          Horario CE consulta la oferta academica de la universidad, selecciona
          tus materias junto con las preferencias para tu horario como las horas
          en las que quieres asistir y tus profesores favoritos, luego de esto
          se te presentaran las mejores opciones basadas en tus preferencias.
        </Paragraph>
      </div>
      <Section
        dark
        section={1}
        open
        disabled={section !== 1}
        onNext={() => dispatch({ type: "next" })}
      >
        <SelectCenter />
      </Section>
      <Section
        section={2}
        open={section >= 2}
        disabled={section > 2 && section !== 2}
        nextDisabled={state.materias.length === 0}
        onNext={() => dispatch({ type: "next" })}
        onBack={() => dispatch({ type: "back" })}
      >
        <SelectMaterias />
      </Section>
      <Section dark section={3}>
        asfasfasf
      </Section>
    </div>
  );
};

export default Main;
