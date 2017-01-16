import { styled } from 'styletron-react';
import { color, layout, utility } from '../../styles';

const linkSpacing = '15px';

export const NavigationContainer = styled('div', {
  background: color.grey99,
  ...utility.flexFlow('row', 'nowrap'),
  height: layout.navigation.height,
});

export const Logo = styled('h1', {
  color: 'hsla(0, 0%, 0%, .4)',
  fontSize: '30px',
  fontWeight: '700',
  lineHeight: '26px',
  marginLeft: '3px',
  marginTop: '4px',
});

export const Links = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  width: `calc(720px + (${linkSpacing} * 2))`,
  alignSelf: 'center',
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const Link = styled('a', (props) => {
  const {
    active,
    right,
  } = props;

  return {
    fontSize: '34px',
    fontWeight: '700',
    color: active ? color.black : color.grey80,
    cursor: active ? 'default' : 'pointer',
    marginLeft: right && 'auto',
    padding: `0 ${linkSpacing}`,

    ':hover': {
      color: !active && color.grey60,
    }
  }
});

