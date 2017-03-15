const supertest = require('supertest');
const app = require('../../app');

test('/ should return html', () => {
    return supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/);
});

test('/api/search/:city should return json', () => {
    return supertest(app)
        .get('/api/search/Moscow')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([
            { from: 'Moscow', to: 'London', price: 25000 },
            { from: 'Moscow', to: 'New York', price: 50000 },
        ]);
});

test('/api/search/ should return json', () => {
    return supertest(app)
        .get('/api/search/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([]);
});
