import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Image = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
`;

export const BoxLogo = styled.View`
  margin-top: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Tagline = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-: 10px;
`;

export const ButtonsContainer = styled.View`
  padding-vertical: 15px;
  height: 30%;
  width: 100%;
  padding-horizontal: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
