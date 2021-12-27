import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import app from '../services/getFirebase';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { collection, getDocs, getFirestore } from "firebase/firestore"



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = collection(db, "items");
        setTimeout(() => {
        getDocs(itemsCollection)
            .then((snapshot) => {
              if(id === undefined){
                setProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))); setLoading(false)
                } else{
                    let data = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
                        setProducts(data.filter((doc)=> doc.category === parseInt(id)));
                }
    })},1500)
    }, [id]);
    return (
        <>
        { 
        loading ?
        <Box sx={{ display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around',
        margin:30
        }}>
        <CircularProgress/>
        </Box>
        :
        <div>
        <ItemList products={products} />
        </div>
        }
        </>
    );
    }
export default ItemListContainer;