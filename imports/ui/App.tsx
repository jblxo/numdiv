import { Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NumDivsTable, { NumDiv } from "./NumDivsTable";
import CustomSlider from "./CustomSlider";

export const App = () => {
  const [numDivs, setNumDivs] = useState<NumDiv[]>([]);
  const [numbersRange, setNumbersRange] = useState<number[]>([1, 100]);

  const computeResults = (from: number, to: number) => {
    const result: NumDiv[] = [];

    for (let i = from; i < to + 1; i++) {
      if (i % 15 === 0) {
        result.push({
          number: i,
          text: "RobotICT",
        });
      } else if (i % 3 === 0) {
        result.push({
          number: i,
          text: "Robot",
        });
      } else if (i % 5 === 0) {
        result.push({
          number: i,
          text: "ICT",
        });
      } else {
        result.push({
          number: i,
          text: i.toString(),
        });
      }
    }

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
