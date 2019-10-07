const express = require('express');

const router = express.Router();
import initializeUsers from '../controllers/users'

const users_routs = async ()=> {
const controller_users = await initializeUsers();
 router.get('/',(req, res, next) =>{
    res.json({success: true, message:"ok users"});
 })
  router.get('/list', async (req, res, next) => {
    try {
      
      const result = await controller_users.getUsersList();
      res.json({success: true, result});
      return (result);
      console.log(result)
    } catch (err) {
      next(err);
    }
  });
  
  
  router.get('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await controller_users.getUser(id);
      res.json({success: true, result});
    } catch (err) {
      next(err);
    }
  });
  
  
  router.post('/:id', async (req, res, next) => {
    
    try {
      const {id} = req.params;
      const result = await controller_users.deleteUsers(id);
      res.json({success: true, result});
      console.log()
    } catch (err) {
      next(err);
    }
  });
  
  
  router.patch('/:id', async (req, res, next) => {
    
    try {
      const userUpdate = {
          user_id: req.params.id,
          first_name: req.body.first_name,
           last_name: req.body.last_name,
            email: req.body.email,
             password: req.body.password,
              phone_number: req.body.phone_number,
               address: req.body.address, 
               postal_code: req.body.postal_code, 
               city: req.body.city
            };
      const result = await controller_users.updateUsers(userUpdate);
      res.json({success: true, result});
      return (result);
    } catch (err) {
      next(err);
    }
  });
  
  router.post('/', async (req, res, next) => {
    try {
      const userCreate = {
        first_name: req.body.first_name,
         last_name: req.body.last_name,
          email: req.body.email,
           password: req.body.password,
            phone_number: req.body.phone_number,
             address: req.body.address, 
             postal_code: req.body.postal_code, 
             city: req.body.city
            };
      const result = await controller_users.createUsers(userCreate);
      res.json({success: true, result});
    } catch (err) {
      next(err);
    }
  }); 

  
}
users_routs()
export default router;

  