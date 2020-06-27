import React, { useState, useEffect } from 'react';
import FullScreen from 'containers/FullScreen';
import styled from 'styled-components';
import path from 'constants/config';
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

const fetchPosts = async (text) => {
  const url = `${path}news${text ? `/${text}` : ''}`;
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
  throw Error('loginUser');
};

const News = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetchPosts();
        console.log(res);
        setPosts(res.data);
      } catch (e) {}
    };
    getPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchPosts(input);
      setPosts(res.data);
    } catch (e) {}
  };

  return (
    <FullScreen>
      <StyledTitle>Aktualności</StyledTitle>
      <StyledFilter onSubmit={(e) => handleSubmit(e)}>
        <StyledInput value={input} onChange={(e) => setInput(e.target.value)} />
        <StyledButton type="submit">Filtruj</StyledButton>
      </StyledFilter>
      <StyledPostContainer>
        {posts.map(({ title, content, date }) => (
          <Post title={title} content={content} date={date} />
        ))}
      </StyledPostContainer>
    </FullScreen>
  );
};

export default News;
