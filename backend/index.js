const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const UpdateUserRouter = require('./Routes/UpdateUserRouter');
const ProductRouter = require('./Routes/ProductRouter');
const UserRouter = require('./Routes/UserRouter');
const ensureAuthenticated = require('./Middlewares/Auth');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/update', UpdateUserRouter);
app.use('/products', ProductRouter);
app.use('/user', UserRouter);
// app.use('/logout', ensureAuthenticated, );


// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://0.0.0.0:${PORT}`));
