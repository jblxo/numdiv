import { Box, Button, Container, Slider, Stack } from "@mui/material";
import React, { useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NumDivsTable, { NumDiv } from "./NumDivsTable";

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
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <div>{numbersRange[0]}</div>
          <div style={{ width: "100%", margin: "0 1rem" }}>
            <Slider
              value={numbersRange}
              min={1}
              max={100}
              defaultValue={[1, 100]}
              onChange={(_, newValue) => {
                setNumbersRange(newValue as number[]);
              }}
              valueLabelDisplay="auto"
            />
          </div>
          <div>{numbersRange[1]}</div>
        </Box>
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
