import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

// Use CORS middleware
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true
};
app.use(cors(corsOptions));

// Use morgan middleware for logging
app.use(morgan('combined'));

// Use session middleware
app.use(session({
  secret: 'MY_SECRET_KEY',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/', homeRoutes);
app.use('/api', productRoutes);




export default app;