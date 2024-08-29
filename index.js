const express = require('express');
const bodyParser = require('body-parser');
const unitsRoutes = require('./routes/units');
const usersRoutes = require('./routes/users');
const itemsRoutes = require('./routes/items');
const assignmentsRoutes = require('./routes/assignments');
const categoriesRoutes = require('./routes/categories');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/units', unitsRoutes);
app.use('/users', usersRoutes);
app.use('/items', itemsRoutes);
app.use('/assignments', assignmentsRoutes);
app.use('/categories', categoriesRoutes);

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
