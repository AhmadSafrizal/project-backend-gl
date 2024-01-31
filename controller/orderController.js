//GET geyAllOrder(order_id)
//GET getOrderById(order_id)
//POST createOrder(object produk)
//PUT editOrder(order_id, object produk)
//DELETE deleteOrder(order_id)
var client = require("../library/database");

const getAllOrder = async function (req, res) {
    let page = parseInt(req.query.page) || 1;
    let pageSize = parseInt(req.query.pageSize) || 10;

    try {
        await client.connect();

        let collection = await client.db("ecommerce").collection("orders");
        let results = await collection
        .aggregate([
            {
                $lookup: {
                    from: 'order_product',
                    localField: 'order_id',
                    foreignField: 'order_id',
                    as: 'orderdetails'
                }
            },
            {
                $unwind: '$orderdetails'
            },
            {
                $lookup: {
                    from: 'produk',
                    localField: 'orderdetails.product_id',
                    foreignField: 'product_id',
                    as: 'orderdetails.produkdetails'
                }
            },
            {
                $group: {
                    _id: '$_id',
                    user_id: { $first: '$user_id' },
                    order_id: { $first: '$order_id' },
                    orderdetails: { $push: '$orderdetails' }
                }
            }
        ])
            .toArray();
        // console.log(results);
        console.log(`Get all produk - Page: ${page}, PageSize: ${pageSize}`);
        await res.send(results);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
};

module.exports = {
    //GET getAllOrder()
    getAllOrder
    //GET getOrderById(order_id)
    //POST createOrder(object produk)
    //PUT editOrder(order_id, object produk)
    //DELETE deleteOrder(order_id)
};