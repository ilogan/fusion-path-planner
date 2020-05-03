/** @jsx jsx */
import { jsx } from '@emotion/core';

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
  const { nodeType, wrappers } = collection;

  // local state
  const [nodeName, setNodeName] = useState('');
  const [fields, setFields] = useState([]);
  const fieldTemplate = { label: '', value: '' };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWrappers = [
      ...collection.wrappers,
      {
        id: collection.wrappers.length + 1,
        name: nodeName,
        fields,
      },
    ];
    setCollection({ ...collection, wrappers: updatedWrappers });
    setNodeName('');
    setFields([]);
  };

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
      <select id="wrapper">
        <option>wrapper 1</option>
        <option>wrapper 2</option>
        {wrappers ? console.log(wrappers) : null}
      </select>
      <h3>Add {nodeType}</h3>
      <FormContainer onSubmit={handleSubmit}>
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

export default HomeScreen;
