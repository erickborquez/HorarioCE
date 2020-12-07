import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },

  control: (provided) => ({
    ...provided,
    color: theme.palette.secondary.light,
  }),
}));

const StyledSelect = ({
  options,
  value,
  handleChange,
  nullInitialValue = false,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-select"></InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        fullWidth
        size="small"
        variant="outlined"
        defaultValue=""
        id="grouped-select"
        className={clsx(classes.control)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        {nullInitialValue && <MenuItem value={""} />}
      </Select>
    </FormControl>
  );
};

export default StyledSelect;
