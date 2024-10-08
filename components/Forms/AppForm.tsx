import React, { Children } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";

const AppForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({}) => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
