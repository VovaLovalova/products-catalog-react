import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import App from "/src/app/app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
