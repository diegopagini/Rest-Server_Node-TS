/** @format */
import express, { Application } from 'express';

export class Server {
	private app: Application;
	private port: string;

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';
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
