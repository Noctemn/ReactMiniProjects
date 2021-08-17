import React, { useState } from "react";
import DarkModeButton from "./components/DarkModeButton";
import { createTheme, ThemeProvider, Paper } from "@material-ui/core";
  
function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createTheme({
    
    // Theme settings
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });
  
  return (
    
    // Wrapping code in ThemeProvider
    <ThemeProvider theme={myTheme}>
      <Paper style = {{ height: '100vh'}}>
      <DarkModeButton toggleDark={toggleDark}
      settoggleDark={settoggleDark} />
      </Paper>
    </ThemeProvider>
  );
}
  
export default App;
