/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { useState } from 'react';
import { useCollections } from '../../context/collectionsContext';
const FormContainer = styled.form({
  padding: '.75rem',
  backgroundColor: '#FFFFFF',
  boxShadow: 'inset 0px 1px 10px rgba(0,0,0,20%)',
  color: 'black',
});
const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
});

const Row = styled.div({
  display: 'flex',
});

function CollectionListScreen() {
  const { collections, setCollections } = useCollections();
  const [collectionName, setCollectionName] = useState('');
  const [tierType, setTierType] = useState('');
  const [nodeType, setNodeType] = useState('');
  const [isPrefix, setIsPrefix] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCollections([
      ...collections,
      {
        id: collections.length + 1,
        name: collectionName,
        tierType,
        isPrefix,
        nodeType,
        wrappers: [],
      },
    ]);
    setCollectionName('');
    setTierType('');
    setIsPrefix(true);
    setNodeType('');
  };

  return (
    <div>
      <h3>Add a Collection</h3>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="collection">Collection name:</label>
          <input
            id="collection"
            type="text"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="tierType">Tier name:</label>
          <input
            id="tierType"
            type="text"
            value={tierType}
            onChange={(e) => setTierType(e.target.value)}
          />
          <Row
            css={{
              justifyContent: 'space-around',
              fontSize: '.75rem',
              marginTop: '.25rem',
            }}
          >
            <div>
              <label htmlFor="pre" css={{ marginRight: '.25rem' }}>
                pre
              </label>
              <input
                id="pre"
                name="order"
                type="radio"
                checked={isPrefix}
                onChange={() => setIsPrefix(true)}
              />
            </div>
            <div>
              <label htmlFor="post" css={{ marginRight: '.25rem' }}>
                post
              </label>
              <input
                id="post"
                name="order"
                type="radio"
                checked={!isPrefix}
                onChange={() => setIsPrefix(false)}
              />
            </div>
          </Row>
        </FormGroup>
        <FormGroup>
          <label htmlFor="nodeType">Node name:</label>
          <input
            id="nodeType"
            type="text"
            value={nodeType}
            onChange={(e) => setNodeType(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <button type="submit">+ Add</button>
        </FormGroup>
      </FormContainer>
    </div>
  );
}

export default CollectionListScreen;
