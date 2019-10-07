import app from './app'
import path from 'path'
import multer from 'multer'
import users_routs from './routs/users_routs'
//Please, don't forget to change the directory you are importing the controllers from, accordingly.
/* const multerStorage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images'),
  });
  const upload = multer({storage: multerStorage});
*/


  const start = async () => {

app.use("/users", users_routs);


app.get("/", (req, res, next)=>{
    res.json({success: true, message:"ok "});
  })
}

  start() 
 
app.listen( 8080, () => console.log('server listening on port 8080') )



// import http from 'http'
// import app from './app'
// import users_routs from './routs/users_routs'

// const server = http.createServer(app);
// app.get("/", (req, res, next)=>{
//     res.json({success: true, message:"ok "});
//   })
//   app.use("/users", users_routs);

 
// server.listen( 8080, () => console.log('server listening on port 8080') )