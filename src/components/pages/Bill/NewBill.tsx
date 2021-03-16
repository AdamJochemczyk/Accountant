import React,{FunctionComponent} from 'react'
import Box from '@material-ui/core/Box';

const NewBill: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      p={2}
    >
      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        bgcolor="grey.300"
        justifyContent="center"
      >
          <h2>Hello developer</h2>
      </Box>
    </Box>
  );
};

export default React.memo(NewBill);
