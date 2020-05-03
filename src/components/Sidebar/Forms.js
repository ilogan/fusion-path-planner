/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

export const FormContainer = styled.form({
  padding: '.75rem',
  backgroundColor: '#FFFFFF',
  boxShadow: 'inset 0px 1px 10px rgba(0,0,0,20%)',
  color: 'black',
});
export const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
});

export const Row = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
});

export const SecondaryButton = (props) => (
  <button
    type="button"
    css={{
      color: '#3A7CA5',
      border: '1px solid #3A7CA5',
    }}
    {...props}
  />
);

export const PrimarySubmitButton = (props) => (
  <button
    type="submit"
    css={{ color: '#FFFFFF', backgroundColor: '#0CCE6B' }}
    {...props}
  />
);
