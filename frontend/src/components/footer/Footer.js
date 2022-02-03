import { useState } from 'react';
import { Box, Button } from '@mui/material';

export default function Footer() {
  const [status, setStatus] = useState('connected');
  // const { data } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 4,
  //   maxColumns: 6,
  // });
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ height: 350, width: 1, mb: 2 }}>
        {/* <DataGrid
          {...data}
          components={{
            Footer: CustomFooterStatusComponent,
          }}
          componentsProps={{
            footer: { status },
          }}
        /> */}
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          setStatus((current) => (current === 'connected' ? 'disconnected' : 'connected'))
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </Box>
  );
}
