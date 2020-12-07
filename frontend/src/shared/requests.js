import axios from "axios";

const SIIAU_URL =
  "http://consulta.siiau.udg.mx/wco/sspseca.consulta_oferta?ciclop=202110&cup=D&crsep=";

export const getMateria = async () => {
  console.log("asdasasf");
  const res = await axios.get(SIIAU_URL + "I7020");
  console.log(res);
};
