import React, { createContext, useContext, useState, useMemo } from 'react';

const CollectionsContext = createContext();

function CollectionsProvider(props) {
  const [collections, setCollections] = useState([]);
  const value = useMemo(() => [collections, setCollections], [collections]);
  return <CollectionsContext.Provider value={value} {...props} />;
}

function useCollections() {
  const context = useContext(CollectionsContext);
  if (!context)
    throw new Error('useCollections must be used within CollectionProvider');
  return context;
}

export { CollectionsProvider, useCollections };
