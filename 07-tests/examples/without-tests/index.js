const { join } = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const template = join(__dirname, 'template/index.html');

    res.sendFile(template);
});

const flights = [
    { from: 'Moscow', to: 'London', price: 25000 },
    { from: 'Paris', to: 'London', price: 20000 },
    { from: 'Moscow', to: 'New York', price: 50000 },
];

app.get('/api/search/:city', (req, res) => {
    const city = req.params.city;
    const filtered = flights.filter(flight => {
        return city === flight.form ||
               city === flight.to;
    });

    res.json(filtered);
});

const port = 9010;

app.listen(port, () => {
    console.log(`🚀  Server running on port ${port}`);
});
