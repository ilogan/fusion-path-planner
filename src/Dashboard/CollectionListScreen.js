/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { useCollections } from '../context/collectionsContext';
/*
 * /collections
 */

const CollectionListScreenContainer = styled.div({});

// same size as current navbar
const NavSpacer = styled.div({
  height: '3rem',
  marginBottom: '1rem',
  boxShadow: '0px 0px 4px rgba(0,0,0,20%)',
});

const CollectionListContentContainer = styled.div({
  padding: '1rem 2rem',
});

const TableContainer = styled.table({
  width: '50vw',
});

function CollectionListScreen() {
  const [collections] = useCollections();
  return (
    <CollectionListScreenContainer>
      <NavSpacer />
      <CollectionListContentContainer>
        <h1>Collections</h1>
        <TableContainer>
          <thead>
            <tr>
              <th>Collection</th>
              <th>Tier Type</th>
              <th>Node Type</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((c) => (
              <tr>
                <Link to={`/collections/${c.id}`}>
                  <td>{c.collectionName}</td>
                </Link>
                <td>{c.tierName}</td>
                <td>{c.nodeName}</td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </CollectionListContentContainer>
    </CollectionListScreenContainer>
  );
}

export default CollectionListScreen;
