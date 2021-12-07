import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    const { title, price, description, image, stock } = props.item;
    return (
    //   <Box className="flex bg-danger" sx={{ display:'flex',
    //   flexDirection:'column',
    //   justifyContent: 'center', 
    //   width: 445 }}>
    //     <h3>Item Detail</h3>
    //     <h3>{title}</h3>
    //     <h2>${price}</h2>
    //     <p>{description}</p>
    //     <img src={`${image}`} alt={`${image}`} ></img>
        // <Link to={`/`} style={{ textDecoration:'none', palette:'secondary', size:'medium'}}>
        //   <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
        //     <Button disableElevation variant="contained">Volver</Button>
        //   <ButtonGroup/>
        // </Link>
      //   <ItemCount sx={{ display:'flex',
      // selfAlign: 'center', 
      // width: 445 }} stock={stock} initial={1} />
    //   </Box>
    // );

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="540"
        image={`${image}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h2>${price}</h2>
        <p>{description}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/`} style={{ textDecoration:'none', palette:'secondary', size:'medium'}}>
          <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
            <Button disableElevation variant="contained">Volver</Button>
          <ButtonGroup/>
        </Link>
        <ItemCount stock={stock} initial={1} />
      </CardActions>
  </Card>
);
  };
  export default ItemDetail;