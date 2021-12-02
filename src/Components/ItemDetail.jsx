import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    const { title, price, description, image, stock } = props.item;
    return (
      <Box className="flex bg-danger" sx={{ display:'flex',
      flexDirection:'column',
      justifyContent: 'center', 
      width: 445 }}>
        <h3>Item Detail</h3>
        <h3>{title}</h3>
        <h2>${price}</h2>
        <p>{description}</p>
        <img src={`${image}`} alt={`${image}`} ></img>
        <Link to={`/`}>
          <ButtonGroup  disableElevation variant="contained"/>
            <Button color="secondary" size="medium">Volver</Button>
          <ButtonGroup/>
        </Link>
        <ItemCount stock={stock} initial={1} />
      </Box>
    );
  };
  export default ItemDetail;