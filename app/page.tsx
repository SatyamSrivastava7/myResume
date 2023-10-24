"use client";

import * as ComponentStyles from "../libs/styles/pages.styles";
import Header from "@/libs/components/header";
import { ThemeProvider, createTheme } from "@mui/material";
import Body from "@/libs/components/body";
import { useState } from "react";
const theme = createTheme();

export default function App() {
  const [selectedHeader, setSelectedHeader] = useState<string>("home");
  return (
    <ThemeProvider theme={theme}>
      <ComponentStyles.MainContainer>
        <Header
          setSelectedHeader={setSelectedHeader}
          selectedHeader={selectedHeader}
        />
        <Body selectedHeader={selectedHeader} />
      </ComponentStyles.MainContainer>
    </ThemeProvider>
  );
}
