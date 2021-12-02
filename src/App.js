import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
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
      main:grey[800]
    },
  }
})

function App() {
  return (
    // <CartContextProvider>
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
