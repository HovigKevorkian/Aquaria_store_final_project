const express = require("express");
const router = express.Router();
import initializeUsers from "../controllers/users";

const users_routes = async () => {
  const controller_users = await initializeUsers();

  router.get("/", (req, res, next) => {
    res.json({ success: true, message: "ok users" });
  });

  router.get("/list", async (req, res, next) => {
    try {
      const result = await controller_users.getUsersList();
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await controller_users.getUser(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await controller_users.deleteUsers(id);
      res.json({ success: true, result });
      console.log();
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:id", async (req, res, next) => {
    try {
      const user_id = req.params.id;
      const userUpdate = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        country: req.body.country,
        city: req.body.city,
        postal_code: req.body.postal_code,
        street: req.body.street,
        unit: req.body.unit
      };
      console.log("userUpdate:", userUpdate);
      const result = await controller_users.updateUsers(user_id, userUpdate);
      res.json({ success: true, result });
      return result;
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const userCreate = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        country: req.body.country,
        city: req.body.city,
        postal_code: req.body.postal_code,
        street: req.body.street,
        unit: req.body.unit
      };

      const result = await controller_users.createUsers(userCreate);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
};
users_routes();
export default router;
