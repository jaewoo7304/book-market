const express = require('express');
const app = express();

// dotenv 모듈
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

const usersRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const orderRouter = require('./routes/orders');
const likeRouter = require('./routes/likes');
const cartRouter = require('./routes/carts');

app.use('/users', usersRouter);
app.use('/books', bookRouter);
app.use('/orders', orderRouter);
app.use('/likes', likeRouter);
app.use('/carts', cartRouter);

