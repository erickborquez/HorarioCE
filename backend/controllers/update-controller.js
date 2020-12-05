const axios = require("axios");
const fs = require("fs");

const { centros } = require("../shared/centros.json");

const SIIAU_URL =
  "http://consulta.siiau.udg.mx/wco/scpcata.cataxcu?planp=Y&cup=";
const SIIAU_URL_END = "&ordenp=1&mostrarp=5&tipop=D";

let regExp = /"[A-Z].{4}","[A-Z]+,?\s[A-Z ]*"/g;
let regClave = /"([A-Z].{4})"/g;
let regNombre = /"([A-Z]+,?\s[A-Z ]*)"/g;

const getOferta = async (centro) => {
  const url = SIIAU_URL + centros[centro] + SIIAU_URL_END;
  let data;
  try {
    const res = await axios.get(url);
    data = res.data;
  } catch (e) {
    throw new Error(e);
  }
  return data;
};

const formatOferta = (oferta) => {
  const matched = oferta.match(regExp);
  const materias = [];
  console.log(matched.length);
  matched.forEach((materia) => {
    const clave = regClave.exec(materia);
    const nombre = regNombre.exec(materia);
    if (clave && nombre) materias.push({ clave: clave[1], nombre: nombre[1] });
  });
  return materias;
};

const saveOferta = (centro, materias) => {
  fs.writeFileSync(
    `shared/materias-${centro}.json`,
    JSON.stringify({ materias }, null, 4)
  );
};

const _updateCenter = (centro, oferta) => {
  const formatedOferta = formatOferta(oferta);
  saveOferta(centro, formatedOferta);
  return formatedOferta;
};

const updateCenter = async (req, res) => {
  const { centro } = req.params;
  try {
    const oferta = await getOferta(centro);
    const materias = _updateCenter(centro, oferta);
    res.status(200).json({
      data: materias,
    });
  } catch (e) {
    res.status(500).json({
      message: "Hubo un error :(",
      error: e,
    });
  }
};

// const updateAll = async (req, res) => {
//   const data = [];
//   for (let centro in centros) {
//     try {
//       const oferta = await getOferta(centro);
//       const materias = _updateCenter(centro, oferta);
//       data.push({ centro, materias });
//     } catch (e) {
//       res.status(500).json({
//         message: "Hubo un error :(",
//         error: e,
//       });
//     }
//   }
//   res.status(200).json({ data: "data" });
// };

exports.updateCenter = updateCenter;
// exports.updateAll = updateAll;
