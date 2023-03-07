import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
console.log(data.posts)
console.log(data)
      setPosts(data.posts);
    };
    fetchData();
  }, []);

  return (
    <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.isArray(posts) && posts.map((post) => (
        <Grid item xs={12} md={6} lg={4} key={post.id}>
          <Paper  elevation={23}>
            <Typography  mt={2} p={2} variant="h5">{post.title}</Typography>
            <Typography mt={1} p={2} variant="body1">{post.body}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
