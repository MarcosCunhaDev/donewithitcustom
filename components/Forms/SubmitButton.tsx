import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button";

interface SubmitButtonI {
  label: string;
  color?: string;
}

const SubmitButton = ({ label, color }: SubmitButtonI) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      label={label}
      onPress={handleSubmit}
      color={color ? color : undefined}
    />
  );
};

export default SubmitButton;
