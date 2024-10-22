import React from "react";
import { TextInputProps, DimensionValue } from "react-native";
import AppTextInput from "../Fields/AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useField } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface AppFormFieldI extends TextInputProps {
  name: string;
  widthContainer?: DimensionValue;
  maxLength?: number;
  placeholder: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

export default function AppFormField({
  name,
  widthContainer,
  icon,
  ...otherProps
}: AppFormFieldI) {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setTouched } = helpers;

  return (
    <>
      <AppTextInput
        icon={icon}
        onBlur={() => setTouched(true)}
        onChangeText={field.onChange(name)}
        value={value}
        widthContainer={widthContainer}
        hasErrors={!!meta.touched && !!meta.error}
        {...otherProps}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage error={meta.error} visible={meta.touched} />
      ) : null}
    </>
  );
}
