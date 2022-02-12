import { resultController } from "../../src/controllers/result";

const getSpy = jest.fn();

jest.doMock("express", () => {
  return {
    Router() {
      return {
        get: getSpy,
      };
    },
  };
});

describe("Test if the route...", () => {
  require("../../src/routes/result");

  it("'/result' is been called correctly", () => {
    expect(getSpy).toHaveBeenCalledWith("/result", resultController);
  });
});
