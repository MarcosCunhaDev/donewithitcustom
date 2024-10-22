import { login } from "@/api/auth";
import { useAuthContext } from "@/auth/context";
import AppFormField from "@/components/Forms/AppFormField";
import SubmitButton from "@/components/Forms/SubmitButton";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Container, Logo, ProfileImage, ContainerButton } from "./styles";
import { useLogin } from "@/hooks/react-query/auth";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { InputPicture } from "@/components/InputPicture";

interface LoginFormValues {
  email: string;
  name: string;
}

const initialValues: LoginFormValues = {
  email: "",
  name: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().min(4).label("Name"),
});

const Profile = () => {
  const { logInUser } = useAuthContext();
  const { error, isPending, isError } = useLogin();
  const { user, setUser, logOut } = useAuthContext();

  const handleSubmit = async ({
    email,
    name,
  }: {
    email: string;
    name: string;
  }) => {
    console.log("chamou a função aqui", { name, email });
    // await login({ email, password });
  };

  return (
    <Container className="bg-white">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <>
          <InputPicture />
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
