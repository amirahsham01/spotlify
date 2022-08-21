import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import illustration from '../../../assets/hero.svg';
import * as Styled from './styles';

const Banner = () => {
  return (
    <Styled.Banner>
      <Styled.BannerImg src={illustration} />
      <Styled.HeaderBox>
        <Styled.Header>Your favourite tunes</Styled.Header>
        <Styled.Subheader>
          All
          <FontAwesomeIcon icon={faSun} />
          and all
          <FontAwesomeIcon icon={faMoon} />
        </Styled.Subheader>
      </Styled.HeaderBox>
    </Styled.Banner>
  );
};

export default Banner;
