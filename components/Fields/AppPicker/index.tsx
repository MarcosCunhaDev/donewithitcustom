import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "@/config/defaultStyles";
import AppText from "@/components/AppText";
import PickerItem from "@/components/PickerItem";
import PickerItemCustom from "@/components/PickerItemCustom";
import { Container, EmptyView } from "./styles";
import { PickerItemI } from "@/components/Forms/AppFormPicker";

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  text: { flex: 1 },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
});

interface AppPickerI {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  placeholder: string;
  items: PickerItemI[];
  onSelectItem: (item: any) => void;
  selectedValue: { label: string };
  widthContainer: number | string;
  pickerType: "regular" | "custom";
}

const AppPicker = ({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedValue,
  widthContainer,
  pickerType,
}: AppPickerI) => {
  const [showModal, setShowModal] = useState(false);
  const numberCols = 3;

  const handleSelectItem = (item: any) => {
    setShowModal(false);
    onSelectItem(item);
  };

  function createRows(data: any, columns: number) {
    const rows = Math.floor(data?.length / columns); // [A]
    let lastRowElements = data?.length - rows * columns; // [B]
    if (lastRowElements) {
      for (var i = lastRowElements; i < columns; i++) {
        data.push({
          // [D]
          id: `empty-${lastRowElements}`,
          name: `empty-${lastRowElements}`,
          empty: true,
        });
      }
    }
    return data; // [F]
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <Container widthContainer={widthContainer}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedValue?.label ? (
            <AppText style={styles.text}>{selectedValue.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </Container>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType={"slide"}>
        <Button onPress={() => setShowModal(false)} title="Close Modal" />

        <FlatList
          numColumns={pickerType === "regular" ? 1 : numberCols}
          data={createRows(items, numberCols)}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => {
            if (item.empty) {
              return <EmptyView />;
            }

            if (pickerType === "regular") {
              return (
                <PickerItem
                  label={item.label}
                  onPress={() => handleSelectItem(item)}
                  hasChecked={
                    selectedValue ? item.label === selectedValue.label : false
                  }
                />
              );
            }
            if (pickerType === "custom") {
              return (
                <PickerItemCustom
                  label={item.label}
                  onPress={() => handleSelectItem(item)}
                  hasChecked={
                    selectedValue ? item.label === selectedValue.label : false
                  }
                  item={item}
                />
              );
            }
          }}
        />
      </Modal>
    </>
  );
};

export default AppPicker;
