import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import app from '../services/getFirebase'
import { getDoc, doc, getFirestore } from "firebase/firestore"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = doc(db, "items", id);

        getDoc(itemsCollection).then((snapshot) => {
                const dataItemsDetail = { id: snapshot.id, ...snapshot.data() }
                setItem(dataItemsDetail)
                });
    }, [id]);

    return (
        <ItemDetail item={item}></ItemDetail>
    );
};
export default ItemDetailContainer;