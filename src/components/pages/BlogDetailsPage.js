import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import Post1 from '../blog/Post1';
import Post2 from '../blog/Post2';

function BlogDetailsPage() {
  const { id } = useParams();

  // Convert id to a number for comparison
  const postId = parseInt(id, 10);

  return (
    <>
      <Navbar />
      <br />
      {/* Conditionally render Post1 or Post2 based on the id */}
      {postId === 1 && <Post1 />}
      {postId === 2 && <Post2 />}
      {/* Add more conditions for other post ids as needed */}
      <Footer />
    </>
  );
}

export default BlogDetailsPage;
