import { useQuiz } from './../../hooks/useQuiz';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Questionaire from '../../components/Questionaire';
import Loading from '../../components/Loading';
import EndScreen from './../../components/EndScreen/index';

export default function Quiz() {
  const {
    confirmation,
    currentIndex,
    questionsArray,
    score,
    setScore,
    backupQuestionsArray,
    setBackupQuestionsArray,
    setShowAnswers,
  } = useQuiz();

  const navigate = useNavigate();

  useEffect(() => {
    if (confirmation !== true) {
      navigate('/');
    }
  }, []);

  const handleAnswer = answer => {
    setShowAnswers(true);

    const currentQuestion = questionsArray[currentIndex];

    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    const questionAnswered = {
      ...currentQuestion,
      answer_chosen: answer,
      question_number: currentIndex + 1,
    };

    setBackupQuestionsArray([...backupQuestionsArray, questionAnswered]);
  };

  return questionsArray.length > 0 ? (
    <>
      {currentIndex >= questionsArray.length ? (
        <EndScreen />
      ) : (
        <Questionaire
          data={questionsArray[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </>
  ) : (
    questionsArray.length < 1 && <Loading />
  );
}
