// import React, { Fragment } from 'react'
// import { useCartContext } from '../Contexts/CartContext'
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Button } from '@mui/material/Button';
// import { Link } from 'react-router-dom';

// export const ItemCart = ({ name, price, image, id, quantity }) => {
//   const { extractItem } = useCartContext();
//   const handleRemove = () => extractItem(id);

//   return (
//     <Fragment>
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'start',
//         ml: 6.7,
//       }}
//         >
//       </Box>
//       <Box
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           '& > :not(style)': {
//             m: 1,
//             width: '30%',
//             height: '10%',
//           },
//         }}
//       >
//         <Link to={`/item/${id}`}>
//         <Paper elevation={24} className="flexContainer">
//           <div className='flexItems'>
//             <img src={image} alt="" className='imgCart' />
//             <div className='txtContainer'>
//               <p className="txtName">{name}</p>
//               <p className="txtPrice">${price}</p>
//             </div>
//           </div>
//           <div className="flexQuantity">
//             <p className="txtQuantity">Cantidad: {quantity}</p>
//             <button onClick={handleRemove} className="buttonRemove">
//             </button>
//           </div>
//         </Paper>
//         </Link>
//       </Box>
//     </Fragment>
//  );
// };

// export default ItemCart;