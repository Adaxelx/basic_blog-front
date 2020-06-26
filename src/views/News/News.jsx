import React from 'react';
import FullScreen from 'containers/FullScreen';
import styled from 'styled-components';
import Post from './components/Post';

const StyledTitle = styled.h1``;
const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

const StyledFilter = styled.form`
  margin-bottom: 2em;
`;

const StyledInput = styled.input``;

const StyledButton = styled.button``;

const News = () => (
  <FullScreen>
    <StyledTitle>Aktualności</StyledTitle>
    <StyledFilter>
      <StyledInput />
      <StyledButton>Filtruj</StyledButton>
    </StyledFilter>
    <StyledPostContainer>
      <Post title="xd" content="xd" date="11.06.2020" />
    </StyledPostContainer>
  </FullScreen>
);

export default News;
