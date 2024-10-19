import React from "react";
import { TouchableHighlight, ImageSourcePropType } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";
import { Avatar, CardContainer, RowText, SubTitle, Title } from "./styles";
import { useTheme } from "styled-components/native";

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
  const { colors } = useTheme();
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <CardContainer className="bg-white px-0 py-4">
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

