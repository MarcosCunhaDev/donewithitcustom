import styled from 'styled-components/native';

const Logo = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 50px;
  margin-bottom: 20px;
  align-self: center;
`;

const Container = styled.View`
  padding: 10px;
`;

const ContainerInputs = styled.View`
  border-width: 1px;
  gap:20px;
`;

const ContainerButton = styled.View`
  border-width: 1px;
  margin-top: 40px;
`;

export { Logo, Container, ContainerInputs, ContainerButton };