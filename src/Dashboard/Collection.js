/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';

/*
 * /collections/:id
 */

const NavbarContainer = styled.nav({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3rem',
  marginBottom: '1rem',
  padding: '1rem',
  boxShadow: '0px 0px 4px rgba(0,0,0,20%)',
});

const CollectionContainer = styled.div({
  padding: '1rem 2rem',
});

function Collection({ children }) {
  return (
    <div>
      <NavbarContainer>This is the navbar!</NavbarContainer>
      <CollectionContainer>{children}</CollectionContainer>
    </div>
  );
}

export default Collection;
