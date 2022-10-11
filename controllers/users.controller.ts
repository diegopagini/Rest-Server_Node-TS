/** @format */
import { Request, Response } from 'express';

/**
 * Function to get all users.
 * @param {Request} req
 * @param {Response} res
 */
export const getUsers = (req: Request, res: Response) => {
	res.json({
		msg: 'getUsers',
	});
};

/**
 * Function to get a user.
 * @param {Request} req
 * @param {Response} res
 */
export const getUser = (req: Request, res: Response) => {
	const { id } = req.params;

	res.json({
		msg: 'getUser',
		id,
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
