import React from 'react';
import styled from 'styled-components';

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

const Form = () => {
  return (
    <StyledForm>
      <StyledFormGroup>
        <StyledLabel>Login</StyledLabel>
        <StyledInput />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Hasło</StyledLabel>
        <StyledInput />
      </StyledFormGroup>
      <StyledButton type="submit">Zaloguj</StyledButton>
    </StyledForm>
  );
};

export default Form;
