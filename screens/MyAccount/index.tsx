import { useAuthContext } from "@/auth/context";
import Icon from "@/components/IconBox";
import ItemSeparator from "@/components/ItemSeparator";
import ListItem from "@/components/ListItem";
import colors from "@/config/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../Default";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";



const data = {
  name: "Marcos Cunha",
  email: "marcos@gmail.com",
  image: require("../../assets/mosh.jpg"),
};

interface MyListItemI {
  title: string;
  icon: {
    name: keyof typeof MaterialCommunityIcons.glyphMap;
    backgroundColor: string;
  };
  targetScreen?: string;
}

const dummy_data: MyListItemI[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "MessagesScreen",
  },
];

const MyAccount = () => {
  const { user, setUser, logOut } = useAuthContext();
  const navigation = useNavigation<any>();

  return (
    <Screen>
      <StatusBar style="dark" />
      <View className="my-5">
        <ListItem
          title={user?.name}
          subTitle={user?.email}
          image={data.image}
          onPress={() => navigation.navigate("ProfileScreen")}
          showChevrons
        />
      </View>
      <View className="my-5">
        <FlatList
          data={dummy_data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={
                  item.targetScreen
                    ? () => {
                        navigation.navigate(`${item.targetScreen}`);
                      }
                    : () => {}
                }
              />
            );
          }}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={logOut}
      />
    </Screen>
  );
};

export default MyAccount;
