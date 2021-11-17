import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Stack
      marginX="auto"
      align="center"
      sx={{
        marginTop: '300px',
        alignItems: 'center',
      }}
    >
      <CircularProgress disableShrink />
    </Stack>
  );
}
