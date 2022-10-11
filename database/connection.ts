/** @format */
import { Sequelize } from 'sequelize';

// 'node' is the name of the database. 'root' is the user, '' is the password.
export const db = new Sequelize('node', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
	// logging: true; To see sql commands in the console.
});
