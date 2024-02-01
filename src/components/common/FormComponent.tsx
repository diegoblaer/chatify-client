"use client";

import { ReactElement } from "react";
import FormError from "./FormError";
import FormLabel from "./FormLabel";

interface FormComponentProps {
  label: string;
  component: ReactElement<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  error?: string;
}

const FormComponent = ({ label, component, error }: FormComponentProps) => {
  return (
    <div>
      <FormLabel htmlFor={component.props.name} text={label} />
      {component}
      {error && <FormError error={error} />}
    </div>
  );
};

export default FormComponent;
