import sqlite from "sqlite";
import SQL from "sql-template-strings";

const nowForSQLite = () =>
  new Date()
    .toISOString()
    .replace("T", " ")
    .replace("Z", "");
const Products = async () => {
  const db = await sqlite.open("./final_project.sqlite");

  const getProductsList = async () => {
    try {
      let stmt = SQL`SELECT  * FROM products`;
      const rows = await db.all(stmt);
      if (rows.length == 0) {
        throw new Error(` There are no products to display`);
      } else return rows;
    } catch (err) {
      throw new Error(`could not get the products list ` + err.message);
    }
  };

  const getProduct = async id => {
    try {
      //   let stmt = `SELECT * FROM users
      //   INNER JOIN orders ON  users.user_id = orders.user_id
      //   INNER JOIN orders_details ON orders_details.order_id = orders.order_id
      // inner join products ON products.product_id = orders_details.product_id
      //   where users.user_id =${id}`
      let stmt = `SELECT * FROM products where product_id =${id}`;
      const rows = await db.all(stmt);
      const users = rows;
      if (!users.length) {
        throw new Error(` product with id = ${id} doesnt exist`);
      } else return users;
    } catch (err) {
      throw new Error(
        `could not get  the product with id = ${id} ` + err.message
      );
    }
  };
  const createProducts = async props => {
    const {
      product_title,
      product_image_name,
      price,
      description,
      category_id,
      is_featured,
      color,
      size
    } = props;
    try {
      if (
        !props ||
        !product_title ||
        !product_image_name ||
        !price ||
        !description ||
        !category_id ||
        !is_featured ||
        !color ||
        !size
      ) {
        throw new Error("you must provide all of the details");
      }
      const date_created = nowForSQLite();
      const stmt = `INSERT INTO products 
            (product_title, product_image_name, price, description, category_id , is_featured, date_created, color, size) 
            Values ("${product_title}", "${product_image_name}", ${price}, "${description}", ${category_id},
             ${is_featured}, "${date_created}", "${color}", ${size})`;
      const rows = await db.run(stmt);
      const id = rows.stmt.lastID;
      return id;
    } catch (err) {
      throw new Error("couldn't create a new product", err.message);
    }
  };

  const updateProducts = async (id, props) => {
    const {
      product_title,
      product_image_name,
      price,
      description,
      category_id,
      is_featured,
      color,
      size
    } = props;
    try {
      if (
        !id ||
        (!id ||
          (!product_title ||
            !product_image_name ||
            !price ||
            !description ||
            !category_id ||
            !is_featured ||
            !color ||
            !size)) ||
        (!product_title ||
          !product_image_name ||
          !price ||
          !description ||
          !category_id ||
          !is_featured ||
          !color ||
          !size)
      ) {
        throw new Error("you must provide an id and/or one of the inputs");
      }
      const date_created = nowForSQLite();
      const stmt = `UPDATE products 
          SET product_title=("${product_title}"), 
          product_image_name =("${product_image_name}"), 
          price=(${price}), 
          description=("${description}"), 
          category_id=(${category_id}), 
          is_featured=(${is_featured}), 
          date_created=("${date_created}"), 
           color=("${color}"),
           size=(${size}) 
           WHERE product_id=(${id})`;
      const result = await db.all(stmt);
      return result;
    } catch (err) {
      throw new Error(err, "Can't update product details");
    }
  };

  const deleteProducts = async id => {
    try {
      const result = await db.run(
        SQL`Delete FROM products where product_id = ${id}`
      );
      if (result.stmt.changes === 0) {
        throw new Error(`could not delete product with id = ${id} or wrong id`);
      }
      return true;
    } catch (err) {
      throw new Error("could not delete the product");
    }
  };

  const controller = {
    getProductsList,
    getProduct,
    deleteProducts,
    updateProducts,
    createProducts
  };
  return controller;
};

export default Products;
