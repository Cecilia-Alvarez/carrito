import { Component } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

class ShoppingCart extends Component {

    render() { 
        return <div>        
        <IconButton size="large" aria-label="show 4 new items" color="inherit">
          <Badge badgeContent={4} color="error">
           <ShoppingCartIcon/>
          </Badge>
        </IconButton>
        </div>;
    }
}
 
export default ShoppingCart;