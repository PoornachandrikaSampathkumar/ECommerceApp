import React from "react";
import { useWishlist } from "../context/WishlistContext.jsx";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">Wishlist ❤️</h1>

      <div className="space-y-3">

        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >

            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-green-600">₹{item.price}</p>
            </div>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Wishlist;