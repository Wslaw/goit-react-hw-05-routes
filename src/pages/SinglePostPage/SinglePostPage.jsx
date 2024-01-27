
import { Link } from 'react-router-dom'; 

import SinglePost from 'components/SinglePost/SinglePost';
// import styles from './single-post-page.module.css';

const SinglePostPage = () => {
 
  return (
    <div>
      <SinglePost />
      {/* <Link to="/posts/1/comments">Coments</Link> */}
      <Link to="comments">Coments</Link>
    </div>
  );
};

export default SinglePostPage;
