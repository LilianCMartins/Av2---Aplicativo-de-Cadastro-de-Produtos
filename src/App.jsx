import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <NavBar />
        <div style={{ marginTop: 32 }}>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
