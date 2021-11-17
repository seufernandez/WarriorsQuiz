import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@mui/material/colors';

export const useHistoryPageStyles = makeStyles({
  paper: {
    minWidth: '600px',
    position: 'absolute',
    padding: '20px',
  },
  accordion: {
    justifyContent: 'space-between',
    color: grey[700],
  },
  modal: {
    background: '#fff',
    position: 'absolute',
    padding: '20px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    minWidth: '300px',
  },
  summaryText: {
    margin: '0 8px',
  },
});
