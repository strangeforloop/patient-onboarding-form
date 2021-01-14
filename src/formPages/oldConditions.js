import React, { useState } from 'react';
import Filter from '../components/Filter';
import { Box, Button, CheckBox, Heading, Menu } from 'grommet';
import conditions from './conditions.json';

const Conditions = ({ formData, setFormData, navigation }) => {
  const {example} = formData;
  console.log(example);

  const originalFiltersList = ['Cardiovascular', 'Gastrointestinal', 'Psychological', 'Other'];
  const [filters, setFilters] = useState(originalFiltersList);
  const isCardiovascular = (condition) => { return condition.type === 'cardiovascular' };
  const isGastrointestinal = (condition) =>  { return condition.type === 'gastrointestinal' };
  const isPsychological = (condition) =>  { return condition.type === 'psychological' };
  const isOther = (condition) =>  { return condition.type === 'other' };

  const updateCheckbox = (index, isChecked) => {
    // pass in the index and update the corresponding
    // index in the conditionsList
    // conditionsList[index].checked = isChecked,
  };

  const conditionCheckboxes = (condition, index) => {
    const isChecked = true;

    return (
    <CheckBox
      key={condition.condition }
      label={`${condition.condition}`}
      onChange={() => {updateCheckbox(index, isChecked)}}
    />)
  };

  conditions.forEach(condition => {
    condition.checked = false;
  });

  const handleFilters = (filters) => {
    if (filters.length === 0) {
      setFilters(originalFiltersList);
    } else {
      setFilters(filters);
    }
  };

  return (
    <Box
      align="center"
      responsive={true}
      pad={{left: "large", right: "large"}}
      margin={{left: "xlarge", right: "xlarge", top: "none"}}
    >
      <Heading level={2}>Conditions</Heading>
      <Heading margin={{top: 'none'}} level={4}>Select all conditions that apply.</Heading>
      <Filter
        handleFilters={filters => handleFilters(filters)}
      />
      <Box align="start" width="medium">
        { filters.map(filter => {
          return (
            <div>
              <Heading level={4}>{filter}</Heading>
              { conditions.filter(eval(`is${filter}`)).map(conditionCheckboxes) }
            </div>
          )
        }) }
      </Box>

      <Button
        fill={false}
        margin={{ top: 'medium', bottom: 'medium'}}
        secondary label="back"
        onClick={() => {navigation.previous()}}
      />
      <Button
        fill={false}
        primary label="next"
        onClick={() => {navigation.next()}}
      />
    </Box>
  );
}

export default Conditions;
