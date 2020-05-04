/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { tierColor } from '../../utils/tierColor';
import { useCollections } from '../../context/collectionsContext';
import SaveButton from './SaveButton';

/*
 * /collections/:id
 */

const CardsContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
});

const WrapperCircle = styled.div({
  position: 'relative',
  alignItems: 'center',
  height: '12rem',
  width: '12rem',
  margin: '1rem',
  padding: '1rem',
  borderRadius: '12rem',
});

const WrapperInnerCircle = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '10rem',
  width: '10rem',
  padding: '1rem',
  borderRadius: '10rem',
  textAlign: 'center',
  backgroundColor: 'white',
});

const WrapperHeader = styled.div({});

const WrapperFieldsContainer = styled.div({
  padding: '0 .5rem',
  borderLeft: '1px solid black',
});

const WrapperFields = styled.div({
  display: 'flex',
  marginLeft: '.5rem',
});
const WrapperFooter = styled.div({});

function HomeScreen() {
  const { collection } = useCollections();
  const { name } = collection;
  return collection.name ? (
    <div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>{name} Dashboard</h1>
        <SaveButton />
      </div>
      <div>
        <h2>Wrappers</h2>
        <CardsContainer>
          {collection.wrappers.map((w) => (
            <WrapperCircle key={w.id} css={tierColor(w.tier)}>
              <WrapperInnerCircle
                css={+w.tier === 2 ? { border: '1px solid black' } : ''}
              >
                <WrapperHeader>
                  <h4>{w.name}</h4>
                </WrapperHeader>
                <WrapperFieldsContainer>
                  {w.fields.map((f) => (
                    <WrapperFields key={`${w.name}-${f.label}-${f.name}`}>
                      <small>
                        <span css={{ fontWeight: 'bold' }}>{f.label}: </span>
                        {f.value}
                      </small>
                    </WrapperFields>
                  ))}
                </WrapperFieldsContainer>
                <WrapperFooter>
                  <small>{w.tier}</small>
                </WrapperFooter>
              </WrapperInnerCircle>
            </WrapperCircle>
          ))}
        </CardsContainer>
      </div>
    </div>
  ) : (
    <div>No Collection found</div>
  );
}

export default HomeScreen;
