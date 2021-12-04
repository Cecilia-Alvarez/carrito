import Item from "./Item";
import Box from '@mui/material/Box';

const ItemList = ({ products }) => {
  console.log("Products en ItemList", products);
  return (
    <Box sx={{ display:'flex',
    flexDirection:'row',
    justifyContent:'space-around', }}>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            description={product.descripcion}
            category={product.categoria}
            image={product.image}
            price={product.price}
            stock={product.stock}
            title={product.title}
            id={product.id}
          />
        );
      })}
    </Box>
  );
};
export default ItemList;