import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button";

interface SubmitButtonI {
  label: string;
  color?: string;
  disabled?: boolean;
}

const SubmitButton = ({ label, color, disabled }: SubmitButtonI) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <Button
      disabled={!isValid || disabled}
      label={label}
      onPress={handleSubmit}
      color={color ? color : undefined}
    />
  );
};

export default SubmitButton;
