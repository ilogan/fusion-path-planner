/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { useCollections } from '../../context/collectionsContext';

/*
 * /collections/:id
 */

const WrapperCard = styled.div({
  width: '10rem',
  height: '13rem',
  backgroundColor: 'gray',
});

function HomeScreen() {
  const { collection } = useCollections();
  const { name } = collection;
  return collection.name ? (
    <div>
      <h1>{name} Dashboard</h1>
      <div>
        <h2>Wrappers</h2>
        <div>
          {collection.wrappers.map((w) => (
            <WrapperCard key={w.id}>{w.name}</WrapperCard>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>No Collection found</div>
  );
}

export default HomeScreen;
