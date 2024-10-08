import styled from 'styled-components/native';
import defaultStyles from '@/config/defaultStyles'; // Adjust the path to where your defaultStyles is located

const Container = styled.View<{ widthContainer?: string | number }>`
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  padding: 12px;
  margin-vertical: 10px;
  background-color: ${defaultStyles.colors.light};
  width: ${props => props.widthContainer || '100%'};

`;

const Icon = styled.View`
  margin-right: 10px;
`;

const Text = styled.Text`
  flex: 1;
`;

const Placeholder = styled.Text`
  flex: 1;
  color: ${defaultStyles.colors.medium};
`;

const EmptyView = styled.View`
  width: 120px;
  height: 120px;
`;

export { Container, Icon, Text, Placeholder, EmptyView };