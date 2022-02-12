import styles from "./index.module.css";
import { Formik, Form, FormikHelpers } from "formik";
import { Input } from "./Input";
import { Submit } from "./Submit";
import { useRouter } from "next/router";

interface Values {
  Annualincome: string;
  MonthlyCosts: string;
}

export const FormComponent: React.FC = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        Annualincome: "",
        MonthlyCosts: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        const { Annualincome, MonthlyCosts } = values;
        const withoutCommasAnnualincome = Annualincome.replaceAll(",", "");
        const withoutCommasMonthlyCosts = MonthlyCosts.replaceAll(",", "");

        router.push(
          `/result?annual_income=${withoutCommasAnnualincome}&monthly_costs=${withoutCommasMonthlyCosts}`
        );
      }}
    >
      <Form>
        <div style={{ display: "flex" }}>
          <Input name="Annual income" />
          <Input name="Monthly Costs" />
        </div>

        <Submit />
      </Form>
    </Formik>
  );
};
