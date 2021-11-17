import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import QuizIcon from '@mui/icons-material/Quiz';
import { useHistoryPageStyles } from './style.home';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import { Typography } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

import { CorrectIcon, IncorrectIcon } from './../../styles/theme';

export default function GamesHistoryList() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [gameArray, setGameArray] = useState([]);

  const classes = useHistoryPageStyles();

  const pastQuizesResultsArray = localStorage.getItem(
    'backupQuestionsArrayFromFinishedQuizes'
  );
  const pastGamesFound = pastQuizesResultsArray !== null;

  const parsedPastGamesArray = pastGamesFound
    ? JSON.parse(pastQuizesResultsArray)
    : [];

  return pastGamesFound ? (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper className={classes.paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: '700' }}>
                  Your latest Games
                </TableCell>
                <TableCell sx={{ fontWeight: '700' }} align="right">
                  Score
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {parsedPastGamesArray.map(singleGameArray => {
                const parsedDate = new Date(
                  singleGameArray.finish_date
                ).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                });

                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <ListItemButton
                        onClick={() => {
                          setGameArray(singleGameArray.backup_questions_array);
                          handleOpen();
                        }}
                      >
                        <ListItemIcon>
                          <QuizIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Game date: ${parsedDate}`} />
                      </ListItemButton>
                    </TableCell>

                    <TableCell>{singleGameArray.score}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Container>

      <Modal
        keepMounted
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modal}>
            {gameArray.map(question => {
              const answeredCorrectly =
                question.answer_chosen === question.correct_answer;

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
                      Question {question.question_number}
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
          </Box>
        </Fade>
      </Modal>
    </>
  ) : (
    <Typography>
      Ops, You don't have any Past Games on your localStorage
    </Typography>
  );
}
