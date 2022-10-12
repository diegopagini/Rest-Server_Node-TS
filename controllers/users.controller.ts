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
export const createUser = async (req: Request, res: Response) => {
	const { body } = req;

	try {
		const emailExist = await User.findOne({
			where: {
				email: body.email,
			},
		});

		if (!emailExist)
			return res.status(400).json({
				msg: 'That email is already taken.',
			});

		const user = User.build(body); // "User.build" to create a new user. Like new User().
		await user.save();

		return res.json(user);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			msg: 'Talk to the administrator.',
		});
	}
};

/**
 * Function to update a user.
 * @param {Request} req
 * @param {Response} res
 */
export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;

	try {
		const user = await User.findByPk(id);
		if (!user)
			return res.status(404).json({
				msg: `That user does not exist.`,
			});

		await user.update(body);

		return res.json(user);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			msg: 'Talk to the administrator.',
		});
	}
};

/**
 * Function to delete a user.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const user = await User.findByPk(id);

	if (!user)
		return res.status(404).json({
			msg: `That user does not exist.`,
		});

	// Physical delete.
	// await user.destroy();

	// Logical delete.
	await user.update({ status: false });

	return res.json(user);
};
