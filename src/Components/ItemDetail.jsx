import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from "../Contexts/CartContext";

const ItemDetail = ({ item }) => {
  const [ add, setAdd ] = useState(false)
  const { addItem } = useContext(CartContext);

    return (
    <Box sx={{ display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-around'}}>
      <Card sx={{ maxWidth: 345, margin:10 }}>
        <CardMedia
          component="img"
          height="540"
          image={`${item.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <h2>${item.price}</h2>
          <p>{item.description}</p>
          </Typography>
        </CardContent>
        <CardActions>
          {
            add ? "" : <ItemCount item={item} stock={item.stock} initial={1} addItem={addItem} />
          }
        </CardActions>
          <div>
            <Link to={`/`} style={{ textDecoration:'none', palette:'secondary', size:'medium'}}>
              <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
                <Button disableElevation variant="contained">VOLVER</Button>
              <ButtonGroup/>
            </Link>
            <Link style={{ textDecoration:'none' }} to={`/cart/`}>       
              <Button disableElevation variant="contained" color= "secondary">IR A CARRITO</Button> 
            </Link>
          </div>
        </Card>
  </Box>
);
  };
  export default ItemDetail;