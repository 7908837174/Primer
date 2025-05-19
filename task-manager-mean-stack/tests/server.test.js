const request = require('supertest');
const app = require('../server');

describe('Server Endpoints', () => {
    it('should return server status', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
    });
});
