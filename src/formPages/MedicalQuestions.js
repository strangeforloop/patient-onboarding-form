import React from 'react';
import { Box, Button, FormField, Heading, TextInput } from 'grommet';

const MedicalQuestions = ({ formData, setFormData, navigation }) => {
  const {tobacco, medications} = formData;

  return (
    <Box
      align="center"
      responsive={true}
      pad={{left: "xlarge", right: "xlarge"}}
      margin={{left: "xlarge", right: "xlarge", top: "medium", bottom: "medium"}}
      background="light-2"
    >
      <Heading level={2}>Medical Questions</Heading>
      <Heading margin={{top: 'none'}} level={4}>
        Answer a few questions about your medical history.
      </Heading>
      <Box width="medium" align="start" margin={{top: 'small', bottom: 'small'}}>
        <FormField margin={{bottom: 'medium'}} fill label="Do you smoke any tobacco products?">
          <TextInput
            name="smokeTobacco"
            placeholder="How much and how often?"
            value={tobacco}
            onChange={setFormData}
          />
        </FormField>
        <FormField fill label="Current medications">
          <TextInput
            name="medications"
            placeholder="Please list any medications, supplements, or vitamins."
            value={medications}
            onChange={setFormData}
          />
        </FormField>
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

export default MedicalQuestions;
