import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzONYHoe0vO6zvsS32u4A-I6WwL9t2hOk",
  authDomain: "ecommerce-tienda-de-moda.firebaseapp.com",
  projectId: "ecommerce-tienda-de-moda",
  storageBucket: "ecommerce-tienda-de-moda.appspot.com",
  messagingSenderId: "933527803146",
  appId: "1:933527803146:web:da26c32c5be84a84b856f3",
};

const app = initializeApp(firebaseConfig);

export default app;
