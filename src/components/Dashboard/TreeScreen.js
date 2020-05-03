/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useCollections } from '../../context/collectionsContext';
import SaveButton from './SaveButton';

/*
 * /collections/:id/tree
 */

function TreeScreen() {
  const { collection } = useCollections();
  const { name } = collection;
  return name ? (
    <div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Tree</h1>
        <SaveButton />
      </div>
    </div>
  ) : (
    ''
  );
}

export default TreeScreen;
