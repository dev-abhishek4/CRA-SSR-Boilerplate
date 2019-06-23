import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// to load each page
import loader from './loader';

// get environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// Create our express app using the port optionally specified
const app = express();

app.use(compression());             // Compress response bodies
app.use(bodyParser.json());         // Parse incoming request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));             // HTTP request logger middleware
app.use(cookieParser());            // Parse Cookie header and populate req.cookies

// when requested, guide where to look for project and load it using loader
app.use(express.Router().get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(loader);

app.listen(PORT, console.log(`App listening on port ${PORT}!`));