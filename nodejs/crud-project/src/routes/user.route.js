import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
// router.get('/getall', userController.getAllUsers);

//route to create a new user
router.post('',newUserValidator, userController.newUser);  // validater used before here

//route to get a single user by their user id
// router.get('/:_id', userController.getUser);   //userAuth used before here

//route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);

//route to login user
router.post('/login', userController.loginUser);

export default router;