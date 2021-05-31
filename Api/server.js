const express = require('express');
const cors = require('./const/cors.const');
const helmet = require('helmet');
const session = require('./const/session.const')
const router = require('./const/router.const')

const firebaseClient = require("./const/firebase.const");



const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST ||'0.0.0.0';

app.use(helmet());
app.use(cors);
app.use(session)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router)

app.listen(PORT, HOST, () => {
    console.log(`Server is active on ${PORT}:${HOST}`);
})