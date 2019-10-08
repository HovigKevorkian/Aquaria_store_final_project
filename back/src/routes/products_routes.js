const express = require("express");
const router = express.Router();
import Products from "../controllers/products";

const products_routes = async () => {
  const controller_products = await Products();

  router.get("/list", async (req, res, next) => {
    try {
      const result = await controller_products.getProductsList();
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await controller_products.getProduct(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const productCreate = {
        product_title: req.body.product_title,
        product_image_name: req.body.product_image_name,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.category_id,
        is_featured: req.body.is_featured,
        color: req.body.color,
        size: req.body.size
      };
      const result = await controller_products.createProducts(productCreate);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:id", async (req, res, next) => {
    try {
      const product_id = req.params.id;
      const productUpdate = {
        product_title: req.body.product_title,
        product_image_name: req.body.product_image_name,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.category_id,
        is_featured: req.body.is_featured,
        color: req.body.color,
        size: req.body.size
      };
      const result = await controller_products.updateProducts(
        product_id,
        productUpdate
      );
      // console.log("error if any");
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await controller_products.deleteProducts(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
};
products_routes();
export default router;
