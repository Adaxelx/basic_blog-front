import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from 'context/UserContext';

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

const deletePosts = async (token, id) => {
  const url = `http://localhost:8000/admin/news/delete/${id}/`;
  const headers = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Origin: null,
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(url, headers);
  console.log(response);
  if (response.status === 200) {
    return response.json();
  }
  throw Error('deletePost');
};

const Post = ({ title, content, date, id, splicePost }) => {
  const user = useContext(UserContext);

  const deletePost = async (e, id) => {
    try {
      await deletePosts(user.token, id);
      splicePost(id);
    } catch (err) {}
  };

  return (
    <StyledPost>
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>{date}</StyledDate>
      <StyledContent>{content}</StyledContent>
      {user.token && id ? (
        <button type="button" onClick={(e) => deletePost(e, id)}>
          X
        </button>
      ) : null}
    </StyledPost>
  );
};

export default Post;
