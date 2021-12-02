// import getProducts from "../services/handMadePromise";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";

// export const ItemCategories = ({ products }) => {

// const [products, setProducts] = useState();


// const [filter, setFilter] = useState('');
// const filteredProducts = products => {
// (filter === '') ? products.filter(products => products.category === filter) : products;
// }

//   useEffect(() => {
//     getProducts

//   .then(res => {
//         (filter !== '') ? setFilter(res) : setProducts(res)
//       .catch((err) => alert("Ha ocurrido un error", err));
//   });
//   return (
//         filteredProducts.map((product) => {
//                return(
//                 <Card sx={{ maxWidth: 245 }}>
//                 <CardMedia
//                   component="img"
//                   height="350"
//                   image={image}
//                   alt="producto"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                   {title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                   ${price}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Link to={`/item/${id}`}>
//                     <ButtonGroup  disableElevation variant="contained"/>
//                       <Button color="secondary" size="small">Learn More</Button>
//                     <ButtonGroup/>
//                   </Link>
//                 </CardActions>
//               </Card>
//                )},
//                ))

// const [products, setProducts] = useState();
    
// const [filter, setFilter] = useState('');

// const ItemCategories = () => ({ products }) => {

//     const filteredProducts = products => {
//     (filter === '') ? products.filter(products => products.category === filter) : products;
//     }
    
//     useEffect(() => {
//         getProducts
//       .then(res => {
//             (filter !== '') ? setFilter(res) : setProducts(res)
//           .catch((err) => alert("Ha ocurrido un error", err));
//       });
//   console.log(filteredProducts)
