import express from 'express';
import 'express-async-errors'
import './database';
import routes from './routes';
import path from 'path'
import cors from 'cors'
import errorHendler from './err/handler';

const app = express()


app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHendler);
app.use(cors())

app.listen(4000, () => console.log('server is running 🚀'))


