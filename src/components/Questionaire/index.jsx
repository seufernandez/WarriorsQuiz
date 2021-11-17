import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useQuestionaireStyles } from './style.questionaire';
import { useQuiz } from './../../hooks/useQuiz';
import { useMainButton } from '../../styles/theme';
import { motion } from 'framer-motion';

const Questionaire = ({
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  const { showAnswers, setShowAnswers, setCurrentIndex, currentIndex } =
    useQuiz();
  const classes = useQuestionaireStyles();

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  function NextButtonStyled() {
    const classes = useMainButton();
    return (
      <Button
        className={classes.root}
        onClick={() => {
          handleNextQuestion();
        }}
      >
        Next
      </Button>
    );
  }

  return (
    <Stack align="center" className={classes.stack}>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
      >
        <Container maxWidth="sm">
          <Stack spacing={2}>
            <Paper display="flex" className={classes.paper}>
              <Typography
                variant="h5"
                dangerouslySetInnerHTML={{ __html: question }}
              />
            </Paper>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container rowSpacing={3} columnSpacing={3}>
                {answers.map(answer => {
                  const buttonClassName = showAnswers
                    ? answer === correct_answer
                      ? classes.correct
                      : classes.wrong
                    : classes.answer;

                  return (
                    <Grid key={answer} item xs={6}>
                      <button
                        variant="contained"
                        className={buttonClassName}
                        onClick={() => {
                          if (showAnswers === false) handleAnswer(answer);
                        }}
                        dangerouslySetInnerHTML={{ __html: answer }}
                      ></button>
                    </Grid>
                  );
                })}
              </Grid>
              {showAnswers && (
                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                >
                  <Box fixed sx={{ textAlign: 'right', marginTop: '20px' }}>
                    <NextButtonStyled />
                  </Box>
                </motion.div>
              )}
            </Box>
          </Stack>
        </Container>
      </motion.div>
    </Stack>
  );
};

export default Questionaire;
