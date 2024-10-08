import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PickerItem from '../Fields/AppPicker';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';
import ImageInputList from '../Fields/ImageInputList';

export default function FormImagePicker({ name }) {
  const { setFieldValue, touched, values, errors } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const deleteItem = (uriItem) => {
    const filtered = imageUris.filter((uri) => uri !== uriItem);
    setFieldValue(name, filtered);
  };

  const handleRemove = (uriItem) => {
    const filtered = imageUris.filter((uri) => uri !== uriItem);
    setFieldValue(name, filtered);
  };

  return (
    <>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
