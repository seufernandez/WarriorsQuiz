import { makeStyles } from '@material-ui/core/styles';

export const useQuizConfirmationStyles = makeStyles({
  mainButton: {
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
    padding: '40px',
  },
  textStack: {
    marginBottom: '20px',
  },
});
