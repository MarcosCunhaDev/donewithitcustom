import { login } from "@/api/auth";
import { useAuthContext } from "@/auth/context";
import AppFormField from "@/components/Forms/AppFormField";
import ErrorMessage from "@/components/Forms/ErrorMessage";
import SubmitButton from "@/components/Forms/SubmitButton";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Container, Logo } from "./styles";
import { useLogin, useRegisterUser } from "@/hooks/react-query/auth";
import ActivityIndicator from "@/components/ActivityIndicator";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: SignupFormValues = {
  email: "",
  password: "",
  name: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  name: Yup.string().required().label("Name"),
});

const Signup = () => {
  const {
    mutate: signup,
    error: errorSignup,
    isPending: isPendingSignup,
    isError: isErrorSignup,
    data,
  } = useRegisterUser();
  const { isPending: isPendingLogin } = useLogin();

  const handleSubmit = async ({ name, email, password }: SignupFormValues) => {
    await signup({ name, email, password });
  };

  return (
    <>
      <ActivityIndicator visible={isPendingLogin || isPendingSignup} />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <>
            <ErrorMessage
              error="Invalid email and/or password."
              visible={isErrorSignup}
            />
            <AppFormField
              icon="account"
              placeholder="Name"
              autoCapitalize="none"
              name="name"
              autoCorrect={false}
              keyboardType="default"
              textContentType="name"
            />
            <AppFormField
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              name="email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              name="password"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
            />
            <SubmitButton label="Register" />
          </>
        </Formik>
      </Container>
    </>
  );
};

export default Signup;
