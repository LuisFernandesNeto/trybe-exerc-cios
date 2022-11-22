const express = require('express');
const generateToken = require('./utils/generateToken');
const auth = require('./midlewares/auth');
const validateName = require('./midlewares/validateName');
const validatePrice = require('./midlewares/validadePrice');
const validadeDescription = require('./midlewares/validateDescription')
const validadeCreatedAt = require('./midlewares/validateCreatedAt');
const validateRating = require('./midlewares/validateRating');
const validateDifficulty = require('./midlewares/validateDificulty');

const savedToken = [];

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
    const { email, password, firstName, phone } = req.body;

    if([email, password, firstName, phone].includes(undefined)) {
        return res.status(401).json({ message: 'Campos ausentes!' });
    }

    const token = generateToken();
    savedToken.push(token);

    return res.status(200).json({ token });
});

app.post('/activities',
auth,
validateDifficulty,
validateRating,
validadeCreatedAt,
validateName,
validatePrice,
validadeDescription,
(_req, res) => {
    res.status(201).json({message: 'Atividade registrada com sucesso!'});
});

module.exports = app;
