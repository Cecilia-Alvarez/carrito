const data = [
    {
        "id":1,
        "image":"https://datalatienda.com/8398-thickbox_default/pantalon-cargo-con-puno-dama-embrujo-5224.jpg",
        "title":"Pantalón Daniela",
        "descripcion": "este es el primer producto",
        "categoria":"Pantalones",
        "price": "3000",
        "stock": "4"
    },
    {
        "id":2,
        "image":"https://http2.mlstatic.com/D_NQ_NP_822811-MLA31095910641_062019-W.jpg",
        "title":"Vestido Florencia",
        "descripcion": "este es el primer producto",
        "categoria":"Vestidos",
        "price": "5000",
        "stock": "10"
    },
    {
        "id":3,
        "image":"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/9/22/7e999732-a4ad-4464-9d57-5e0bd60a270c1600728478352-1.jpg" ,
        "title":"Top Mariela",
        "descripcion": "este es el primer producto",
        "categoria":"Tops",
        "price": "2200",
        "stock": "5"
    },
    {
        "id":4,
        "image":"https://m.media-amazon.com/images/I/61q4GZdyofL._AC_UL320_.jpg",
        "title":"Top Malena",
        "descripcion": "este es el primer producto",
        "categoria":"Tops",
        "price": "2800",
        "stock": "3"
    },
    {
        "id":5,
        "image":"https://i.pinimg.com/236x/ed/d0/39/edd0390d404486cdcdc99922050e686c.jpg" ,
        "title":"Vestido Sabrina",
        "descripcion": "este es el primer producto",
        "categoria":"Vestidos",
        "price": "3500",
        "stock": "15"
    },
    {
        "id":6,
        "image":"https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/whatsapp_image_2021-02-21_at_19.56.02_1614105885.jpeg?itok=Up-dJGfM",
        "title":"Pantalón Delfina",
        "descripcion": "este es el primer producto",
        "categoria":"Pantalones",
        "price": "3200",
        "stock": "1"
    }
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts