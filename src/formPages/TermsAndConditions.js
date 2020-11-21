import React from 'react';
import { Box, Button, Heading, CheckBox } from 'grommet';

const TermsAndConditions = ({ formData, setFormData, navigation }) => {
  return (
    <Box
      fill="vertical"
      responsive={true}
      pad={{left: "xlarge", right: "xlarge"}}
      margin={{left: "xlarge", right: "xlarge", top: "medium", bottom: "medium"}}
      background="light-2"
    >
    <Heading level={2}>Terms & Conditions</Heading>
      <Box margin={{top: 'small', bottom: 'small'}}>
        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
          <br/><br/>
          Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <CheckBox
          label="I agree"
        />
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

export default TermsAndConditions;
