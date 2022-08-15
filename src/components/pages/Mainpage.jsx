/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

function Mainpage(props) {
  return (
    <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
      <Paper
        elevation={10}
        className="max-w-[80%] mx-auto mt-10 bg-slate-700 bg-opacity-10 text-center text-sky-50"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum
        laborum quasi aperiam, officiis earum, a alias excepturi ipsum
        perferendis tempora cupiditate. Quis, aspernatur at! Nostrum architecto
        rerum ex non.
      </Paper>
    </ThemeProvider>
  );
}

export default Mainpage;
