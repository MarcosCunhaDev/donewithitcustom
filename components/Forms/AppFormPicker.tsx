import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../Fields/AppPicker";
import ErrorMessage from "./ErrorMessage";

export interface PickerItemI {
  label: string;
  value: number;
  backColorIcon: string;
  iconName: string;
}
export interface AppFormPickerI {
  items: PickerItemI[];
  name: string;
  placeholder: string;
  widthContainer: number | string;
  pickerType: "regular" | "custom";
}

export default function AppFormPicker({
  items,
  name,
  placeholder,
  widthContainer,
  pickerType,
}: AppFormPickerI) {
  const { setFieldValue, touched, values, errors } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        placeholder={placeholder}
        selectedValue={values[name]}
        widthContainer={widthContainer}
        pickerType={pickerType}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
