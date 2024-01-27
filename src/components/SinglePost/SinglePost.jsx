import styles from './single-post.module.css';
import { getPostsById } from 'api/posts';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
//   const params = useParams();
    //   console.log(params);
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const { data } = await getPostsById(id);
                setPost(data);
            } catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [id]);

  return (
    <div>
      {/* <h1>Post title</h1>
      <p>Post body</p> */}
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      {post && (
        <>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.text}>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default SinglePost;
