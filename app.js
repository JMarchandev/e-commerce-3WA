const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/demo")
.then(() => {console.log('Connect to mongodb')})
.catch(() => {console.log('Connect to mongodb')})

const port = 3001;
const shopRoutes = require('./routes/shop.js')
const adminRoutes = require('./routes/admin.js')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use("/", shopRoutes.routes);
app.use("/admin", adminRoutes.routes);

app.listen(port, () => {
    console.log(`server listening on ${port}`);
})