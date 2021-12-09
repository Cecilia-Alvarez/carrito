import Item from "./Item";
import Box from '@mui/material/Box';

const ItemList = ({ products }) => {

  return (
    <Box sx={{ display:'flex',
    flexDirection:'row',
    justifyContent:'space-between', }}>
      {products.map((i) => {
        return (
          <Item
            key={i.id}
            description={i.description}
            category={i.category}
            image={i.image}
            price={i.price}
            stock={i.stock}
            title={i.title}
            id={i.id}
          />
        );
      })}
    </Box>
  );
};
export default ItemList;