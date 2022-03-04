import React from "react";
import { Box, Slider, SliderProps } from "@mui/material";

type Props = Pick<SliderProps, "value" | "min" | "max" | "defaultValue"> & {
  onChange: (value: number[]) => void;
};

const CustomSlider = ({ value, min, max, defaultValue, onChange }: Props) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
    }}
  >
    <div>{min}</div>
    <div style={{ width: "100%", margin: "0 1rem" }}>
      <Slider
        value={value}
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={(_, newValue) => {
          onChange(newValue as number[]);
        }}
        valueLabelDisplay="auto"
      />
    </div>
    <div>{max}</div>
  </Box>
);

export default CustomSlider;
