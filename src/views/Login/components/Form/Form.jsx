import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
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

const loginUser = async (data) => {
  const url = `${path}login`;
  const headers = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, headers);
  if (response.status === 200) {
    return response.json();
  }
  throw Error('loginUser');
};

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const user = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    try {
      res = await loginUser({ login, password });
      user.setToken(res.token);
      history.push('/admin');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <StyledFormGroup>
        <StyledLabel>Login</StyledLabel>
        <StyledInput value={login} onChange={(e) => setLogin(e.target.value)} />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Hasło</StyledLabel>
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledFormGroup>
      <StyledButton type="submit">Zaloguj</StyledButton>
    </StyledForm>
  );
};

export default Form;
