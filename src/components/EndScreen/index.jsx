import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { green, red } from '@mui/material/colors';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../../hooks/useQuiz';
import { useEndScreenStyles } from './style.EndScreen';
import { IncorrectIcon, useMainButton, CorrectIcon } from '../../styles/theme';

export default function EndScreen() {
  const { score, requiredQuestionsAmount, backupQuestionsArray } = useQuiz();
  const classes = useEndScreenStyles();

  const completedGame = {
    finish_date: Date.now(),
    score: `${score}/${requiredQuestionsAmount}`,
    backup_questions_array: backupQuestionsArray,
  };

  useEffect(() => {
    if (backupQuestionsArray.length > 0) {
      const pastQuizesResultsArray = localStorage.getItem(
        'backupQuestionsArrayFromFinishedQuizes',
      );

      const pastGamesFound = pastQuizesResultsArray !== null;

      if (pastGamesFound) {
        const parsedPastQuizesResultsArray = JSON.parse(pastQuizesResultsArray);

        const updatedPastQuizesArray = [
          completedGame,
          ...parsedPastQuizesResultsArray,
        ];

        localStorage.setItem(
          'backupQuestionsArrayFromFinishedQuizes',
          JSON.stringify(updatedPastQuizesArray),
        );
      } else {
        localStorage.setItem(
          'backupQuestionsArrayFromFinishedQuizes',
          JSON.stringify([completedGame]),
        );
      }
    }
  }, []);

  const RestarButton = function () {
    const classes = useMainButton();
    return (
      <Link to="/">
        <Button className={classes.root}>Play again</Button>
      </Link>
    );
  };

  return (
    <motion.div
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.4 }}
    >
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Box className={classes.box}>Congratulations! 🎉</Box>
          <Typography variant="h5" className={classes.scoreText}>
            You got:
            {' '}
            {score}
            {' '}
            out of
            {' '}
            {requiredQuestionsAmount}
            {' '}
            questions right!
          </Typography>
          <Box className={classes.percentage}>
            <p>
              {((score / requiredQuestionsAmount) * 100).toFixed(1)}
              %
            </p>
          </Box>

          {backupQuestionsArray.map((question) => {
            const answeredCorrectly = question.answer_chosen === question.correct_answer;

            return (
              <Accordion
                key={question.question_number}
                className={classes.accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box>
                    {answeredCorrectly ? (
                      <CorrectIcon sx={{ color: green[500] }} />
                    ) : (
                      <IncorrectIcon sx={{ color: red[500] }} />
                    )}
                  </Box>
                  <Typography className={classes.summaryText}>
                    Question
                    {' '}
                    {question.question_number}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: `"${question.question}"`,
                    }}
                  />

                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: '700' }}>
                          Your Answer
                        </TableCell>
                        <TableCell sx={{ fontWeight: '700' }} align="right">
                          Correct Answer
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          sx={{
                            color: answeredCorrectly ? green[500] : red[500],
                          }}
                          dangerouslySetInnerHTML={{
                            __html: question.answer_chosen,
                          }}
                        />
                        <TableCell
                          sx={{ color: green[500] }}
                          align="right"
                          dangerouslySetInnerHTML={{
                            __html: question.correct_answer,
                          }}
                        />
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionDetails>
              </Accordion>
            );
          })}
          <Box className={classes.restartBox}>
            <Typography>Nice work, click below to Quiz again!</Typography>
          </Box>
          <RestarButton />
        </Paper>
      </Container>
    </motion.div>
  );
}
