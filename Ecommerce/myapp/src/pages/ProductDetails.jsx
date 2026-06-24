import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white p-6 rounded-xl shadow-md grid md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-green-600 text-2xl font-bold mt-4">
            ₹{product.price}
          </p>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <div className="flex gap-4 mt-6">

            <button
              onClick={() => addToCart(product)}
              className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;