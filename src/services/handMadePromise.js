const data = [
    {
        "id":1,
        "image":"https://datalatienda.com/8398-thickbox_default/pantalon-cargo-con-puno-dama-embrujo-5224.jpg",
        "title":"Pantalón Daniela",
        "description": "Hermoso pantalón tipo cargo de color verde.",
        "category":1,
        "price": "3000",
        "stock": "4"
    },
    {
        "id":2,
        "image":"https://http2.mlstatic.com/D_NQ_NP_822811-MLA31095910641_062019-W.jpg",
        "title":"Vestido Florencia",
        "description": "Hermoso y elegante vestido negro de fiesta.",
        "category":2,
        "price": "5000",
        "stock": "10"
    },
    {
        "id":3,
        "image":"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/9/22/7e999732-a4ad-4464-9d57-5e0bd60a270c1600728478352-1.jpg" ,
        "title":"Top Mariela",
        "description": "Un comodo y primaveral top floreado.",
        "category":3,
        "price": "2200",
        "stock": "5"
    },
    {
        "id":4,
        "image":"https://m.media-amazon.com/images/I/61q4GZdyofL._AC_UL320_.jpg",
        "title":"Top Malena",
        "description": "Hermoso y elegante top rojo.",
        "category":3,
        "price": "2800",
        "stock": "3"
    },
    {
        "id":5,
        "image":"https://i.pinimg.com/236x/ed/d0/39/edd0390d404486cdcdc99922050e686c.jpg" ,
        "title":"Vestido Sabrina",
        "description": "Hermoso y elegante vestido a rayas con cinto.",
        "category":2,
        "price": "3500",
        "stock": "15"
    },
    {
        "id":6,
        "image":"https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/whatsapp_image_2021-02-21_at_19.56.02_1614105885.jpeg?itok=Up-dJGfM",
        "title":"Pantalón Delfina",
        "description": "Pantalón sastrero color durazno.",
        "category":1,
        "price": "3200",
        "stock": "1"
    }
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts;
