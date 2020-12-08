export const generateDateLabel = ({ day, start, end }) => {
  return `${day}-${start}-${end}`;
};

export const generateDateLabels = ({ dates }) => {
  const labels = [];
  dates.forEach((date) => {
    const label = generateDateLabel(date);
    if (labels.indexOf(label) === -1) labels.push(label);
  });
  return dates.map(generateDateLabel);
};
