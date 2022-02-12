import styles from "./index.module.css";
import { Field } from "formik";
import { DollarSign } from "../../svg/DollarSign";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import MaskedInput from "react-text-mask";

interface IInput {
  name: string;
}

const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

//@ts-ignore
const CurrencyInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

export const Input: React.FC<IInput> = ({ name }) => {
  const { inputContainer, inputLabel, inputField, inputIcon } = styles;

  const nameWithoutWhiteSpace = name.replace(/ /g, "");

  return (
    <div className={inputContainer}>
      <label className={inputLabel} htmlFor={nameWithoutWhiteSpace}>
        {name}
      </label>
      <div className={inputIcon}>
        <DollarSign />
      </div>
      <Field
        name={nameWithoutWhiteSpace}
        render={({ field }: { field: any }) => (
          <CurrencyInput
            {...field}
            id={nameWithoutWhiteSpace}
            placeholder="Enter"
            type="text"
            className={inputField}
          />
        )}
      />
    </div>
  );
};
