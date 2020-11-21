import React from 'react';
import { Accordion, AccordionPanel, Box, Button, Heading } from "grommet";

const Review = ({ formData, navigation }) => {
  const { go } = navigation;

  const {
    name,
    birthdate,
    email,
    address,
    phoneNumber,
    highBloodPressure,
    cardiacArrest,
    arrhythmia,
    coronaryHeartDisease,
    iBS,
    crohnsDisease,
    gallstones,
    depression,
    anxiety,
    stress,
    insomnia,
    cancer,
    diabetes,
    smokeTobacco,
    medications
  } = formData;

  const transformBooleanToYesNo = (condition) => {
    return condition ? 'yes' : 'no';
  };

  return (
    <Box
      responsive={true}
      pad={{left: "xlarge", right: "xlarge"}}
      margin={{left: "xlarge", right: "xlarge", top: "medium", bottom: "medium"}}
      border="all"
    >
    <Heading level={2}>Review</Heading>
      <Box margin={{bottom: 'medium'}}>
        <RenderAccordion summary="Demographic" go={go} details={[
            { 'Full Name': name },
            { 'Birth Data': birthdate },
            { 'Email': email },
            { 'Address': address },
            { 'Phone Number': phoneNumber }
        ]}/>
        <RenderAccordion summary="Conditions" go={go} details={[
            { 'High Blood Pressure': transformBooleanToYesNo(highBloodPressure) },
            { 'Cardiac Arrest': transformBooleanToYesNo(cardiacArrest) },
            { 'Arrhythmia': transformBooleanToYesNo(arrhythmia) },
            { 'Coronary Heart Disease': transformBooleanToYesNo(coronaryHeartDisease) },
            { 'Irritable Bowel Syndrome': transformBooleanToYesNo(iBS) },
            { 'Crohn\'s Disease': transformBooleanToYesNo(crohnsDisease) },
            { 'Gallstones': transformBooleanToYesNo(gallstones) },
            { 'Depression': transformBooleanToYesNo(depression) },
            { 'Anxiety': transformBooleanToYesNo(anxiety) },
            { 'Stress': transformBooleanToYesNo(stress) },
            { 'Insomnia': transformBooleanToYesNo(insomnia) },
            { 'Cancer': transformBooleanToYesNo(cancer) },
            { 'Diabetes': transformBooleanToYesNo(diabetes) },
        ]}/>
        <RenderAccordion summary="Medical Questions" go={go} details={[
            { 'Tobacco Usage': smokeTobacco },
            { 'Medications': medications }
        ]}/>
      </Box>
    </Box>
  );
};

export const RenderAccordion = ({ summary, go, details }) => (
  <Accordion>
    <AccordionPanel label={summary}>
      <Box pad="medium" background="light-2">
        <div>
          { details.map((data, index) => {
            console.log({details});
            const key = Object.keys(data);
            const value = data[key];
            return <p key={index}>{`${key}: ${value}`}</p>
          })}
          <Button
            primary
            label="edit"
            onClick={() => go(`${summary}`)}
          />
        </div>
      </Box>
    </AccordionPanel>
  </Accordion>
);

export default Review;
