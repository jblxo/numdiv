import { Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NumDivsTable, { NumDiv } from "./NumDivsTable";
import CustomSlider from "./CustomSlider";

export const App = () => {
  const [numDivs, setNumDivs] = useState<NumDiv[]>([]);
  const [numbersRange, setNumbersRange] = useState<number[]>([1, 100]);

  const computeResults = (from: number, to: number) => {
    const numbers = Array.from({ length: to + 1 - from }, (_, k) => k + from);

    const result = numbers.reduce((prev, number) => {
      if (number % 15 === 0) {
        return [
          ...prev,
          {
            number,
            text: "RobotICT",
          },
        ];
      } else if (number % 3 === 0) {
        return [
          ...prev,
          {
            number,
            text: "Robot",
          },
        ];
      } else if (number % 5 === 0) {
        return [
          ...prev,
          {
            number,
            text: "ICT",
          },
        ];
      } else {
        return [
          ...prev,
          {
            number,
            text: number.toString(),
          },
        ];
      }
    }, [] as NumDiv[]);

    setNumDivs(result);
  };

  return (
    <Container maxWidth="md">
      <Stack spacing={4}>
        <h1>Welcome to NumDiv!</h1>
        <h2>
          Please select range from 1 to 100 and then click the button to see the
          results.
        </h2>
        <CustomSlider
          value={numbersRange}
          min={1}
          max={100}
          defaultValue={[1, 100]}
          onChange={setNumbersRange}
        />
        <div>
          <Button
            variant="contained"
            endIcon={<SmartToyIcon />}
            onClick={() => {
              computeResults(numbersRange[0], numbersRange[1]);
            }}
          >
            Show results
          </Button>
        </div>
        {numDivs.length > 0 && <NumDivsTable numDivs={numDivs} />}
      </Stack>
    </Container>
  );
};
