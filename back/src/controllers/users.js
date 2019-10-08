import sqlite from "sqlite";
import SQL from "sql-template-strings";

const nowForSQLite = () =>
  new Date()
    .toISOString()
    .replace("T", " ")
    .replace("Z", "");
const initializeUsers = async () => {
  const db = await sqlite.open("./final_project.sqlite");

  const getUsersList = async () => {
    try {
      let stmt = SQL`SELECT  * FROM users`;
      const rows = await db.all(stmt);
      if (!rows) {
        throw new Error(` There are no users to display`);
      } else return rows;
    } catch (err) {
      throw new Error(`could not get the users list ` + err.message);
    }
  };

  const getUser = async id => {
    try {
      //   let stmt = `SELECT * FROM users
      //   INNER JOIN orders ON  users.user_id = orders.user_id
      //   INNER JOIN orders_details ON orders_details.order_id = orders.order_id
      // inner join products ON products.product_id = orders_details.product_id
      //   where users.user_id =${id}`
      let stmt = `SELECT * FROM users where users.user_id =${id}`;
      const rows = await db.all(stmt);
      const users = rows;
      if (!users.length) {
        throw new Error(` user with id = ${id} doesnt exist`);
      } else return users;
    } catch (err) {
      throw new Error(`could not get  the user with id = ${id} ` + err.message);
    }
  };

  const createUsers = async props => {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      country,
      city,
      postal_code,
      street,
      unit
    } = props;
    try {
      if (
        !props ||
        !first_name ||
        !last_name ||
        !email ||
        !password ||
        !phone_number ||
        !country ||
        !postal_code ||
        !city ||
        !street ||
        !unit
      ) {
        throw new Error("you must provide all of the details");
      }
      const created_at = nowForSQLite();
      const stmt = `INSERT INTO users (first_name, last_name, email, phone_number, created_at, password, country, city, postal_code, street, unit) 
            Values ("${first_name}", "${last_name}", "${email}", "${phone_number}", "${created_at}", "${password}", "${country}", "${city}", ${postal_code}, "${street}", "${unit}")`;
      console.log(stmt);
      const rows = await db.run(stmt);
      const id = rows.stmt.lastID;
      return id;
    } catch (err) {
      throw new Error("couldn't create a new user");
    }
  };

  const updateUsers = async (id, props) => {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      country,
      city,
      postal_code,
      street,
      unit
    } = props;
    try {
      if (
        !id ||
        (!id ||
          (!first_name ||
            !last_name ||
            !email ||
            !password ||
            !phone_number ||
            !country ||
            !postal_code ||
            !city ||
            !street ||
            !unit)) ||
        (!first_name ||
          !last_name ||
          !email ||
          !password ||
          !phone_number ||
          !country ||
          !postal_code ||
          !city ||
          !street ||
          !unit)
      ) {
        throw new Error("you must provide an id and/or one of the inputs");
      }
      const created_at = nowForSQLite();
      const stmt = `UPDATE users 
          SET first_name=("${first_name}"), 
          last_name =("${last_name}"), 
          email=("${email}"), 
          phone_number=("${phone_number}"), 
          created_at=("${created_at}"), 
          password=("${password}"), 
           country=("${country}"), 
           city=("${city}"),
           postal_code=(${postal_code}), 
           street=("${street}"), 
           unit=("${unit}") 
           WHERE user_id=(${id})`;
      const result = await db.all(stmt);
      return result;
    } catch (err) {
      throw new Error("Can't update user account details");
    }
  };

  const deleteUsers = async id => {
    try {
      const result = await db.run(SQL`Delete FROM users where user_id = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`could not delete user with id = ${id} or wrong id`);
      }
      return true;
    } catch (err) {
      throw new Error("could not delete the user");
    }
  };

  const controller = {
    getUsersList,
    getUser,
    deleteUsers,
    updateUsers,
    createUsers
  };
  return controller;
};

export default initializeUsers;
