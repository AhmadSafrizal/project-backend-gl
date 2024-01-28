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
  
	  // Get produk berdasarkan kategoriId
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

  const getProdukByArea = async function (req, res) {
    const area = req.params.area;
  
    try {
      await client.connect();
  
      const produkCollection = await client.db("ecommerce").collection("produk");
      // Menggunakan ekspresi reguler untuk mencocokkan area tanpa memperhatikan huruf besar/kecil
      const areaRegex = new RegExp(area, 'i');
      // Dapatkan produk berdasarkan area
      const products = await produkCollection.find({ area: { $regex: areaRegex } })
        .limit(50)
        .toArray();
  
      if (products.length === 0) {
        return res.status(404).send({ message: `Produk di area ${area} tidak ditemukan.`});
      }
  
      console.log(`Get produk di area: ${area}`);
      res.send(products);
    } finally {
      await client.close();
    }
  }  


module.exports = {
    getAllProduk,
    getAllKategori,
    getProdukByKategoriId,
    getProdukByArea
}
