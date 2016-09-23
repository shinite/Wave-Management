var should = require("chai").should(),
supertest = require("supertest"),
var url = supertest("http://localhost:8080");

app = require("../app");


describe("Testing /wave/add", function(err){
  it("should respond", function(done){
    url
    .post("/wave/add")
    .expect(200)
    .send({
      "waveName": 'hello',
      "waveType": 'nice',
      "Location": 'ddn',
      "NumberOfParticipants": 23,
      "plannedStartDate": '2016-09-02',
      "plannedEndDate": '2016-09-29'
    })
    .end(function(err,res){
      res.text.should.be.equal("Wave successful");
      done();
    });
  });
});

describe("Testing /wave/display ", function(err){
  it("should respond", function(done){
    url
    .get("/wave/display")
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      var myObj = JSON.parse(res.text);
      console.log(myObj);
      myObj[0].waveName.should.be.equal("a");
      done();
    });

  });
});
