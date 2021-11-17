import { makeStyles } from '@material-ui/core/styles';
import { green, grey, red } from '@mui/material/colors';

export const useQuestionaireStyles = makeStyles({
  root: {
    margin: '20px 16px',
    color: 'purple',
    padding: '4px 30px',
    fontSize: '16px',
    fontWeight: '600',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '160px',
    padding: '20px',
    boxShadow: 'none',
    border: '1px solid #ced4da',
  },
  answer: {
    border: 'none',
    backgroundColor: '#fff',
    width: '100%',
    height: '40px',
    cursor: 'pointer',
    borderRadius: '4px',
    boxShadow: '0px 1px 2px rgba(0,0,0, 0.3)',
    '&:hover': {
      backgroundColor: grey[100],
    },
  },
  correct: {
    border: `2px solid${green[300]}`,
    backgroundColor: green[50],
    color: green[500],
    width: '100%',
    height: '40px',
    cursor: 'pointer',
    borderRadius: '4px',
    boxShadow: '0px 1px 2px rgba(0,0,0, 0.3)',
  },
  wrong: {
    border: `2px solid${red[300]}`,
    backgroundColor: red[50],
    color: red[500],
    width: '100%',
    height: '40px',
    cursor: 'pointer',
    borderRadius: '4px',
    boxShadow: '0px 1px 2px rgba(0,0,0, 0.3)',
  },
  stack: {
    height: '100vh',
    marginTop: '120px',
    alignItems: 'center',
  },
});

export const useButtonStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    margin: '20px 16px',
    color: 'white',
    padding: '4px 30px',
    fontSize: '16px',
    fontWeight: '600',
  },
});
