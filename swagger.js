const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Daftar API",
      version: "0.0.0",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    paths: {
      "/produk/all": {
        get: {
          summary: "Mengambil semua data produk",
          description:
            "Mengambil semua data pada tabel produk yang ada dalam database",
          responses: {
            200: {
              description: "Berhasil mengambil data produk",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                        },
                        name: {
                          type: "string",
                        },
                        url: {
                          type: "string",
                        },
                        kategori_id: {
                          type: "integer",
                        },
                        shop_id: {
                          type: "integer",
                        },
                        item_id: {
                          type: "integer",
                        },
                        product_id: {
                          type: "integer",
                        },
                        price: {
                          type: "integer",
                        },
                        min_price: {
                          type: "integer",
                        },
                        max_price: {
                          type: "integer",
                        },
                        area: {
                          type: "string",
                        },
                        stock: {
                          type: "integer",
                        },
                        discount: {
                          type: "string",
                        },
                        ratings: {
                          type: "integer",
                        },
                        sold: {
                          type: "integer",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["./app/**/*.js"],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = swaggerDocs;
