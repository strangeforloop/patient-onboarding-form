import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import { Box, Button, CheckBox, Heading } from 'grommet';
import conditions from './conditions.json';

const Conditions = ({ formData, setFormData, navigation }) => {
  const { highBloodPressure, cardiacArrest, arrhythmia, coronaryHeartDisease,
    ibs, crohnsDisease, gallstones, depression, anxiety, stress,
    insomnia, cancer, diabetes } = formData;

  const camelCase = (str) => {
    return str
      .replace(/\s(.)/g, function(a) {
          return a.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, function(b) {
          return b.toLowerCase();
      });
  }
  const originalFiltersList = ['Cardiovascular', 'Gastrointestinal', 'Psychological', 'Other'];
  const [filters, setFilters] = useState(originalFiltersList);
  const [conditionsList, setConditionsList] = useState(conditions.map(condition => {
    return {
      ...condition,
      name: camelCase(condition.condition),
      checked: false
    };
  }));

  const isCardiovascular = (condition) => { return condition.type === 'cardiovascular' };
  const isGastrointestinal = (condition) =>  { return condition.type === 'gastrointestinal' };
  const isPsychological = (condition) =>  { return condition.type === 'psychological' };
  const isOther = (condition) =>  { return condition.type === 'other' };

  useEffect(() => {
    console.log('conditionsList changed');
    console.log({conditionsList});
  }, [conditionsList]);

  const handleFilters = (filters) => {
    if (filters.length === 0) {
      setFilters(originalFiltersList);
    } else {
      setFilters(filters);
    }
  };

  const handleCheck = (e) => {
    console.log(e.target);
    console.log(e.target.checked);
    setFormData(e);
    const index = conditionsList.findIndex(condition => condition.name === e.target.name);
    const newConditionsList = [...conditionsList];
    newConditionsList[index].checked = e.target.checked;
    setConditionsList(newConditionsList);
  };

  return (
    <Box
      fill="vertical"
      align="center"
      responsive={true}
      pad={{left: "xlarge", right: "xlarge"}}
      margin={{left: "xlarge", right: "xlarge", top: "medium", bottom: "medium"}}
      background="light-2"
    >
      <Heading level={2}>Conditions</Heading>
      <Heading margin={{top: 'none'}} level={4}>Select all conditions that apply.</Heading>
      <Heading margin={{top: 'small', bottom: 'none'}} level={6}>Filter by category</Heading>

      <Box align="start" width="medium" margin={{top: 'small', bottom: 'small'}}>
        <Box fill="horizontal">
          <Filter
            handleFilters={filters => handleFilters(filters)}
          />
        </Box>

        { filters.map(filter => {
          return (
            <div>
              <Heading level={4}>{filter}</Heading>
              {
                conditionsList.filter(condition => {
                  return condition.type === filter.toLowerCase();
                }).map((condition, index) => {
                  return (
                    <Box margin={{bottom: 'xsmall'}}>
                      <CheckBox
                        key={index}
                        label={condition.condition}
                        checked={condition.checked}
                        name={condition.name}
                        onChange={handleCheck}
                      >
                      </CheckBox>
                    </Box>
                    )
                })
              }
            </div>
          )
        }) }
        <Box margin={{top: 'medium'}} fill flex direction="row" justify="between">
          <Button
            fill={false}
            secondary label="back"
            onClick={() => {navigation.previous()}}
          />
          <Button
            fill={false}
            primary label="next"
            onClick={() => {navigation.next()}}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Conditions;
