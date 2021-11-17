import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuizConfirmation from './pages/QuizConfirmation/index';
import GamesHistoryList from './pages/GamesHistoryList/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/confirmation" element={<QuizConfirmation />} />
        <Route path="/history" element={<GamesHistoryList />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
