import React from "react";
import { StyleSheet, Text, View, TextInputProps } from "react-native";
import AppTextInput from "../Fields/AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface AppFormFieldI extends TextInputProps {
  name: string;
  widthContainer?: number | string;
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
  const { handleChange, setFieldTouched, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        icon={icon}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        widthContainer={widthContainer}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
