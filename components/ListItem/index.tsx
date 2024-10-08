import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";
import { Avatar, CardContainer, RowText, SubTitle, Title } from "./styles";

interface ListItemI {
  title?: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  IconComponent?: any;
  onPress?: () => void;
  renderRightActions?: any;
  showChevrons?: boolean;
}

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons,
}: ListItemI) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <CardContainer>
          {IconComponent}
          {image && <Avatar source={image} />}
          <RowText>
            <Title numberOfLines={1}>{title}</Title>
            {subTitle && <SubTitle numberOfLines={2}>{subTitle}</SubTitle>}
          </RowText>
          {showChevrons && (
            <Entypo name="chevron-right" size={24} color={colors.medium} />
          )}
        </CardContainer>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

