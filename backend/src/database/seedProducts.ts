import { db } from "../config/firebase.js";
import { products } from "../data/products.js";

const seed = async () => {
  const batch = db.batch();

  products.forEach(({ id, ...data }, index) => {
    batch.set(db.collection("products").doc(String(id)), {
      ...data,
      createdAt: index,
    });
  });

  await batch.commit();
  console.log("Məhsullar yükləndi");
  process.exit(0);
};

seed();
