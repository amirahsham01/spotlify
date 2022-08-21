import styled from 'styled-components';
import { breakpoints } from '../../../helpers/utils';

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

  @media (max-width: ${breakpoints.lg}) {
    margin-top: 3.5rem;
  }
`;

export const AvatarImg = styled.img`
  max-width: 6rem;
  transition: all 0.2s ease;

  @media (max-width: ${breakpoints.lg}) {
    width: 2rem;
  }
`;

export const Title = styled.p`
  display: block;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0;

  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;
