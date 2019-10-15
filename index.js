const express = require('express')

const server = express();
server.use(express.json());

const userRouter = require('./auth/user-router');
server.use('/auth', userRouter);

const port = 8000;

server.listen(port, () => console.log(`listening on ${port}`));