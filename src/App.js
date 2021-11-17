import Routes from './routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/theme';

import './App.scss';
import { QuizProvider } from './hooks/useQuiz';

function App() {
  return (
    <QuizProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes />
        </div>
      </ThemeProvider>
    </QuizProvider>
  );
}

export default App;
