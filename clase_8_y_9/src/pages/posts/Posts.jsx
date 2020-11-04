import React from 'react';
import Post from '../../components/post/Post';
import useFetch from '../../hooks/useFetch';
import './posts.css';

const Posts = () => {
  const { loading, data: posts, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  if (loading) {
    return <p className="loading">Loading....</p>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }
  return (
    <div className="posts">
      {posts?.map((post) => (
        <Post key={post.id} id={post.id} body={post.body} title={post.title} />
      ))}
    </div>
  );
};

export default Posts;
