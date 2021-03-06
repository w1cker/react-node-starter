import express, { Application } from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';
import { itemRouter } from './routers/itemRouter';
export const app: Application = express();

app.set('port', process.env.PORT || 3001);
app.use(express.static(path.resolve(__dirname, '../../frontend/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', itemRouter);
