const { app } = require("../app");
const chai = require("chai");
const models = require("../models/index.models");
const request = require('supertest');
const chaihttp = require("chai-http");
const { default: mongoose } = require("mongoose");

const newApp = request.agent(app);

chai.should();
chai.use(chaihttp);

// before((done) => {
//   mongoose.connect('mongodb://localhost:27017/arrenda', () => {
//     mongoose.connection.db.dropDatabase(() => {
//       done();
//     })
//   })
// })
// describe('get function', () => {
//   let x;
//   before('Get contacts', async () => {
//     x = await models.contact.findOne()
//   })
// })
// describe("Contacts tests", () => {
  describe("GET CONTACTS", async () => {
    let result
    before(async () => {
      result = await (await newApp.get("/api/v1/contacts").send({
        _id: "63192d0b1d0ff610536a839c"
      }))
    })
    it("It should return a list of contacts", (done) => {
      expect(result.status).to.equal(200)
      done()
    });
  });
// });
