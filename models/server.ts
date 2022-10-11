/** @format */
import cors from 'cors';
import express, { Application } from 'express';

import { db } from '../database/connection';
import { userRouter } from '../routes/users.routes';

export class Server {
	private app: Application;
	private port: string;
	private paths = {
		users: '/api/users',
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';
		this.dbConnection();
		this.middlewares();
		this.routes();
	}

	/**
	 * Method to connect to mysq.
	 */
	async dbConnection() {
		try {
			await db.authenticate();
			console.log('Database online');
		} catch (error: any) {
			throw new Error(error);
		}
	}

	/**
	 * Method to set middlewares.
	 */
	middlewares(): void {
		// CORS.
		this.app.use(cors());
		// Body reading.
		this.app.use(express.json());
		// Public folder.
		this.app.use(express.static('public'));
	}

	/**
	 * Method to use the routes.
	 */
	routes(): void {
		this.app.use(this.paths.users, userRouter);
	}

	/**
	 * Method to start ther server.
	 */
	listen(): void {
		this.app.listen(this.port, () => {
			console.log(`Server start at: ${this.port}`);
		});
	}
}
