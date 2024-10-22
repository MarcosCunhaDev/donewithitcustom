import { useAuthContext } from "@/auth/context";
import AppFormField from "@/components/Forms/AppFormField";
import ErrorMessage from "@/components/Forms/ErrorMessage";
import SubmitButton from "@/components/Forms/SubmitButton";
import { useLogin } from "@/hooks/react-query/auth";
import { Formik } from "formik";
import React from "react";
import { Image, View } from "react-native";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = () => {
  const { logInUser } = useAuthContext();
  const { mutate: login, error, isPending, isError } = useLogin();

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await login({ email, password });
  };

  return (
    <View className="bg-white px-4 py-2">
      <Image
        className="mb-5 mt-14 h-20 w-20 self-center"
        source={require("../../assets/logo-red.png")}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <>
          <ErrorMessage
            error="Invalid email and/or password."
            visible={isError}
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
          <SubmitButton label="login" isLoading={isPending} />
        </>
      </Formik>
    </View>
  );
};

export default Login;
