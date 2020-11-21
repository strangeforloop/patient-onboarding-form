import React from 'react';
import { Box, Button, DateInput, Heading, FormField, TextInput } from 'grommet';

const Demographic = ({ formData, setFormData, navigation }) => {
  const {name, birthdate, email, address, phoneNumber} = formData;

  return (
    <Box
      align="center"
      responsive={true}
      pad={{left: "xlarge", right: "xlarge"}}
      margin={{left: "xlarge", right: "xlarge", top: "medium", bottom: "medium"}}
      background="light-2"
    >
      <Heading level={2}>Demographic</Heading>
      <Box width="medium">
        <FormField label="Full Name">
          <TextInput
            size="small"
            name="name"
            placeholder="Jane Doe"
            value={name}
            onChange={setFormData}
          />
        </FormField>
        <FormField label="Birthdate">
          <DateInput
            format="mm/dd/yyyy"
            value={(new Date()).toISOString()}
            name="birthdate"
            placeholder="mm/dd/yyyy"
            value={birthdate}
            onChange={setFormData}
          />
        </FormField>
        <FormField label="Email Address">
          <TextInput
            name="email"
            placeholder="janedoe@domain.com"
            value={email}
            onChange={setFormData}
          />
        </FormField>
        <FormField label="Address">
          <TextInput
            name="address"
            placeholder="123 Happy Ln."
            value={address}
            onChange={setFormData}
          />
        </FormField>
        <FormField label="Phone Number">
          <TextInput
            name="phoneNumber"
            placeholder="(xxx) xxx-xxxx"
            value={phoneNumber}
            onChange={setFormData}
          />
        </FormField>
        <Box
          fill={false}
          flex
          direction="row"
          justify="end"
        >
          <Button
            fill={false}
            margin={{ top: 'medium', bottom: 'medium'}}
            primary label="next"
            onClick={() => navigation.next()}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Demographic;
