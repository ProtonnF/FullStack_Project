const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    storeId: {
      type: String,
      required: true,
    },
    storeName: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  },
);

// Export the Mongoose model
module.exports = mongoose.model("Product", productSchema);
