import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ price, image, title, id }) => {
  return (
    <Card sx={{ maxWidth: 245, margin: 10 }}>
      <CardMedia component="img" height="350" image={image} alt="producto" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/item/${id}`}
          style={{ textDecoration: "none", color: "secondary" }}
        >
          <Button disableElevation variant="contained" size="small">
            Detalles del Producto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Item;
