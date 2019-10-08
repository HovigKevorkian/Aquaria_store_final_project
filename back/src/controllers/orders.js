import sqlite from "sqlite";

const nowForSQLite = () =>
  new Date()
    .toISOString()
    .replace("T", " ")
    .replace("Z", "");

const Orders = async () => {
  const db = await sqlite.open("./final_project.sqlite");

  const getOrdersList = async () => {
    try {
      let stmt = `SELECT  * FROM orders`;
      const rows = await db.all(stmt);
      if (!rows) {
        throw new Error(` There are no orders to display`);
      } else return rows;
    } catch (err) {
      throw new Error(`could not get the orders list ` + err.message);
    }
  };

  const getOrder = async id => {
    try {
      let stmt = `SELECT *  FROM orders where  order_id = ${id}`;
      const rows = await db.all(stmt);
      const products = rows;
      if (!products) {
        throw new Error(` order with id = ${id} doesnt exist`);
      } else return products;
    } catch (err) {
      throw new Error(`could not get the order with id = ${id}` + err.message);
    }
  };

  const createOrders = async props => {
    console.log("hellossssssssss")
    const {
      user_id,
      status,
      delivery_date,
      delivery_address_id,
      payment_details
    } = props;
    try {
      if (!props) {
        throw new Error("you must provide all the fields");
      }
      const order_date = nowForSQLite();
      const stmt = `INSERT INTO orders (user_id, order_date, status, delivery_date, delivery_address_id, payment_details) 
      VALUES (${user_id}, "${order_date}", ${status}, "${delivery_date}", ${delivery_address_id}, "${payment_details}")`;
      console.log(stmt);
      const rows = await db.run(stmt);
      const id = rows.stmt.lastID;
      return id;
    } catch (err) {
      throw new Error(err, " cannot insert order");
    }
  };

  const updateOrders = async (id, props) => {
    const {
      user_id,
      status,
      delivery_date,
      delivery_address_id,
      payment_details
    } = props;
    try {
      if (!id || !(id || !props) || !props) {
        throw new Error("you must provide an id and/or one of the inputs");
      }
      const stmt = `UPDATE orders SET user_id=(${user_id}),  status=("${status}"), delivery_date=("${delivery_date}"),
       delivery_address_id=("${delivery_address_id}"), payment_details=("${payment_details}") where order_id=(${id}) and user_id=(${user_id})`;
      const result = await db.all(stmt);
      return result;
    } catch (err) {
      throw new Error("Can't update the order details");
    }
  };

  const deleteOrders = async id => {
    try {
      const result = await db.run(
        `Delete FROM orders where order_id = ${id}`
      );
      if (result.stmt.changes === 0) {
        throw new Error(`could not delete order with id = ${id} or wrong id`);
      }
      return true;
    } catch (err) {
      throw new Error("could not delete the order");
    }
  };

  const controller = {
    getOrdersList,
    getOrder,
    createOrders,
    deleteOrders,
    updateOrders
  };
  return controller;
};
export default Orders;
