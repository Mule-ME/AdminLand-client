import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "../theme/theme.js"
import { selectTheme } from "./store/selectors.js"
import Dashboard from "pages/Dashboard"
import Layout from "layout";

function App() {

  const mode = useSelector(selectTheme)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
