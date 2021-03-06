/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { useLocation, Link } from '@reach/router';
import { useCollections } from '../../context/collectionsContext';

/*
 * /collections/:id
 */

const homeLink = css({
  fontWeight: 'bold',
});

const NavbarContainer = styled.nav({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3rem',
  marginBottom: '1rem',
  padding: '1rem',
  boxShadow: '0px 0px 4px rgba(0,0,0,20%)',
});

const NavContent = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: '50%',
});

const CollectionContainer = styled.div({
  padding: '1rem 2rem',
});

function Collection({ children }) {
  const location = useLocation();
  const { collection, collections, setCollection } = useCollections();
  const [id, setId] = useState(null);

  const { name } = collection;

  // only change set id if location id differs from current id
  useEffect(() => {
    const currId = Number(location.pathname.split('/')[2]);
    if (currId !== id) setId(currId);
  }, [location, id, setId]);

  useEffect(() => {
    const currentCollection = collections.find((c) => c.id === id);
    if (currentCollection) setCollection(currentCollection);
  }, [id, collections, setCollection]);

  return (
    <div>
      <NavbarContainer>
        {name ? (
          <NavContent>
            <div>
              <Link to={`/collections/${id}/tree`}>Tree</Link>
            </div>
            <div>
              <Link to={`/collections/${id}`} css={homeLink}>
                {name}
              </Link>
            </div>
            <div>
              <Link to={`/collections/${id}/inventory`}>Inventory</Link>
            </div>
          </NavContent>
        ) : (
          ''
        )}
      </NavbarContainer>
      <CollectionContainer>{children}</CollectionContainer>
    </div>
  );
}

export default Collection;
