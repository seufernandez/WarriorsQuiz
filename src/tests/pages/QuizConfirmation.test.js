import { screen, render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import QuizConfirmation from '../../pages/QuizConfirmation';
import { unmountComponentAtNode } from 'react-dom'

let container = null
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container)
})
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null
})

jest.mock('../../hooks/useQuiz', () => {
  return {
    useQuiz: () => {
      return {
        setConfirmation: jest.fn(),
        setQuestionsArray: jest.fn(),
        setShowAnswers: jest.fn(),
        setCurrentIndex: jest.fn(),
        setScore: jest.fn(),
        setBackupQuestionsArray: jest.fn(),
      }
    }
  }
})

describe('QConfirmation page', () => {
  it('renders correctly', () => {
    // const useQuizMocked = mocked(useQuiz)

    // useQuizMocked.mockReturnValueOnce({

    // })

    render(
      <BrowserRouter>
        <QuizConfirmation/>
      </BrowserRouter>
    )

    expect(screen.getByText('Are you ready?')).toBeInTheDocument();
  })

})
