const express = require("express");
const router = express.Router();
import Orders from "../controllers/orders";

const orders_routes = async () => {
  const Controller_orders = await Orders();

  router.get("/list", async (req, res, next) => {
    try {
      const result = await Controller_orders.getOrdersList();
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Controller_orders.getOrder(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const orderCreate = {
        user_id: req.body.user_id,
        status: req.body.status,
        delivery_date: req.body.delivery_date,
        delivery_address_id: req.body.delivery_address_id,
        payment_details: req.body.payment_details
      };
      const result = await Controller_orders.createOrders(orderCreate);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:id", async (req, res, next) => {
    try {
      const order_id = req.params.id;
      const orderUpdate = {
        user_id: req.body.user_id,
        status: req.body.status,
        delivery_date: req.body.delivery_date,
        delivery_address_id: req.body.delivery_address_id,
        payment_details: req.body.payment_details
      };
      const result = await Controller_orders.updateOrders(
        order_id,
        orderUpdate
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
      const result = await Controller_orders.deleteOrders(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
};
orders_routes();
export default router;
