import {Router} from 'express';
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middlewares';
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const router = Router();

//product

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
    
})
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

//update

router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id', 
body('title').optional(), 
body('body').optional(), 
body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
body('version').optional(), 
updateUpdate)

router.post('/update', 
body('title').exists().isString(), 
body('body').exists().isString(), 
body('productId').exists().isString(), createUpdate)
router.delete('/update/:id', deleteUpdate)

// update point

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', body('name').optional().isString(), body('description').optional().isString(), (req, res) => {
   
})
router.post('/updatepoint', body('name').optional().isString(), body('description').optional().isString(), body('updateId').exists().isString(), (req, res) => {
    
})
router.delete('/updatepoint/:id', () => {})

export default router;