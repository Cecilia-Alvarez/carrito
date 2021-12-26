import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import app from '../services/getFirebase'
import { collection, getDocs, getFirestore } from "firebase/firestore"



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = collection(db, "items");
        setTimeout(() => {
        getDocs(itemsCollection)
            .then((snapshot) => {
              if(id === undefined){
                setProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
                } else{
                    let data = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
                        setProducts(data.filter((doc)=> doc.category === parseInt(id)));
                }
    })},2000)
    }, [id]);

    return (
        <div>
        <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;