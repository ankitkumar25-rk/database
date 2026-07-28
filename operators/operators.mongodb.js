use("ecom");

// db.products.find({ price: { $gt: 100 } }).pretty();

// db.products.find({ price: { $lte: 200 } });

// db.products.find({ $and: [{ category: "beauty" }, { price: { $lt: 12 } }] });
db.products.find({
  $or: [
    { price: { $not: { $lt: 12.99 } } },
    { title: 1, category: 1, price: 1 },
  ],
});
