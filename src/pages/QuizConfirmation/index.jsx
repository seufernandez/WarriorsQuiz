import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useQuiz } from './../../hooks/useQuiz';
import { useMainButton } from '../../styles/theme';
import { useQuizConfirmationStyles } from './style.QuizConfirmation';
import { motion } from 'framer-motion';

export default function QuizConfirmation() {
  const {
    setConfirmation,
    setQuestionsArray,
    setShowAnswers,
    setCurrentIndex,
    setScore,
    setBackupQuestionsArray,
  } = useQuiz();
  const navigate = useNavigate();
  const classes = useQuizConfirmationStyles();

  useEffect(() => {
    setConfirmation(false);
    setQuestionsArray([]);
    setShowAnswers(false);
    setCurrentIndex(0);
    setScore(0);
    setBackupQuestionsArray([]);
  }, []);

  function ButtonStyled() {
    const classes = useMainButton();
    return (
      <Button
        className={classes.root}
        onClick={() => {
          setConfirmation(true);
          navigate('/quiz');
        }}
      >
        Start
      </Button>
    );
  }

  return (
    <>
      <Stack
        marginX="auto"
        alignItems="center"
        sx={{
          height: 600,
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
        >
          <Paper className={classes.paper}>
            <Container maxWidth="md">
              <Stack spacing={2} className={classes.textStack}>
                <Typography variant="h2" color="primary">
                  Are you ready?
                </Typography>
                <Typography variant="body1">
                  Click on START button to begin to answer!
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Link to="/">
                  <Button variant="outlined">Cancel</Button>
                </Link>
                <ButtonStyled />
              </Stack>
            </Container>
          </Paper>
        </motion.div>
      </Stack>
    </>
  );
}
