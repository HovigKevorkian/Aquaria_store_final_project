const express = require("express");
const router = express.Router();
import DeliveryAddresses from "../controllers/delivery_addresses";

const delivery_addresses_routes = async () => {
  const Controller_delivery = await DeliveryAddresses();

  router.get("/list", async (req, res, next) => {
    try {
      const result = await Controller_delivery.getDelivery_addresses();
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const delivery_address_id = req.params.id;
      const result = await Controller_delivery.getDelivery_address(
        delivery_address_id
      );
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const delivery_address_create = {
        country: req.body.country,
        city: req.body.city,
        postal_code: req.body.postal_code,
        street: req.body.street,
        unit: req.body.unit
      };
      const result = await Controller_delivery.createDelivery_addresses(
        delivery_address_create
      );
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:id", async (req, res, next) => {
    try {
      const delivery_address_id = req.params.id;
      const delivery_address_update = {
        country: req.body.country,
        city: req.body.city,
        postal_code: req.body.postal_code,
        street: req.body.street,
        unit: req.body.unit
      };
      const result = await Controller_delivery.updateDelivery_addresses(
        delivery_address_id,
        delivery_address_update
      );
      res.json({ sucess: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deliver_id = req.params.id;
      const result = await Controller_delivery.deleteDelivery_addresses(
        deliver_id
      );
      res.json({ sucess: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });
};
delivery_addresses_routes();
export default router;
