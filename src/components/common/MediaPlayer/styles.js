import styled from 'styled-components';
import { breakpoints } from '../../../helpers/utils';

export const MediaPlayer = styled.div`
  display: none;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #ccc9d6;
  background-color: #fff;
  opacity: 0.95;
  text-align: center;
  padding: 15px 20px;
  font-size: 20px;

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Progressbar = styled.div`
  background: #ccc9d6;
  width: 30%;
  height: 3px;
  margin: 0 1.5rem;
  border-radius: 3px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc9d6;
  font-size: 20px;
  padding-left: 20px;

  svg:nth-of-type(2) {
    font-size: 48px;
    padding: 0 18px;
    color: #4c46ce;
  }
`;
