"use client";

import * as ComponentStyles from "../libs/styles/pages.styles";
import Header from "@/libs/components/header";
import { ThemeProvider, createTheme } from "@mui/material";
import Body from "@/libs/components/body";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ComponentStyles.MainContainer>
        <Header />
        <Body />
      </ComponentStyles.MainContainer>
    </ThemeProvider>
  );
}
