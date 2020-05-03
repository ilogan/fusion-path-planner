/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { useState, Fragment } from 'react';
import { useCollections } from '../../context/collectionsContext';
import {
  FormContainer,
  FormGroup,
  SecondaryButton,
  PrimarySubmitButton,
} from './Forms';

function HomeScreen() {
  // global state
  const { collection, setCollection } = useCollections();
  const { nodeType, wrappers, tierType } = collection;

  // local state
  const [nodeName, setNodeName] = useState('');
  const selectedWrapperTemplate = {
    name: 'n/a',
    tier: null,
    fields: [],
  };
  const [selectedWrapper, setSelectedWrapper] = useState(
    selectedWrapperTemplate
  );
  const [fields, setFields] = useState([]);
  const fieldTemplate = { label: '', value: '' };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWrappers = [
      ...collection.selectedW,
      {
        id: collection.selectedW.length + 1,
        name: nodeName,
        fields,
      },
    ];
    setCollection({ ...collection, wrappers: updatedWrappers });
    setNodeName('');
    setFields([]);
  };

  // wrappers
  function handleSelectedWrapperChange(e) {
    const currWrapper = wrappers.find((w) => w.name === e.target.value);
    if (!currWrapper) return setSelectedWrapper(selectedWrapperTemplate);
    setSelectedWrapper(currWrapper);
  }

  // fields
  function addField() {
    setFields([...fields, { ...fieldTemplate }]);
  }

  function handleFieldChange(e) {
    const targetIndex = Number(e.target.dataset.i);
    const updatedFields = [...fields];
    updatedFields[targetIndex][e.target.name] = e.target.value;
    setFields(updatedFields);
  }

  return (
    <div>
      <label htmlFor="wrapper">Wrapper:</label>
      <select
        id="wrapper"
        value={selectedWrapper.name}
        onChange={handleSelectedWrapperChange}
      >
        <option value={'n/a'}>select wrapper</option>
        {wrappers
          ? wrappers.map((w) => (
              <option key={w.id} value={w.name}>
                {w.name}
              </option>
            ))
          : ''}
      </select>
      <h3>Add {nodeType}</h3>
      <FormContainer onSubmit={handleSubmit}>
        <WrapperPresets tierType={tierType} wrapper={selectedWrapper} />
        <FormGroup>
          <label htmlFor="nodeType">{nodeType} name:</label>
          <input
            id="nodeType"
            type="text"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
          />
        </FormGroup>
        {fields.map((f, i) => {
          const fieldId = `field-${i}`;
          const labelId = `label-${i}`;
          const valueId = `value-${i}`;
          return (
            <Fragment key={fieldId}>
              <FormGroup>
                <label htmlFor={labelId}>{`Label #${i + 1}: `}</label>
                <input
                  id={labelId}
                  name="label"
                  data-i={i}
                  type="text"
                  value={f.label}
                  onChange={handleFieldChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor={valueId}>
                  {f.label ? `${f.label}:` : '(create a label)'}
                </label>
                <input
                  id={valueId}
                  name="value"
                  data-i={i}
                  type="text"
                  value={f.value}
                  onChange={handleFieldChange}
                />
              </FormGroup>
            </Fragment>
          );
        })}
        <FormGroup>
          <SecondaryButton onClick={addField}>+ Add Field</SecondaryButton>
        </FormGroup>
        <FormGroup>
          <PrimarySubmitButton>Finalize {nodeType}</PrimarySubmitButton>
        </FormGroup>
      </FormContainer>
    </div>
  );
}

const WrapperPresetsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontSize: '.75rem',
  marginBottom: '1rem',
});

const WrapperPresetsHeading = styled.div({
  margin: '0 auto',
  borderBottom: '1px solid black',
});

const WrapperPresetContent = styled.div({
  fontStyle: 'italic',
});

function WrapperPresets({ tierType, wrapper }) {
  console.log(wrapper);
  return (
    <WrapperPresetsContainer>
      <WrapperPresetsHeading>Wrapper Presets</WrapperPresetsHeading>
      <WrapperPresetContent>
        {wrapper.tier === null ? (
          <div>none</div>
        ) : (
          <Fragment>
            <div>
              {tierType}: {wrapper.tier}
            </div>
            {wrapper.fields.map((f, i) => {
              const fieldId = `field-${i}`;
              return (
                <div key={fieldId}>
                  <span>{f.label}</span>: {f.value}
                </div>
              );
            })}
          </Fragment>
        )}
      </WrapperPresetContent>
    </WrapperPresetsContainer>
  );
}

export default HomeScreen;
