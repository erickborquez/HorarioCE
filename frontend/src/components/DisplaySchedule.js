import React, { useState } from "react";
import * as data from "../shared/data/materias.json";
import Schedule from "./Schedule";

export const DisplaySchedule = () => {
  const info = data.materias2;
  const [schedule, setSchedule] = useState(null);

  const handleScheduleChange = (event, value) => {
    setSchedule(value.props.nrc);
  };

  return (
    <div>
      <Schedule
        options={info}
        value={schedule}
        handleChange={handleScheduleChange}
        nullInitialValue
      />
    </div>
  );
};
