import { css } from '@emotion/core';

export const tierColor = (tier) => {
  switch (+tier) {
    case 0:
      return css({ backgroundColor: 'black' });
    case 1:
      return css({ backgroundColor: 'gray' });
    case 2:
      return css({ backgroundColor: 'white', border: '1px solid black' });
    case 3:
      return css({ backgroundColor: 'green' });
    case 4:
      return css({ backgroundColor: 'blue' });
    case 5:
      return css({ backgroundColor: 'purple' });
    case 6:
      return css({ backgroundColor: 'gold' });
    default:
      return css({ backgroundColor: 'orange' });
  }
};
