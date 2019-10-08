const express = require('express');
const router = express.Router();
import Categories from '../controllers/categories'

const categories_routes = async ()=> {
const controller = await Categories();

 router.get('/',(req, res, next) =>{
    res.json({success: true, message:"ok categories"});
 });

  router.get('/list', async (req, res, next) => {
    try {
      const result = await controller.getCategoriesList();
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
      const result = await controller.getCategory(id);
      res.json({success: true, result});
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    try { 
      const categoryCreate = req.body.category_name;
      const result = await controller.createCategories(categoryCreate);
      res.json({success: true, result});
    } catch (err) {
      next(err);
    }
  }); 

  router.patch('/:id', async (req, res, next) => {
    try {
      const category_id = req.params.id;
      const categoryUpdate = req.body.category_name;
            console.log("userUpdate:", categoryUpdate);
      const result = await controller.updateCategories(category_id, categoryUpdate);
      res.json({success: true, result});
      return (result);
    } catch (err) {
      next(err);
    }
  });
  
  router.delete('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await controller.deleteCategories(id);
      res.json({success: true, result});
      console.log()
    } catch (err) {
      next(err);
    }
  });
}
categories_routes()
export default router;