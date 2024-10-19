import styled from 'styled-components/native';

const CardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-left: 10px;
`;

const RowText = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: grey;
`;

export { CardContainer, Avatar, RowText, Title, SubTitle };