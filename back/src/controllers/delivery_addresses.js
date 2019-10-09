import sqlite from "sqlite";

const DeliveryAddresses = async () => {
  const db = await sqlite.open("./final_project.sqlite");

  const getDelivery_addresses = async () => {
    try {
      let stmt = `SELECT  * FROM delivery_addresses`;
      const rows = await db.all(stmt);
      if (!rows) {
        throw new Error(` There are no delivery_addresses to display`);
      } else return rows;
    } catch (err) {
      throw new Error(`could not get the delivery_address list ` + err.message);
    }
  };

  const getDelivery_address = async delivery_address_id => {
    try {
      let stmt = `SELECT  * FROM delivery_addresses
  WHERE delivery_address_id = ${delivery_address_id}`;
      const rows = await db.all(stmt);
      const addresses = rows;
      if (!addresses.length) {
        throw new Error(
          ` address with id = ${delivery_address_id} doesnt exist`
        );
      } else return addresses;
    } catch (err) {
      throw new Error(
        `could not get the productCount with ID = ${delivery_address_id}` +
          err.message
      );
    }
  };

  const createDelivery_addresses = async props => {
    const { country, city, postal_code, street, unit } = props;
    try {
      if (!props || !country || !city || !postal_code || !street || !unit) {
        throw new Error("you must provide all the fields");
      }
      const stmt = `INSERT INTO delivery_addresses (country, city ,postal_code, street, unit) 
      VALUES ("${country}", "${city}", ${postal_code}, "${street}", "${unit}")`;
      console.log(stmt);
      const rows = await db.run(stmt);
      const id = rows.stmt.lastID;
      return id;
    } catch (err) {
      throw new Error(err, " cannot insert address details");
    }
  };

  const updateDelivery_addresses = async (delivery_address_id, props) => {
    const { country, city, postal_code, street, unit } = props;
    try {
      if (
        !delivery_address_id ||
        (!delivery_address_id ||
          !country ||
          !city ||
          !postal_code ||
          !street ||
          !unit) ||
        !props
      ) {
        throw new Error("you must provide an id and/or one of the inputs");
      }
      const stmt = `UPDATE delivery_addresses SET country=("${country}"),
       city=("${city}"), postal_code=(${postal_code}), street=("${street}"), unit=("${unit}")
       where delivery_address_id=(${delivery_address_id})`;
      console.log(stmt);
      const result = await db.all(stmt);
      return result;
    } catch (err) {
      throw new Error("Can't update the delivery address details");
    }
  };

  const deleteDelivery_addresses = async delivery_address_id => {
    try {
      const result = await db.run(
        `Delete FROM delivery_addresses where delivery_address_id =(${delivery_address_id})`
      );
      console.log(result);
      if (result.stmt.changes === 0) {
        throw new Error(
          `could not delete productCount with id = ${delivery_address_id} or  delivery_address_id=(${delivery_address_id} or wrong id`
        );
      }
      return true;
    } catch (err) {
      throw new Error("could not delete the delivery address" + err);
    }
  };

  const controller = {
    getDelivery_addresses,
    getDelivery_address,
    createDelivery_addresses,
    updateDelivery_addresses,
    deleteDelivery_addresses
  };
  return controller;
};
export default DeliveryAddresses;
