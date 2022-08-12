
import loggerInfo from './middlewares/log';
import WjwRouter from './routes/wjwApi';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`server run ${PORT}!`);
});

app.use(loggerInfo);
app.use(WjwRouter);

console.log(process.env);