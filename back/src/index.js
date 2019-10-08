import app from "./app";
import path from "path";
import multer from "multer";
import users_routes from "./routes/users_routes";
import categories_routes from "./routes/categories_routes";
import products_routes from "./routes/products_routes";
import orders_routes from "./routes/orders_routes";
//Please, don't forget to change the directory you are importing the routes from, accordingly

const start = async () => {
  app.use("/users", users_routes);
  app.use("/categories", categories_routes);
  app.use("/products", products_routes);
  app.use("/orders", orders_routes);
  app.get("/", (req, res, next) => {
    res.json({ success: true, message: "ok " });
  });
};
start();

app.listen(8080, () => console.log("server listening on port 8080"));

// import http from 'http'
// import app from './app'
// import users_routs from './routs/users_routs'

// const server = http.createServer(app);
// app.get("/", (req, res, next)=>{
//     res.json({success: true, message:"ok "});
//   })
//   app.use("/users", users_routs);

// server.listen( 8080, () => console.log('server listening on port 8080') )
