import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import * as Yup from 'yup';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { useInputStyles, useHomeStyles } from './style.home';
import { useQuiz } from '../../hooks/useQuiz';

const QuizSchema = Yup.object().shape({
  questionsAmount: Yup.number()
    .min(1, 'Pick a number between 1 and 50')
    .max(50, 'Max 50 questions')
    .required('Required'),
});

export default function Home() {
  const { setRequiredQuestionsAmount } = useQuiz();
  const navigate = useNavigate();
  const classes = useHomeStyles();

  const pastQuizesResultsArray = localStorage.getItem(
    'backupQuestionsArrayFromFinishedQuizes'
  );
  const pastGamesFound = pastQuizesResultsArray !== null;

  const ButtonStyled = function () {
    return (
      <Button type="submit" className={classes.button}>
        Next
      </Button>
    );
  };

  const InputStyled = function () {
    var classes = useInputStyles();
    return (
      <Field name="questionsAmount" type="number" className={classes.root} />
    );
  };

  return (
    <Stack
      marginX="auto"
      alignItems="center"
      sx={{
        width: 600,
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
            <Typography variant="h4" color="secondary" align="left">
              Hey you, welcome to the
            </Typography>

            <Box mb={4}>
              <Typography variant="h1" color="primary" className={classes.h1}>
                Warriors's Quiz
              </Typography>
            </Box>

            <Typography variant="h6" color="secondary" align="center">
              Select below how many questions you want:
            </Typography>

            <Box className={classes.buttonsGroup}>
              <Formik
                initialValues={{ questionsAmount: '5' }}
                validationSchema={QuizSchema}
                onSubmit={values => {
                  setRequiredQuestionsAmount(values.questionsAmount);
                  navigate('/quiz/confirmation');
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <InputStyled />
                      <ButtonStyled />
                    </Box>
                    {errors.questionsAmount && touched.questionsAmount ? (
                      <div style={{ color: 'red' }}>
                        {errors.questionsAmount}
                      </div>
                    ) : null}
                  </Form>
                )}
              </Formik>
            </Box>
          </Container>
        </Paper>
      </motion.div>

      {pastGamesFound && (
        <Box className={classes.history}>
          <Link
            component="button"
            color="primary.dark"
            onClick={() => {
              navigate('/history');
            }}
          >
            See your games history by clicking here
          </Link>
        </Box>
      )}
    </Stack>
  );
}
