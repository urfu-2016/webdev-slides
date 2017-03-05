const Flights = require('../../../model/flights');

test('search by arrival city', () => {
    const flights = new Flights([
        { from: 'Moscow', to: 'London', price: 25000 },
        { from: 'Paris', to: 'London', price: 20000 },
        { from: 'Moscow', to: 'New York', price: 50000 },
    ]);

    const filtered = flights.findByCity('London');

    expect(filtered).toEqual([
        { from: 'Moscow', to: 'London', price: 25000 },
        { from: 'Paris', to: 'London', price: 20000 },
    ]);
});

test('search by departure city', () => {
    const flights = new Flights([
        { from: 'Moscow', to: 'London', price: 25000 },
        { from: 'Paris', to: 'London', price: 20000 },
        { from: 'Moscow', to: 'New York', price: 50000 },
    ]);

    const filtered = flights.findByCity('Moscow');

    expect(filtered).toEqual([
        { from: 'Moscow', to: 'London', price: 25000 },
        { from: 'Moscow', to: 'New York', price: 50000 },
    ]);
});

test('search by empty string', () => {
    const flights = new Flights([
        { from: 'Moscow', to: 'London', price: 25000 },
        { from: 'Paris', to: 'London', price: 20000 },
        { from: 'Moscow', to: 'New York', price: 50000 },
    ]);

    const filtered = flights.findByCity('');

    expect(filtered).toEqual([]);
});

test('search by lowercase', () => {
    const flights = new Flights([
        { from: 'Moscow', to: 'London', price: 25000 },
        { from: 'Paris', to: 'London', price: 20000 },
        { from: 'Moscow', to: 'New York', price: 50000 },
    ]);

    const filtered = flights.findByCity('london');

    expect(filtered).toEqual([
        { from: 'Moscow', to: 'London', price: 25000 },
        { from: 'Paris', to: 'London', price: 20000 },
    ]);
});
