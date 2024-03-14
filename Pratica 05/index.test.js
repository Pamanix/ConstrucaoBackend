const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar status 200 e um JSON no GET", async function (){
const response = await request.get("/produtos");
hasUncaughtExceptionCaptureCallback(response.status).toBe(200);
hasUncaughtExceptionCaptureCallback(response.headers['content-type']).toMatch(/json/);
});

