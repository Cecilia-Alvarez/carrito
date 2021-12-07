import { useCartContext } from '../Contexts/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


const ShoppingCart = () => {
  const { countItemsCart} = useCartContext();
    return <div>        
        <IconButton size="large" aria-label="show new items" color="inherit">
          <Badge badgeContent={countItemsCart} color="error">
           <ShoppingCartIcon/>
          </Badge>
        </IconButton>
        </div>;
    };

 
export default ShoppingCart;