import styled from 'styled-components';
import { breakpoints } from '../../../helpers/utils';

export const ScrollContainer = styled.div`
  padding: 25px 45px;
  padding-bottom: 0;
`;

export const Title = styled.div`
  color: #ccc9d6;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 18px;

  h4 {
    display: inline-block;
    margin-right: 1.5rem;
  }

  div {
    display: inline-block;
    background: #ccc9d6;
    width: 65%;
    height: 2px;
    opacity: 0.8;
    margin-right: 1.5rem;
    margin-bottom: 4px;
  }

  button:first-of-type {
    margin-right: 10px;
  }

  button {
    background-color: transparent;
    border-width: 0;
    padding: 2px 5px;
    color: #4c46ce;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: #feada0;
    }
  }

  @media (max-width: ${breakpoints.xl}) {
    div {
      width: 25%;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    div {
      width: 5%;
    }
  }
`;

export const Scrollable = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  min-height: 240px;
  padding-left: 35px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  flex: 0 0 auto;
  width: min-content;
  text-align: center;
  font-weight: 600;
  margin-right: 35px;

  div {
    height: 180px;
    width: 180px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 5px;
    }

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;
