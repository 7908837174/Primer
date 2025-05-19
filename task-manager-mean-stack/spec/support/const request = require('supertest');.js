const request = require('supertest');
const app = require('../server'); // Adjust path if needed

describe('GET /', () => {
  it('should return 200 and welcome message', async (done) => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Welcome'); // Adjust to match your actual response
    done();
  });
});

describe('API /health', () => {
  it('should return 200 and status ok', async (done) => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status || res.text).toContain('ok');
    done();
  });
});

describe('404 handler', () => {
  it('should return 404 for unknown route', async (done) => {
    const res = await request(app).get('/not-a-real-route');
    expect(res.status).toBe(404);
    done();
  });
});