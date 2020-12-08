import { generateDateLabels } from "./generateLabels";

const mergeHorarios = (base, current) => {
  const labels = generateDateLabels(current);
  if (labels.some((label) => base[label] !== undefined)) return undefined;
  labels.forEach((label) => (base[label] = current));
  return base;
};

const isValidHorario = (materia, parent) => {
  const profesor = parent.profesores.find(
    (profesor) => profesor.nombre === materia.professor
  );
  return profesor.selected;
};

export const generateHorarios = (materias) => {
  const allCombinations = [];

  const _generateHorarios = (base, current) => {
    if (current === materias.length) {
      allCombinations.push(base);
      return;
    }
    materias[current].options.forEach((option) => {
      if (!isValidHorario(option, materias[current])) return;
      const baseCopy = JSON.parse(JSON.stringify(base));
      const nextHorario = mergeHorarios(baseCopy, option);
      if (nextHorario === undefined) return;
      _generateHorarios(nextHorario, current + 1);
    });
  };

  _generateHorarios({}, 0);

  const allCombinatiosFormated = allCombinations.map((obj) => {
    const materias = [];
    for (let date in obj) materias.push(obj[date]);
    return materias;
  });
  return allCombinatiosFormated;
};
