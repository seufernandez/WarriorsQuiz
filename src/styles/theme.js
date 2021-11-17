import {
  createTheme,
  responsiveFontSizes,
  makeStyles,
} from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors';
import SvgIcon from '@mui/material/SvgIcon';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

export let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: orange[600],
    },
  },
});

export const useMainButton = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    padding: '4px 30px',
    border: 0,
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
  },
});

export function CorrectIcon(props) {
  return (
    <SvgIcon {...props}>
      <AiFillCheckCircle />
    </SvgIcon>
  );
}

export function IncorrectIcon(props) {
  return (
    <SvgIcon {...props}>
      <AiFillCloseCircle />
    </SvgIcon>
  );
}

theme = responsiveFontSizes(theme);
