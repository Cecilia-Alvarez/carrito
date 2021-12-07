import { useCartContext } from '../Contexts/CartContext'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCart = ({ title, price, image, id, quantity }) => {
  const { extractItemFromCart } = useCartContext();
  const handleRemove = () => extractItemFromCart(id);

  return (
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
  Cantidad: {quantity}
  </Typography>
</CardContent>
<CardActions>
  <Button inClick={handleRemove}  style={{ textDecoration:'none', color:'secondary' }} disableElevation variant="contained" size="small">Eliminar</Button>
</CardActions>
</Card>
)
}
export default ItemCart