/** @format */
import dotenv from 'dotenv';

import { Server } from './models/server';

// Dotenv config.
dotenv.config();

const server = new Server();

server.listen();
