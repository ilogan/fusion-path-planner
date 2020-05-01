/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { Link } from '@reach/router';

/*
 * /collections
 */

const CollectionListScreenContainer = styled.div({});

// same size as current navbar
const NavSpacer = styled.div({
  height: '3rem',
  marginBottom: '1rem',
  backgroundColor: 'gray',
});

const CollectionListContentContainer = styled.div({
  padding: '1rem 2rem',
});

function CollectionListScreen() {
  return (
    <CollectionListScreenContainer>
      <NavSpacer />
      <CollectionListContentContainer>
        <h1>Collections</h1>
        <Link to="/collections/1">Specific Collection</Link>
      </CollectionListContentContainer>
    </CollectionListScreenContainer>
  );
}

export default CollectionListScreen;
