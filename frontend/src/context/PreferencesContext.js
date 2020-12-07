import React, { createContext, useReducer } from "react";

export const PreferencesContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "next": {
      return { ...state, section: state.section + 1 };
    }
    case "back": {
      return { ...state, section: state.section - 1 };
    }
    case "center": {
      return { ...state, center: action.value, materias: [] };
    }
    case "add-materia": {
      if (
        state.materias.find((materia) => materia.clave === action.value.clave)
      )
        return state;
      return { ...state, materias: [...state.materias, action.value] };
    }
    case "remove-materia": {
      const materias = state.materias.filter(
        (materia) => materia.clave !== action.value.clave
      );
      return { ...state, materias };
    }

    default: {
      console.warn("Preferences dispatch called with wrong type");
    }
  }
};

const initialState = { center: "CUCEI", section: 1, materias: [] };

const PreferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PreferencesContext.Provider value={{ state, dispatch }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesProvider;
