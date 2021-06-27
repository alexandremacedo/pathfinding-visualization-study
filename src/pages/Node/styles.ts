import styled from 'styled-components';
import { INode } from './dtos';

export const Container = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  background: ${props => props.color}
`;
