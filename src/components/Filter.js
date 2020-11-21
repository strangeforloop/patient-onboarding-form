import React, { useState } from 'react'
import { Box, CheckBox } from 'grommet';

const Filter = (props) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (type) => {
    const currentIndex = checked.indexOf(type);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(type);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const RenderCheckBoxes = () => {
    const types = ['Cardiovascular', 'Gastrointestinal', 'Psychological', 'Other'];

    return (
      <Box height="xsmall" justify="center" flex alignContent="between" wrap={true} direction="row" gap="small">
        {
          types.map(type => {
            return (
              <CheckBox
                key={type}
                checked={checked.indexOf(type) === -1 ? false : true}
                label={type}
                onChange={() => { handleToggle(type) }}
                border={{ color: 'brand', size: 'small'}}
              />
            )
          })
        }
      </Box>
    );
  };

  return (
    <div>
      {RenderCheckBoxes()}
    </div>
  );
};

export default Filter;
