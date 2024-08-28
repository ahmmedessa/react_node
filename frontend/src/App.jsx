import Header2 from "./components/headers/header2"
import Header1 from "./components/headers/header1"
import Header3 from "./components/headers/header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/hero";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Scrolltotop from "./components/scroll/scrolltotop";


function App() {
  const [theme, colorMode] = useMode();
  
  return (
   
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
    <ThemeProvider 
// @ts-ignore
    theme={theme}>
    <CssBaseline />
    
    <Header1/>
    <Header2/>
    <Header3/>

    <Box bgcolor={theme.
// @ts-ignore
    palette.bg.main}>
      <Hero />
      <Main/>
    </Box>
    
    <Footer/>
    <Scrolltotop/>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
    
    
  )
 }

export default App
