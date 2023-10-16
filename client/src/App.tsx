import {Box} from "@mui/material";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import Predictions from "./pages/predictions/Predictions";
import {themeSettings} from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* css base line, remove all the styling the browser gives the site by default. and gives us a clean environment. */}
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
