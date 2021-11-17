import { createContext, useEffect, useState, useContext } from 'react';
import { api } from './../services/api';

export const QuestionsContext = createContext(5);

export function QuizProvider({ children }) {
  const [requiredQuestionsAmount, setRequiredQuestionsAmount] = useState(5);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [confirmation, setConfirmation] = useState(false);
  const [score, setScore] = useState(0);
  const [backupQuestionsArray, setBackupQuestionsArray] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (confirmation === true) {
      api.get(`api.php?amount=${requiredQuestionsAmount}`).then(({ data }) => {
        const questionsArray = data.results.map(question => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestionsArray(questionsArray);
      });
    }
  }, [confirmation]);

  return (
    <QuestionsContext.Provider
      value={{
        requiredQuestionsAmount,
        setRequiredQuestionsAmount,
        confirmation,
        setConfirmation,
        questionsArray,
        setQuestionsArray,
        currentIndex,
        setCurrentIndex,
        score,
        setScore,
        backupQuestionsArray,
        setBackupQuestionsArray,
        showAnswers,
        setShowAnswers,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuestionsContext);

  return context;
}
