const request = require('supertest');
const app = require('../app');

describe('Testes da API de Livros', () => {
  it('GET /livros deve retornar status 200', async () => {
    const res = await request(app).get('/livros');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
