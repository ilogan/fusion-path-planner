/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useState, Fragment } from 'react';
import { useCollections } from '../../context/collectionsContext';
import {
  FormContainer,
  FormGroup,
  Row,
  SecondaryButton,
  PrimarySubmitButton,
} from './Forms';

function HomeScreen() {
  // global state
  const { collection, setCollection } = useCollections();

  // local state
  const [wrapperName, setWrapperName] = useState('');
  const [tier, setTier] = useState(0);
  const [fields, setFields] = useState([]);
  const fieldTemplate = { label: '', value: '' };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWrappers = [
      ...collection.wrappers,
      {
        id: collection.wrappers.length + 1,
        name: wrapperName,
        tier: +tier,
        fields,
      },
    ];
    setCollection({ ...collection, wrappers: updatedWrappers });
    setWrapperName('');
    setTier(0);
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
            <label htmlFor="tier">{`${collection.tierType}: `}</label>
            <input
              id="tier"
              type="number"
              min="0"
              value={tier}
              onChange={(e) => setTier(e.target.value)}
            />
          </Row>
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
          <PrimarySubmitButton>Finalize Wrapper</PrimarySubmitButton>
        </FormGroup>
      </FormContainer>
    </div>
  );
}

export default HomeScreen;
