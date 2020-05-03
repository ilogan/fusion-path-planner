/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { useCollections } from '../../context/collectionsContext';

const ButtonContainer = styled.button({
  height: '2.5rem',
  padding: '.25rem .5rem',
  color: 'green',
  border: '1px solid green',
});

function SaveButton() {
  const { collections, collection, setCollections } = useCollections();

  function handleClick() {
    const updatedCollections = collections.map((c) =>
      c.id === collection.id ? collection : c
    );
    setCollections(updatedCollections);
  }

  return <ButtonContainer onClick={handleClick}>Save</ButtonContainer>;
}

export default SaveButton;
