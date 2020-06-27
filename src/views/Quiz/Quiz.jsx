import React, { useState, useEffect, useContext } from 'react';
import FullScreen from 'containers/FullScreen';
import styled from 'styled-components';
import { UserContext } from 'context/UserContext';
import path from 'constants/config';

const StyledTitle = styled.h1``;

const StyledForm = styled.form`
  margin-bottom: 2em;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input``;

const StyledButton = styled.button``;

const fetchQuiz = async () => {
  const url = `${path}quiz`;
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Origin: null,
    },
  };
  const response = await fetch(url, headers);

  if (response.status === 200) {
    return response.json();
  }
  throw Error('fetchQuiz');
};

const sendAnswer = async (answer, id) => {
  const url = `${path}quiz/${answer}/${id}`;
  const headers = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: null,
    },
  };
  const response = await fetch(url, headers);

  if (response.status === 200) {
    return response.json();
  }
  throw Error('fetchQuiz');
};

const Quiz = () => {
  const [quiz, setQuiz] = useState({});
  const [answer, setAnswer] = useState('');
  const user = useContext(UserContext);
  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await fetchQuiz();
        setQuiz(res[0]);
      } catch (e) {}
    };
    getQuiz();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answer !== '') {
      try {
        const res = await sendAnswer(answer, quiz._id);
        console.log(res.data);
        setQuiz(res.data);
        user.setVote(1);
      } catch (e) {}
    }
  };

  return (
    <FullScreen>
      <StyledTitle>Quiz</StyledTitle>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <h3>{quiz.title}</h3>
        <StyledWrapper>
          {quiz.questions?.map((question) => (
            <div>
              {user.vote ? null : (
                <StyledInput type="radio" name="quiz" onChange={() => setAnswer(question.answer)} />
              )}
              {`${question.answer}${
                user.vote
                  ? `, głosów: ${question.votes} ${Math.floor(
                      (question.votes / quiz.votes) * 100,
                    )}%`
                  : ''
              }`}
            </div>
          ))}
        </StyledWrapper>

        {user.vote ? (
          <p>{`Oddano ${quiz.votes} głosów`}</p>
        ) : (
          <StyledButton type="submit">Wyślij</StyledButton>
        )}
      </StyledForm>
    </FullScreen>
  );
};

export default Quiz;
