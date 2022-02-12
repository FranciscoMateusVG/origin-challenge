import createError from "http-errors";
import fetch from "node-fetch";

import { Request, Response, NextFunction } from "express";

/**Conexao com o banco de dados */
export default async function checkParametersValidity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const params = req.query;

  if (Object.keys(params).length === 0)
    next(
      createError(
        400,
        "Parameters monthly_costs AND annual_income not informed"
      )
    );

  const { monthly_costs, annual_income } = params;

  if (!monthly_costs || !annual_income)
    next(
      createError(400, "Parameters monthly_costs OR annual_income not informed")
    );

  const isNumberMonthlyCosts = !isNaN(parseFloat(monthly_costs as string));
  const isNumberAnnualincome = !isNaN(parseFloat(annual_income as string));

  if (!isNumberMonthlyCosts || !isNumberAnnualincome)
    next(
      createError(
        400,
        "Parameters monthly_costs OR annual_income is not an Number"
      )
    );

  const numberMonthlyCosts = parseFloat(monthly_costs as string);
  const numberAnnualCosts = numberMonthlyCosts * 12;
  const numberAnnualincome = parseFloat(annual_income as string);

  if (numberAnnualCosts > numberAnnualincome)
    next(createError(400, "Annual costs can not be higher than annual income"));

  next();
}
