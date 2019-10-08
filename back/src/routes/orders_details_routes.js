const express = require("express");
const router = express.Router();
import OrdersDetails from "../controllers/orders_details";

const orders_details_routes = async () => {
  const Controller_orders_details = await OrdersDetails();

  router.get("/list", async (req, res, next) => {
    try {
      const result = await Controller_orders_details.getOrders_details_List();
      res.json({ success: true, result });
      console.log(result);
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const order_id = req.params.id;
      const result = await Controller_orders_details.getOrders_details(
        order_id
      );
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const detailsCreate = {
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity
      };
      const result = await Controller_orders_details.createOrders_details(
        detailsCreate
      );
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  router.patch("/", async (req, res, next) => {
    try {
      const detailsUpdate = {
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity
      };
      const result = await Controller_orders_details.updateOrders_details(
        detailsUpdate
      );
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.delete("/", async (req, res, next) => {
    try {
      const detailsDelete = {
        order_id: req.body.order_id,
        product_id: req.body.product_id
      };
      const result = await Controller_orders_details.deleteOrders_details(
        detailsDelete
      );
      res.json({ success: true, result });
      console.log();
    } catch (err) {
      next(err);
    }
  });
};

orders_details_routes();
export default router;
