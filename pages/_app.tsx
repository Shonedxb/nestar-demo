import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { light } from "../scss/MaterialTheme";
import { CssBaseline } from "@mui/material";


export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io Redux, Mui, and other providers can be added here
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
