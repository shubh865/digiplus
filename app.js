const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/sim_activation', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const simCardSchema = new mongoose.Schema({
    sim_number: { type: String, unique: true, required: true },
    phone_number: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    activation_date: { type: Date, default: null }
});

const SimCard = mongoose.model('SimCard', simCardSchema);
