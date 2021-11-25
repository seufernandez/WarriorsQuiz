import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@mui/material/colors';

export const useEndScreenStyles = makeStyles({
  paper: {
    marginTop: '60px',
    justifyContent: 'center',
    padding: '40px',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    fontSize: '30px',
    fontWeight: '600',
    color: grey[50],
    borderRadius: '8px 8px 0 0',
  },
  answer: {
    border: 'none',
    backgroundColor: grey[200],
    width: '100%',
    height: '40px',
    cursor: 'pointer',
    borderRadius: '4px',
    boxShadow: '1px 1px 3px rgba(0,0,0, 0.5)',
    '&:hover': {
      backgroundColor: grey[300],
    },
  },
  scoreText: {
    margin: '16px',
  },
  percentage: {
    marginBottom: '20px',
  },
  accordion: {
    justifyContent: 'space-between',
    color: grey[700],
  },
  summaryText: {
    margin: '0 8px',
  },
  restartBox: {
    margin: '40px 0 20px ',
  },
});
