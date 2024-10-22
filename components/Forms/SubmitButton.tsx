import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button";

interface SubmitButtonI {
  label: string;
  color?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const SubmitButton = ({
  label,
  color,
  disabled,
  isLoading = false,
}: SubmitButtonI) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <Button
      disabled={!isValid || disabled}
      label={label}
      onPress={handleSubmit}
      color={color ? color : undefined}
      isLoading={isLoading}
    />
  );
};

export default SubmitButton;
