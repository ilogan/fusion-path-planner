/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { useEffect } from 'react';

import { useLocation } from '@reach/router';
import { useCollections } from '../../context/collectionsContext';
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
  const location = useLocation();
  const { collection, collections, setCollection } = useCollections();
  const { name } = collection;
  console.log('name', name);

  useEffect(() => {
    console.log('Collection useEffect', location, collections, collection);
    const id = Number(location.pathname.slice(-1));
    const currentCollection = collections.find((c) => c.id === id);
    setCollection(currentCollection);
  }, [location, collections, setCollection, collection]);

  return (
    <div>
      <NavbarContainer>{name ? name : ''}</NavbarContainer>
      <CollectionContainer>{children}</CollectionContainer>
    </div>
  );
}

export default Collection;
