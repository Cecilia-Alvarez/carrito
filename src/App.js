import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { CartProvider } from './Contexts/CartContext';
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
    <ThemeProvider theme={theme}>
        <div className="App">
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="item/:id" element={<ItemDetailContainer />} />
              <Route path="category/:id" element={<ItemListContainer />} /> 
              <Route path="cart/" element={<Cart />} /> 
            </Routes>
          </CartProvider>
        </div>
    </ThemeProvider>
  );
}

export default App;
