import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from 'context/UserContext';
import path from 'constants/config';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledFormGroup = styled.div`
  margin-top: 2rem;
`;

const StyledLabel = styled.label`
  margin-right: 0.5rem;
`;

const StyledInput = styled.input``;

const StyledButton = styled.button`
  margin-top: 0.5rem;
  align-self: flex-end;
`;

const sendPost = async (data, token) => {
  const url = `${path}admin/news/add/`;
  const headers = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: null,
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, headers);
  if (response.status === 200) {
    return response.json();
  }
  throw Error('loginUser');
};

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const user = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    try {
      res = await sendPost({ title, content }, user.token);
      setMessage(res.message);
      setTitle('');
      setContent('');
    } catch (err) {
      console.log(err);
    }
  };

  // brak walidacji

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <StyledFormGroup>
        <StyledLabel>Tytuł</StyledLabel>
        <StyledInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Kontent</StyledLabel>
        <StyledInput value={content} onChange={(e) => setContent(e.target.value)} />
      </StyledFormGroup>
      {message ? <p>{message}</p> : null}
      <StyledButton type="submit">Dodaj</StyledButton>
    </StyledForm>
  );
};

export default Form;
