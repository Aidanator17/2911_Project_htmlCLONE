// we will use supertest to test HTTP requests/respones
const request = require("supertest")

const app = require("../app")


describe('api', () => {
  describe('get /', () => {
    it('should return a 200', () => {
      request("https://chessresults.herokuapp.com").get('/').then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });
  });
});


describe('api', () => {
  describe('get /', () => {
    it('should return a 200', () => {
      request("https://chessresults.herokuapp.com").get("/match/e3adf9d5-bc29-43c4-84d7-43b94c17999a").then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });
  });
});


describe('api', () => {
  describe('get /', () => {
    it('should return a 500', () => {
      request("https://chessresults.herokuapp.com").get('/match/e3adf9d5-bc29-43c4-84d7-43b94c1799b1').then((res) => {
        expect(res.statusCode).toBe(500);
      });
    });
  });
});


