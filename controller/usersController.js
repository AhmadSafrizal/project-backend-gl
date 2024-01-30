var client = require("../library/database");
const getAllUser = async function (req, res) {
  try {
    await client.connect();

    let collection = await client.db("ecommerce").collection("users");
    let results = await collection.find({}).toArray();
    // console.log(results);
    console.log("get all users");
    await res.send(results);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
const getApiKey = async function (req, res) {
  const search_no_hp = req.params.no_hp;
  try {
    await client.connect();

    const usersCollection = await client.db("ecommerce").collection("users");

    // Get produk berdasarkan kategoriId
    const users = await usersCollection
      .find({
        no_hp: search_no_hp,
      })
      .toArray();

    if (users.length === 0) {
      return res.status(404).send({
        message: "User Tidak ditemukan!",
      });
    }

    const apiKey = users[0].api_key;

    console.log(`Api Key : ${apiKey}`);
    res.send({
      api_key: apiKey,
    });
  } finally {
    await client.close();
  }
};

module.exports = {
  //POST registerUser(no_hp, name)
  //GET getApiKey(no_hp)
  getApiKey,
  //GET getAllUser()
  getAllUser,
  //GET getUserById(user_id)
  //PUT editUser(user_id)
  //DELETE deleteUser(user_id)
};
