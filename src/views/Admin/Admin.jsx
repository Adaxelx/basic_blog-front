import React, { useState, useEffect, useContext } from 'react';
import FullScreen from 'containers/FullScreen';
import { UserContext } from 'context/UserContext';
import Post from 'views/News/components/Post';
import path from 'constants/config';
import Form from './components/Form';

const fetchPosts = async (token) => {
  const url = `${path}admin/news`;
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Origin: null,
      Authorization: `Token ${token}`,
    },
  };
  const response = await fetch(url, headers);
  if (response.status === 200) {
    return response.json();
  }
  throw Error('loginUser');
};

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetchPosts(user.token);
        setPosts(res.data);
      } catch (e) {}
    };
    getPosts();
  }, []);

  const splicePost = (id) => {
    const arrayTmp = [...posts];

    arrayTmp.splice(
      arrayTmp.findIndex((post) => post._id === id),
      1,
    );

    setPosts(arrayTmp);
  };

  return (
    <FullScreen>
      <h1>Admin</h1>
      <Form />
      {posts?.map(({ title, content, date, _id: id }) => (
        <Post
          key={id}
          id={id}
          title={title}
          content={content}
          date={new Date(date).toISOString()}
          splicePost={splicePost}
        />
      ))}
    </FullScreen>
  );
};
export default Admin;
