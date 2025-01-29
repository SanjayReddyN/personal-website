import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import App from "./App.jsx";
import "@mantine/core/styles.css";

const theme = createTheme({
  primaryColor: "violet",
  colors: {
    violet: [
      "#824CE0",
      "#514CE0",
      "#4C76E0",
      "#4C76E0",
      "#824CE0",
      "#514CE0",
      "#4C76E0",
      "#4C76E0",
      "#514CE0",
      "#824CE0",
    ],
  },
  defaultRadius: "md",
  components: {
    Text: {
      styles: (theme) => ({
        root: {
          "&[dataViolet]": {
            color: theme.colors.violet[0],
          },
        },
      }),
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <div style={{ backgroundColor: "#151515", minHeight: "100vh" }}>
        <App />
      </div>
    </MantineProvider>
  </React.StrictMode>
);
