import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import useLocation from "../../hooks/useLocation";
import AppForm from "../../components/Forms/AppForm";
import AppFormField from "../../components/Forms/AppFormField";
import SubmitButton from "../../components/Forms/SubmitButton";
import Screen from "../Default";
import { Formik, validateYupSchema } from "formik";
import AppFormPicker from "../../components/Forms/AppFormPicker";
import FormImagePicker from "../../components/Forms/FormImagePicker";
import listingsApi from "../../api/listings";
import UploadScreen from "../UploadScreen";
import { StatusBar } from "expo-status-bar";

export interface MyFormValues {
  title: string;
  description: string;
  price: string;
  category: number | null;
  images: string[] | null;
}

const initialValues: MyFormValues = {
  title: "",
  description: "",
  price: "",
  category: null,
  images: [],
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backColorIcon: "#fc5c65",
    iconName: "floor-lamp",
  },
  { label: "Cars", value: 2, backColorIcon: "#fd9644", iconName: "car" },
  { label: "Cameras", value: 3, backColorIcon: "#fed330", iconName: "camera" },
  { label: "Games", value: 4, backColorIcon: "#26de81", iconName: "cards" },
  {
    label: "Clothing",
    value: 5,
    backColorIcon: "#2bcbba",
    iconName: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backColorIcon: "#45aaf2",
    iconName: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backColorIcon: "#4b7bec",
    iconName: "headphones",
  },
];

export default function ListingEditScreen() {
  const { location } = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const onProgress = (value: any) => {
    setProgress(value.loaded / value.total);
  };

  const handleSubmit = async (
    values: MyFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...values, location },
      onProgress
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing.");
    }
    resetForm();
  };

  return (
    <Screen>
      <StatusBar style="dark" />
      <UploadScreen
        onDone={() => {
          setUploadVisible(false);
        }}
        visible={uploadVisible}
        progress={progress}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <>
          <FormImagePicker name="images" />
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            widthContainer={"35%"}
            name="price"
            placeholder="Price"
          />
          <AppFormPicker
            items={categories}
            pickerType="custom"
            name="category"
            widthContainer={"40%"}
            placeholder="Category"
          />
          <AppFormField
            maxLength={255}
            name="description"
            placeholder="Description"
            numberOfLines={3}
          />
          <SubmitButton label="Post" />
        </>
      </Formik>
    </Screen>
  );
}


