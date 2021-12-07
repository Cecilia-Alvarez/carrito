import React, { Fragment } from 'react'
import { useCartContext } from '../Contexts/CartContext'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const ItemCart = ({ title, price, image, id, quantity }) => {
  const { extractItemFromCart } = useCartContext();
  const handleRemove = () => extractItemFromCart(id);

  return (
    <Fragment>
      <Box sx={{
        display: 'flex',
        justifyContent: 'start',
        ml: 6.7,
      }}
        >
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: '30%',
            height: '10%',
          },
        }}
      >
        <Link to={`/item/${id}`}>
        <Card sx={{ maxWidth: 245 }}>
        <CardMedia
          component="img"
          height="350"
          image={image}
          alt="producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ${quantity}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/item/${id}`} style={{ textDecoration:'none', color:'secondary' }}>
          <Button onClick={handleRemove} disableElevation variant="contained" size="small">Eliminar del Carrito</Button>
          </Link>
        </CardActions>
      </Card>
        </Link>
      </Box>
    </Fragment>
 );
};

export default ItemCart;