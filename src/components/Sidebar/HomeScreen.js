/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { useState } from 'react';

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

function HomeScreen() {
  const [wrapperName, setWrapperName] = useState('');
  const [tier, setTier] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(wrapperName, tier);
    setWrapperName('');
    setTier('');
  };

  return (
    <div>
      <h3>Add a Wrapper</h3>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="wrapper">Wrapper name:</label>
          <input
            id="wrapper"
            type="text"
            value={wrapperName}
            onChange={(e) => setWrapperName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <label htmlFor="tier">Tier:</label>
            <input
              id="tier"
              type="number"
              min="0"
              value={tier}
              onChange={(e) => setTier(e.target.value)}
            />
          </Row>
        </FormGroup>
        <FormGroup>
          <button type="button">+ Add Field</button>
        </FormGroup>
        <FormGroup>
          <button type="submit">Finalize Wrapper</button>
        </FormGroup>
      </FormContainer>
    </div>
  );
}

export default HomeScreen;
