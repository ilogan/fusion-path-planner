/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

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
  return (
    <div>
      <h3>Add a Collection</h3>
      <FormContainer>
        <FormGroup>
          <label htmlFor="name">Collection name:</label>
          <input id="name" type="text" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="tier">Tier name:</label>
          <input id="tier" type="text" />
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
              <input id="pre" name="order" type="radio" />
            </div>
            <div>
              <label htmlFor="post" css={{ marginRight: '.25rem' }}>
                post
              </label>
              <input id="post" name="order" type="radio" />
            </div>
          </Row>
        </FormGroup>
        <FormGroup>
          <label htmlFor="node">Node name:</label>
          <input id="node" type="text" />
        </FormGroup>
        <FormGroup>
          <button type="submit">+ Add</button>
        </FormGroup>
      </FormContainer>
    </div>
  );
}

export default CollectionListScreen;
