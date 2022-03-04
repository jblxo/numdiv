import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

export type NumDiv = { number: number; text: string };

type Props = {
  numDivs: NumDiv[];
};

const NumDivsTable = ({ numDivs }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {numDivs.map((numdiv) => (
            <TableRow
              key={numdiv.number}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{numdiv.number}</TableCell>
              <TableCell>{numdiv.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NumDivsTable;
