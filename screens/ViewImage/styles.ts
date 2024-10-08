import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Photo = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
  resize-mode: contain;
  flex-shrink: 1;
`;

const RowIcons = styled.View`
  margin-top: 30px;
  position: relative;
  height: 100px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Placeholder = styled.View`
  position: relative;
  width: 50px;
  height: 50px;
`;

export { Container, Photo, RowIcons, Placeholder };