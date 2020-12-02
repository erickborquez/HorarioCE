import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
    
  },
  background:{
    backgroundColor:"white",
  }
}));



export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select"></InputLabel>
        <Select fullWidth size="small" variant="outlined" defaultValue="" id="grouped-select" className={classes.background} InputProps={{className:classes.background}}>
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={1}>Licenciatura en Fisica</MenuItem>
          <MenuItem value={2}>Licenciatura en Informática</MenuItem>
          <MenuItem value={3}>Ingeniería Biomédica</MenuItem>
          <MenuItem value={4}>Ingeniería Bioquimíca</MenuItem>
          <MenuItem value={5}>Ingeniería Civil</MenuItem>
          <MenuItem value={6}>Ingeniería en Administración Industrial</MenuItem>
          <MenuItem value={7}>Ingeniería en Computación</MenuItem>
          <MenuItem value={8}>Ingeniería en Comunicaciones y Electrónica</MenuItem>
          <MenuItem value={9}>Ingeniería en Electrónica y Computación</MenuItem>
          <MenuItem value={10}>Ingeniería en Obras y Servicios</MenuItem>
          <MenuItem value={11}>Ingeniería de Procesos y Comercio Internacional</MenuItem>
          <MenuItem value={12}>Ingeniería en Telemática</MenuItem>
          <MenuItem value={13}>Ingeniería Industrial</MenuItem>
          <MenuItem value={14}>Ingeniería Mecánica Eléctrica</MenuItem>
          <MenuItem value={15}>Ingeniería Mecatrónica</MenuItem>
          <MenuItem value={16}>Ingeniería Química</MenuItem>
          <MenuItem value={17}>Ingeniería Topográfica</MenuItem>
          <MenuItem value={18}>Licenciatura en Matemáticas</MenuItem>
          <MenuItem value={19}>Licenciatura en Química</MenuItem>
          <MenuItem value={20}>Licenciatura en Químico Farmacobiólogo</MenuItem>
          <MenuItem value={21}>Licenciatura en Tecnologías e Información</MenuItem>
          <MenuItem value={21}>Ingeniería en Nanotecnología</MenuItem>
          <MenuItem value={22}>Ingeniería en Ciencias Computacionales</MenuItem>
          <MenuItem value={23}>Ingeniería en Energía</MenuItem>
        </Select>
      </FormControl>
    </div> 
  );
}
