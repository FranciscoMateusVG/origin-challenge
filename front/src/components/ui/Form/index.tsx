import styles from "./index.module.css";
import { Formik, Form } from "formik";
import { Input } from "./Input";
import { Submit } from "./Submit";
import { useRouter } from "next/router";

interface Values {
  Annualincome: string;
  MonthlyCosts: string;
}

export const FormComponent: React.FC = () => {
  const { inputContainer, formContainer } = styles;
  const router = useRouter();

  const initialValues = {
    Annualincome: "",
    MonthlyCosts: "",
  };

  const onSubmit = (values: Values) => {
    const { Annualincome, MonthlyCosts } = values;
    const withoutCommasAnnualincome = Annualincome.replaceAll(",", "");
    const withoutCommasMonthlyCosts = MonthlyCosts.replaceAll(",", "");

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
