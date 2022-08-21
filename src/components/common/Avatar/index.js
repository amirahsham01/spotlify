import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const Avatar = ({ src }) => {
  return (
    <Styled.AvatarWrapper>
      <Styled.AvatarImg src={src} alt="avatar" />
      <Styled.Title>Bob Smith</Styled.Title>
    </Styled.AvatarWrapper>
  );
};

Avatar.propTypes = {
  src: PropTypes.string
};

export default Avatar;
