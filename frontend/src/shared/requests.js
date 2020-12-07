import axios from "axios";

const SIIAU_URL =
  "http://consulta.siiau.udg.mx/wco/sspseca.consulta_oferta?ciclop=202110&cup=D&crsep=";

export const getMateria = async () => {
  console.log("asdasf");
  const data = await axios.get("localhost:5000/api/siiau/CUCEI/I7020");
  console.log("asfasf", data);
};
