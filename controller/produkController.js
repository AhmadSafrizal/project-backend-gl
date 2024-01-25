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


module.exports = {
    getAllProduk,
    getAllKategori
}
