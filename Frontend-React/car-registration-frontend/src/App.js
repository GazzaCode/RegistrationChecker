import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationStatus from "./RegistrationStatus";
import { createTheme, ThemeProvider } from '@mui/material';
import CarGrid from "./CarGrid";


function App() {
  return (
    <div>

      <ThemeProvider theme={createTheme()}>
        <Router>
          <Routes>
            <Route path="/" element={<CarGrid />} />
            <Route path="/registration" element={<RegistrationStatus />} />
          </Routes>
        </Router>


      </ThemeProvider>
    </div>
  );
}

export default App;
