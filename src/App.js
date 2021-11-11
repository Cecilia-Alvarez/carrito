import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main:pink[100]
    },
    secondary: {
      main:grey[700]
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <ItemListContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
