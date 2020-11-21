import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import Demographic from '../formPages/Demographic';
import Conditions from '../formPages/Conditions';
import MedicalQuestions from '../formPages/MedicalQuestions';
import TermsAndConditions from '../formPages/TermsAndConditions';
import Review from '../formPages/Review';

const defaultData = {
  name: '',
  birthdate: '',
  email: '',
  address: '',
  phoneNumber: '',
  example: false,
  highBloodPressure: false,
  cardiacArrest: false,
  arrhythmia: false,
  coronaryHeartDisease: false,
  iBS: false,
  crohnsDisease: false,
  gallstones: false,
  depression: false,
  anxiety: false,
  stress: false,
  insomnia: false,
  cancer: false,
  diabetes: false,
  smokeTobacco: '',
  medications: '',
};

const steps = [
  {id: 'Demographic'},
  {id: 'Conditions'},
  {id: 'Medical Questions'},
  {id: 'Terms & Conditions'},
  {id: 'Review'},
];

const MultiStepForm = () => {
  const [formData, setFormData] = useForm(defaultData);

  const {step, navigation} = useStep({
    steps,
    initialStep: 0
  });

  const props = { formData, setFormData, navigation };

  switch (step.id) {
    case 'Demographic':
      return <Demographic {...props}/>
    case 'Conditions':
      return <Conditions {...props}/>
    case 'Medical Questions':
      return <MedicalQuestions {...props}/>
    case 'Terms & Conditions':
      return <TermsAndConditions {...props}/>
    case 'Review':
      return <Review {...props}/>
    }
};

export default MultiStepForm;
