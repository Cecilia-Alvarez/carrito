import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import app from "../services/getFirebase";
import CircularProgress from "@mui/material/CircularProgress";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const itemsCollection = doc(db, "items", id);
    setTimeout(() => {
      getDoc(itemsCollection).then((snapshot) => {
        const dataItemsDetail = { id: snapshot.id, ...snapshot.data() };
        setItem(dataItemsDetail);
        setLoading(false);
      });
    }, 1500);
  }, [id]);

  return (
    <>
      {loading ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <ItemDetail item={item}></ItemDetail>
      )}
    </>
  );
};
export default ItemDetailContainer;
