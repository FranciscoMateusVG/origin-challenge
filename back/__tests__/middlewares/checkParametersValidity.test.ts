import request from "supertest";
import app from "../../src/app";

describe("Test if the middleware return status 400 when...", () => {
  it("one of the parameters is not an number", async (done) => {
    const responseGet = await request(app).get(
      "/result?annual_income=abv&monthly_costs=30"
    );
    expect(responseGet.status).toBe(400);

    done();
  });

  it("one of the parameters is missing", async (done) => {
    const responseGet = await request(app).get("/result?annual_income=1000");

    expect(responseGet.status).toBe(400);

    done();
  });

  it("both of the parameters is missing", async (done) => {
    const responseGet = await request(app).get("/result");

    expect(responseGet.status).toBe(400);

    done();
  });

  it("annual cost is higher than annual income", async (done) => {
    const responseGet = await request(app).get(
      "/result?annual_income=1000&monthly_costs=100"
    );

    expect(responseGet.status).toBe(400);

    done();
  });
});
