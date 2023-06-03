import express, { Request, Response } from 'express';
import UserController from './controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.get('/users', userController.getUsers);

export default router;

