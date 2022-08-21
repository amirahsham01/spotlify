import styled from 'styled-components';
import { breakpoints } from '../../../helpers/utils';

export const Banner = styled.div`
  min-height: 220px;
  height: 28vh;
  width: 100%;
  background-color: #feada0;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.lg}) {
    min-height: 180px;
  }

  @media (max-width: ${breakpoints.xl}) {
    min-height: 180px;
    height: 24vh;
  }
`;

export const BannerImg = styled.img`
  height: 100%;
  width: auto;
  transition: all 0.2s ease-out;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-right: 3.5rem;
  text-align: right;
  color: #ffffff;
  font-weight: 600;

  @media (max-width: ${breakpoints.md}) {
    text-align: left;
    margin-left: 3.5rem;
  }
`;

export const Header = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0;

  @media (max-width: ${breakpoints.xl}) {
    font-size: 1.9rem;
  }

  @media (min-width: ${breakpoints.xxl}) {
    font-size: 2.4rem;
  }
`;

export const Subheader = styled.h5`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 8px;

  svg:first-of-type {
    color: #ffce35;
    padding: 0 0.5rem;
  }

  svg:nth-of-type(2) {
    color: #2e3031;
    padding-left: 0.5rem;
  }

  @media (max-width: ${breakpoints.xl}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${breakpoints.xxl}) {
    font-size: 1.7rem;
  }
`;
