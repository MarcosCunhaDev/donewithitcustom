import styled from 'styled-components/native';
import defaultStyles from '@/config/defaultStyles';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  width: 80px;
  height: 80px;
  margin-vertical: 10px;
  background-color: ${defaultStyles.colors.light};
  justify-content: center;
  margin-left: 5px;
`;