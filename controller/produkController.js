var client = require("../library/database");


const getAllProduk = async function (req, res) {
    try {
      await client.connect();
      
      let collection = await client.db("ecommerce").collection("produk");
    let results = await collection.find({})
      .limit(50)
      .toArray();
      // console.log(results);
      console.log("get all produk");
      await res.send(results);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

const getAllKategori = async function (req, res) {
  try {
    await client.connect();
    
    let collection = await client.db("ecommerce").collection("kategori");
  let results = await collection.find({})
    .limit(50)
    .toArray();
    // console.log(results);
    console.log("get all kategori");
    await res.send(results);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


const getProdukByKategoriId = async function (req, res) {

  const kategoriId = req.params.kategori_id;

  try {
    await client.connect();

    const produkCollection = await client.db("ecommerce").collection("produk");

    // Get products based on kategoriId
    const products = await produkCollection.find({ kategori_id: parseInt(kategoriId) })
      .limit(50)
      .toArray();

    if (products.length === 0) {
      return res.status(404).send({ message: 'Wah  produk dengan kategori tersebut tidak ada nih !!!' });
    }

    console.log(`Get produk dengan kategori_id : ${kategoriId}`);
    res.send(products);
  } finally {
    await client.close();
  }
}



module.exports = {
    getAllProduk,
    getAllKategori,
    getProdukByKategoriId
}
