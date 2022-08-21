import styled from 'styled-components';
import { breakpoints } from '../../../helpers/utils';

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  margin-left: 15rem;
  padding: 0;
  padding-bottom: 100px;
  transition: all 0.2s ease-out;

  @media (max-width: ${breakpoints.lg}) {
    margin-left: 5rem;
  }
`;
