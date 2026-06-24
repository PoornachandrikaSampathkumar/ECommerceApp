const placeOrder = () => {
  const newOrder = {
    id: Date.now(),
    items: cart,
    total: cart.reduce(
      (sum, item) => sum + item.price * (item.qty || 1),
      
    ),
    date: new Date().toLocaleString()
  };

  const existing =
    JSON.parse(localStorage.getItem("orders")) || [];

  localStorage.setItem(
    "orders",
    JSON.stringify([newOrder, ...existing])
  );

  clearCart();
  alert("Order placed successfully 🎉");
};