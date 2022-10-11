/** @format */
import { Request, Response } from 'express';

import { User } from '../models/user';

/**
 * Function to get all users.
 * @param {Request} req
 * @param {Response} res
 */
export const getUsers = async (req: Request, res: Response) => {
	const users = await User.findAll();

	res.json({ users });
};

/**
 * Function to get a user.
 * @param {Request} req
 * @param {Response} res
 */
export const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const user = await User.findByPk(id);

	if (!user)
		return res.status(404).json({
			msg: `User with ${id} not exist.`,
		});

	return res.json({
		user,
	});
};

/**
 * Function to create a user.
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = (req: Request, res: Response) => {
	const { body } = req;

	res.json({
		msg: 'createUser',
		body,
	});
};

/**
 * Function to update a user.
 * @param {Request} req
 * @param {Response} res
 */
export const updateUser = (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;

	res.json({
		msg: 'updateUser',
		body,
		id,
	});
};

/**
 * Function to delete a user.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteUser = (req: Request, res: Response) => {
	const { id } = req.params;

	res.json({
		msg: 'deleteUser',
		id,
	});
};
