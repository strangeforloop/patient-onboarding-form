import MultiStepForm from './components/MultiStepForm';
import { Box, Button, Grommet, Header, Heading, ResponsiveContext } from 'grommet';
import { FormNext, Grow } from 'grommet-icons';

const theme = {
  global: {
    colors : {
      brand: '#4F7F71',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
      color: '#333333'
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
          <Header
            responsive
            tag="header"
            background="brand"
            pad={{left: "xlarge", right: "xlarge"}}
            gap="none"
          >
            <Box
              responsive
              flex
              direction="row"
              align="center"
              justify="start" margin={{left: "xlarge", right: "xlarge", top: "none"}}
            >
              <Heading level='3'>
                <Box align="center" flex direction="row">
                  {/* <Box> */}
                    <Button icon={<Grow />}/>
                    Parsley Health
                  {/* </Box> */}
                  <Button icon={<FormNext />} />
                </Box>
              </Heading>
              <Heading level='4' margin='none'>Patient Onboarding</Heading>
            </Box>
          </Header>
            <Box margin={{left: "xlarge", right: "xlarge"}}>
              <MultiStepForm />
            </Box>
          </Box>
      )}
    </ResponsiveContext.Consumer>
  </Grommet>
  );
}

<Grommet theme={theme}></Grommet>

export default App;
