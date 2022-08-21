import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styles';

const ScrollContainer = ({ title, items }) => {
  const ref = useRef(null);

  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <Styled.ScrollContainer>
      <Styled.Title>
        <h4>{title}</h4>
        <div />
        <button onClick={() => scroll(-750)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={() => scroll(750)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </Styled.Title>
      <Styled.Scrollable ref={ref}>
        {/* Cards here */}
        {items.length === 0 ? (
          <p>There is no data to display.</p>
        ) : (
          <>
            {items.map((item, index) => {
              return (
                <Styled.Card key={index}>
                  <div>
                    <img src={item.images[0].url} />
                  </div>
                  <p>{item.name}</p>
                </Styled.Card>
              );
            })}
          </>
        )}
      </Styled.Scrollable>
    </Styled.ScrollContainer>
  );
};

ScrollContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default ScrollContainer;
