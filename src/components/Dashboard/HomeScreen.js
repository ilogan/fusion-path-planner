/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useCollections } from '../../context/collectionsContext';
/*
 * /collections/:id
 */

function HomeScreen() {
  const { collection } = useCollections();
  const { name } = collection;
  return collection.name ? (
    <div>
      <h1>{name} Dashboard</h1>
    </div>
  ) : (
    <div>No Collection found</div>
  );
}

export default HomeScreen;
