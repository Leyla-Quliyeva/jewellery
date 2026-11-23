import type { Request, Response } from "express";
import { db } from "../config/firebase.js";

const productsRef = db.collection("products");

// Bütün məhsulları gətir
export const getProducts = async (req: Request, res: Response) => {
  try {
    const snapshot = await productsRef.orderBy("createdAt").get();

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server xetasi" });
  }
};

// ID ilə məhsulu gətir
export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const product = await productsRef.doc(id).get();

    if (!product.exists) {
      return res.status(404).json({ message: "mehsul tapilmadi" });
    }

    res.status(200).json({
      id: product.id,
      ...product.data(),
    });
  } catch (error) {
    res.status(500).json({ message: "Server xetasi" });
  }
};

// Yeni məhsul əlavə et
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, price, image } = req.body;

    if (
      !name ||
      !category ||
      typeof price !== "number" ||
      price < 0 ||
      !image
    ) {
      return res.status(400).json({
        message: "Melumatlari duzgun daxil edin",
      });
    }

    const newProduct = {
      name,
      category,
      price,
      image,
    };

    const doc = await productsRef.add({
      ...newProduct,
      createdAt: Date.now(),
    });

    res.status(201).json({
      id: doc.id,
      ...newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Server xetasi" });
  }
};

// Məhsulu yenilə
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { name, category, price, image } = req.body;

    const product = productsRef.doc(id);
    const existingProduct = await product.get();

    if (!existingProduct.exists) {
      return res.status(404).json({ message: "mehsul tapilmadi" });
    }

    if (
      !name ||
      !category ||
      typeof price !== "number" ||
      price < 0 ||
      !image
    ) {
      return res.status(400).json({
        message: "Melumatlari duzgun daxil edin",
      });
    }

    const updatedProduct = {
      name,
      category,
      price,
      image,
    };

    await product.update(updatedProduct);

    res.status(200).json({
      id,
      ...updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Server xetasi" });
  }
};

// Məhsulu sil
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const product = productsRef.doc(id);
    const existingProduct = await product.get();

    if (!existingProduct.exists) {
      return res.status(404).json({ message: "mehsul tapilmadi" });
    }

    await product.delete();

    res.status(200).json({ message: "mehsul silindi" });
  } catch (error) {
    res.status(500).json({ message: "Server xetasi" });
  }
};
