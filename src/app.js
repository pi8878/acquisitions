// setting up the right express server with the right imports and exports is a common issue when using node modules.
// This is because of the way node handles modules and the different ways to import and export them. In this case, we
// are using the ES6 module syntax, which requires us to use the "type": "module" field in our package.json file. T
// his tells node that we are using ES6 modules and allows us to use the import and export syntax. Additionally,
// we need to make sure that we are using the correct file extension for our modules, which is .js for JavaScript files.
// With these changes, we should be able to run our express server without any issues.

import express from 'express';
import logger from './config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import securityMiddleware from '#middleware/security.middleware.js';
import usersRoutes from "#routes/users.routes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

app.use(securityMiddleware);

app.get('/', (req, res) => {
  logger.info('Hello from Acquisitions!');
  res.status(200).send('Hello from Acquisitions!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Acquisitions API!' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);


export default app;
