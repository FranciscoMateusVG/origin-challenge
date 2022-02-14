import styles from "./index.module.css";
import { Formik, Form } from "formik";
import { Input } from "./Input";
import { Submit } from "./Submit";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";

interface Values {
  Annualincome: string;
  MonthlyCosts: string;
}

export const FormComponent: React.FC = () => {
  const { inputContainer, formContainer } = styles;
  const router = useRouter();
  const alert = useAlert();

  const initialValues = {
    Annualincome: "",
    MonthlyCosts: "",
  };

  const onSubmit = (values: Values) => {
    const { Annualincome, MonthlyCosts } = values;

    const withoutCommasAnnualincome = Annualincome.replaceAll(",", "");
    const withoutCommasMonthlyCosts = MonthlyCosts.replaceAll(",", "");

    const numberAnnualincome = parseFloat(withoutCommasAnnualincome);
    const numberMonthlyCosts = parseFloat(withoutCommasMonthlyCosts);

    if (!Annualincome) {
      alert.error("Please insert an Annual Income.");
      return;
    }

    if (!MonthlyCosts) {
      alert.error("Please insert a Monthly Cost.");
      return;
    }

    if (numberMonthlyCosts * 12 > numberAnnualincome) {
      alert.error("Annual cost cant be greater than Annual Income.");
      return;
    }

    router.push(
      `/result?annual_income=${withoutCommasAnnualincome}&monthly_costs=${withoutCommasMonthlyCosts}`
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className={formContainer}>
          <div className={inputContainer}>
            <Input name="Annual income" />
            <Input name="Monthly Costs" />
          </div>

          <Submit />
        </div>
      </Form>
    </Formik>
  );
};
