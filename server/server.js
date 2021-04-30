const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// CONNECT TO db
mongoose
	.connect(process.env.DATABASE, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => console.log('DB connected'))
	.catch((err) => console.log('db connection error: ', err));

// Import routes
const authRoutes = require('./routes/auth');

// Application Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Use for development
// if(provess.env.NODE_ENV='development') {
// 	app.use(cors({origin: `http:\\localhost:3000`}))
// }

// Middleware
app.use('/api', authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`API is running on port ${port} - ${process.env.NODE_ENV}`);
});
