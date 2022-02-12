import { Request, Response } from "express";

export const resultController = async (req: Request, res: Response) => {
  try {
    const annualIncome = parseFloat(req.query.annual_income as string);
    const monthlyCosts = parseFloat(req.query.monthly_costs as string);

    let score = "";

    //At the end of the year, the user has to pay 8% x over his annual gross income.
    const deductionPercentage = 8;
    const annualNetCompensation =
      annualIncome * ((100 - deductionPercentage) / 100);

    //The user annual cost is its monthly costs times 12 months of a full year
    const userAnnualCosts = monthlyCosts * 12;

    //What is the percentage of the user annual costs represents over his annual net compensation
    const percentageOfUserAnnualCosts =
      (userAnnualCosts / annualNetCompensation) * 100;

    if (percentageOfUserAnnualCosts <= 25) score = "HEALTHY";
    if (percentageOfUserAnnualCosts > 25 && percentageOfUserAnnualCosts <= 75)
      score = "MEDIUM";
    if (percentageOfUserAnnualCosts > 75) score = "LOW";

    res.send({
      score,
      err: "",
    });
  } catch (error) {
    res.status(500).send({
      score: "",
      err: error,
    });
  }
};
