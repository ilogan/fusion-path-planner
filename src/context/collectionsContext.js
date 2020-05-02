import React, { createContext, useContext, useState, useMemo } from 'react';

const CollectionsContext = createContext();

function CollectionsProvider(props) {
  const [collections, setCollections] = useState([]);
  const [collection, setCollection] = useState({});
  const collectionsMemo = useMemo(() => [collections, setCollections], [
    collections,
  ]);
  const collectionMemo = useMemo(() => [collection, setCollection], [
    collection,
  ]);
  const value = {
    collections: collectionsMemo,
    collection: collectionMemo,
  };
  return <CollectionsContext.Provider value={value} {...props} />;
}

function useCollections() {
  const context = useContext(CollectionsContext);
  if (!context)
    throw new Error('useCollections must be used within CollectionProvider');

  const [collections, setCollections] = context.collections;
  const [collection, setCollection] = context.collection;

  return {
    collections,
    setCollections,
    collection,
    setCollection,
  };
}

export { CollectionsProvider, useCollections };
