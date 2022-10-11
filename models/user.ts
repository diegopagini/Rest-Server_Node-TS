/** @format */
import { DataTypes } from 'sequelize';

import { db } from '../database/connection';

export const User = db.define('User', {
	name: {
		type: DataTypes.STRING,
	},
	email: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.TINYINT, // 0 || 1
	},
});
