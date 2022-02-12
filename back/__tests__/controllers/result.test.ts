import request from "supertest";
import app from "../../src/app";

describe("Test if controller result is...", () => {
  it("returning HEALTHY when the user annual costs represents less than or is equal to 25% of his annual net compensation", async (done) => {
    const responseGet = await request(app).get(
      "/result?annual_income=1000&monthly_costs=10"
    );

    expect(responseGet.body).toMatchObject({
      score: "HEALTHY",
      err: "",
    });

    expect(responseGet.status).toBe(200);

    done();
  });

  it("returning MEDIUM when the user annual costs is greater than 25% and less than or equal 75% of his annual net compensation", async (done) => {
    const responseGet = await request(app).get(
      "/result?annual_income=1000&monthly_costs=30"
    );

    expect(responseGet.body).toMatchObject({
      score: "MEDIUM",
      err: "",
    });

    expect(responseGet.status).toBe(200);

    done();
  });

  it("returning LOW when the user annual costs is greater than 75% of his annual net compensation", async (done) => {
    const responseGet = await request(app).get(
      "/result?annual_income=1000&monthly_costs=80"
    );

    expect(responseGet.body).toMatchObject({
      score: "LOW",
      err: "",
    });

    expect(responseGet.status).toBe(200);

    done();
  });
});
