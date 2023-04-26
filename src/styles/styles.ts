import styled from 'styled-components';
import { H2 } from './';

export const TitleSection = styled(H2)``;

export const WrapperScrollX = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 0.625rem;
  width: 100%;
`;

export const WrapperScrollY = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 50px;
`;

export const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


