import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepBackward,
  faStepForward,
  faPlayCircle,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styles';

const MediaPlayer = () => {
  return (
    <Styled.MediaPlayer>
      <Styled.Controls>
        <FontAwesomeIcon icon={faStepBackward} />
        <FontAwesomeIcon icon={faPlayCircle} />
        <FontAwesomeIcon icon={faStepForward} />
      </Styled.Controls>
      <Styled.Progressbar />
      <FontAwesomeIcon icon={faEllipsisH} />
    </Styled.MediaPlayer>
  );
};

export default MediaPlayer;
