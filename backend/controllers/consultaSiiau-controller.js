const axios = require("axios");
const fs = require("fs");
const { centros } = require("../shared/centros.json");

const SIIAU_URL =
  "http://consulta.siiau.udg.mx/wco/sspseca.consulta_oferta?ciclop=202110&cup=";
const SIIAU_URL2 =
  "http://consulta.siiau.udg.mx/wco/sspseca.consulta_oferta?ciclop=202110&cup=D&crsep=I7020";

let regGeneral = /.+/g;
let regExp = /tddatos>[0-9]{5,6}.{1,1100}tdprofesor">[A-Z ]+,[A-Z ]{1,50}/g;
let regNRC = /tddatos>([0-9]{5,6})</g;
let regMateria = />([A-Z]+,?\s[A-Z ]*)</g;
let regSeccion = />([A-Z][0-9]{2})</g;
let regHora = /([0-9]{4}-[0-9]{4})/g;
let regDia = />([.LMIJVS ]{11})</g;
let regProf = />([A-Z ]+,[A-Z ]{1,50})/g;

const getOferta = async (centro, codigo) => {
  const url = SIIAU_URL + centros[centro] + "&crsep=" + codigo;
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
  const matched = oferta.match(regGeneral);
  let matchedStr = matched.oString();
  const materiaCompleta = matchedStr.match(regExp);
  const materiasSiiau = [];
  materiaCompleta.forEach((materia) => {
    let nrc = materia.match(regNRC);
    let nombre = materia.match(regMateria);
    let seccion = materia.match(regSeccion);
    const horas = materia.match(regHora);
    const dias = materia.match(regDia);
    let professor = materia.match(regProf);

    if (nrc && nombre && seccion && horas && dias && professor) {
      nrc = nrc.toString();
      nrc = nrc.replace("tddatos>", "");
      nrc = nrc.replace("<", "");

      nombre = nombre.toString();
      nombre = nombre.replace(">", "");
      nombre = nombre.replace("<", "");

      seccion = seccion.toString();
      seccion = seccion.replace(">", "");
      seccion = seccion.replace("<", "");

      professor = professor.toString();
      professor = professor.replace(">", "");

      materiasSiiau.push({
        nrc: nrc,
        nombre: nombre,
        seccion: seccion,
        horas: horas,
        dias: dias,
        professor: professor,
      });
    }
  });

  return materiasSiiau;
};

const saveSiiauOferta = (centro, materias) => {
  fs.writeFileSync(
    `shared/Siiau-materias-${centro}.json`,
    JSON.stringify({ materias }, null, 4)
  );
};

const _getSiiauData = (centro, oferta) => {
  const formatedOferta = formatOferta(oferta);
  saveSiiauOferta(centro, formatedOferta);
  return formatedOferta;
};

const getSiiauData = async (req, res) => {
  const { centro, codigo } = req.params;

  try {
    const oferta = await getOferta(centro, codigo);
    const materias = _getSiiauData(centro, oferta);
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

const getSiiauData2 = async (req, res) => {
  try {
    const { data } = await axios.get(SIIAU_URL2);
    res.status(200).json({
      data: data,
    });
  } catch (e) {
    res.status(500).json({
      message: "Hubo un error :(",
      error: e,
    });
  }
};
exports.getSiiauData = getSiiauData;
exports.getSiiauData2 = getSiiauData2;
