import { Button, Slider } from "@mui/material";
import React, { useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export const App = () => {
  const [numbersRange, setNumbersRange] = useState<number[]>([1, 100]);

  return (
    <div>
      <h1>Welcome to NumDiv!</h1>
      <h2>
        Please select range from 1 to 100 and then click the button to see the
        results.
      </h2>
      <Slider
        value={numbersRange}
        min={1}
        max={100}
        defaultValue={[1, 100]}
        onChange={(_event, newValue) => {
          setNumbersRange(newValue as number[]);
        }}
        valueLabelDisplay="auto"
      />
      <Button variant="contained" endIcon={<SmartToyIcon />}>
        Show results
      </Button>
    </div>
  );
};
