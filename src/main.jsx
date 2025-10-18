import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./context/AuthContext.jsx";

// 🧩 Step 1: Create a custom MUI theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,     // mobile
      sm: 430,   // tablet
      md: 1200,  // desktop
    },
  },
});


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </GlobalProvider>
    </ThemeProvider>
  </StrictMode>
);
