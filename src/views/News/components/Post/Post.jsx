import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 0 15px;
`;

const StyledTitle = styled.h3`
  text-align: center;
`;

const StyledContent = styled.p``;
const StyledDate = styled.small``;

const Post = ({ title, content, date }) => (
  <StyledPost>
    <StyledTitle>{title}</StyledTitle>
    <StyledDate>{date}</StyledDate>
    <StyledContent>{content}</StyledContent>
  </StyledPost>
);

export default Post;
