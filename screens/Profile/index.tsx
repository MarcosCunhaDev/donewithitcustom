import { login } from "@/api/auth";
import { useAuthContext } from "@/auth/context";
import AppFormField from "@/components/Forms/AppFormField";
import ErrorMessage from "@/components/Forms/ErrorMessage";
import SubmitButton from "@/components/Forms/SubmitButton";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Container, Logo, ProfileImage, ContainerButton } from "./styles";
import { useLogin } from "@/hooks/react-query/auth";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

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

const Profile = () => {
  const { logInUser } = useAuthContext();
  const { mutate: login, error, isPending, isError } = useLogin();
  const { user, setUser, logOut } = useAuthContext();

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
    <Container>
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
          <ProfileImage>
            <MaterialCommunityIcons name="account" size={80} color={"gray"} />
          </ProfileImage>
          <AppFormField
            icon="account"
            placeholder="Name"
            autoCapitalize="none"
            name="name"
            autoCorrect={false}
            keyboardType="name-phone-pad"
            textContentType="name"
            defaultValue={user?.name || ""}
          />
          <AppFormField
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            name="email"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            defaultValue={user?.email || ""}
          />
          <ContainerButton>
            <SubmitButton label="Save" />
          </ContainerButton>
        </>
      </Formik>
    </Container>
  );
};

export default Profile;
