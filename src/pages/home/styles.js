import { styled } from 'styletron-react';
import { color } from '../../styles';

const photoContainerSize = '800px';

function location(index) {
  const position = 100 * (index - 1);

  return {
    transform: `translate3d(${position}px, ${position}px, 0)`,
  };
}

const zIndex = {
  hover: {
    zIndex: 30,
  },
  1: {
    zIndex: 25,
  },
  2: {
    zIndex: 20,
  },
  3: {
    zIndex: 15,
  },
  4: {
    zIndex: 10,
  },
  5: {
    zIndex: 5,
  },
};


export const HomeContainer = styled('div', {
  margin: 'auto',
});

export const Title = styled('h1', (props) => {
  const {
    inPhoto,
  } = props;

  return {
    fontSize: '116px',
    fontWeight: '700',
    color: inPhoto ? color.white : color.black,

    position: 'fixed',
    top:  -30 + -45 + 'px',
    left: '-112px',

    width: '600px',
  };
});

export const PhotoContainer = styled('div', {
  position: 'relative',
  height: photoContainerSize,
  width: photoContainerSize,
  transform: 'translateZ(0)',
});

export const Photo = styled('div', (props) => {
  const {
    index,
    url,
  } = props;
  const size = '400px';

  return {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',

    overflow: 'hidden',

    position: 'absolute',
    ...location(index),
    ...zIndex[index],

    height: size,
    width: size,

    ':hover': {
      ...zIndex['hover'],
    }
  }

});

