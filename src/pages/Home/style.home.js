import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    color: 'white',
    padding: '4px 30px',
    fontSize: '16px',
    fontWeight: '600',
  },
  paper: {
    padding: '40px',
  },
  buttonsGroup: {
    marginTop: '16px',
  },
  h1: {
    fontWeight: '600',
    lineHeight: '1',
  },
  history: {
    marginTop: '16px',
  },
});

export const useInputStyles = makeStyles({
  root: {
    width: '60px',
    border: 0,
    marginRight: '16px',
    padding: '8px 4px 8px 8px',
    fontSize: '16px',
    fontWeight: '500',
    background: '#e9ecef',
    borderRadius: '4px',
  },
});
