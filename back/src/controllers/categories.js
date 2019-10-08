import sqlite from "sqlite";
import SQL from "sql-template-strings";

const Categories = async () => {
  const db = await sqlite.open("./final_project.sqlite");

  const getCategoriesList = async () => {
    try {
      let stmt = SQL`SELECT  * FROM categories`;
      const rows = await db.all(stmt);
      if (!rows) {
        throw new Error(` There are no categories to display`);
      } else return rows;
    } catch (err) {
      throw new Error(`could not get the categories list ` + err.message);
    }
  };

  const getCategory = async id => {
    try {
      //   let stmt = `SELECT * FROM users
      //   INNER JOIN orders ON  users.user_id = orders.user_id
      //   INNER JOIN orders_details ON orders_details.order_id = orders.order_id
      // inner join products ON products.product_id = orders_details.product_id
      //   where users.user_id =${id}`
      let stmt = `SELECT * FROM categories where category_id =${id}`;
      const rows = await db.all(stmt);
      const users = rows;
      if (!users.length) {
        throw new Error(` category with id = ${id} doesnt exist`);
      } else return users;
    } catch (err) {
      throw new Error(
        `could not get  the category with id = ${id} ` + err.message
      );
    }
  };

  const createCategories = async category_name => {
    try {
      if (!category_name) {
        throw new Error("you must provide a new category name");
      }
      const stmt = `INSERT INTO categories (category_name) 
            Values ("${category_name}")`;
      console.log(stmt);
      const rows = await db.run(stmt);
      const id = rows.stmt.lastID;
      return id;
    } catch (err) {
      throw new Error("couldn't create a new category");
    }
  };

  const updateCategories = async (id, category_name) => {
    try {
      if (!id || !(id || category_name) || !category_name) {
        throw new Error("you must provide an id and a category name");
      }
      const stmt = `UPDATE categories 
          SET category_name=("${category_name}") WHERE category_id=(${id})`;
      const result = await db.all(stmt);
      return result;
    } catch (err) {
      throw new Error("Can't update category name");
    }
  };

  const deleteCategories = async id => {
    try {
      const result = await db.run(
        SQL`Delete FROM categories where category_id = ${id}`
      );
      if (result.stmt.changes === 0) {
        throw new Error(
          `could not delete category with id = ${id} or wrong id`
        );
      }
      return true;
    } catch (err) {
      throw new Error("could not delete the category");
    }
  };

  const controller = {
    getCategoriesList,
    getCategory,
    deleteCategories,
    updateCategories,
    createCategories
  };
  return controller;
};

export default Categories;
