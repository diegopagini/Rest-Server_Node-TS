/** @format */
import { Router } from 'express';

import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.controller';

export const userRouter = Router();

/**
 * Route to get all users.
 */
userRouter.get('/', [], getUsers);

/**
 * Route to get a user.
 */
userRouter.get('/:id', [], getUser);

/**
 * Route to create a user.
 */
userRouter.post('/', [], createUser);

/**
 * Route to update a user.
 */
userRouter.put('/:id', [], updateUser);

/**
 * Route to delete a user.
 */
userRouter.delete('/:id', [], deleteUser);
