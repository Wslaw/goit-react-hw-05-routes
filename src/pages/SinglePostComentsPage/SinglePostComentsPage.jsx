import { getComentsByPostId } from 'api/posts';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostComentsPage = () => {
  const [coments, setComents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchComents = async () => {
      try {
        setLoading(true);
        const { data } = await getComentsByPostId(id);
        setComents(data);
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchComents();
  }, [id]);

  const elements = coments.map(({ id, name, body }) => (
      <li key={id}>
          <h4>{name}</h4>
          <p>{ body}</p>
      </li>
  ));

  const isComents = Boolean(coments.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
          {isComents && <ol>{elements}</ol>}
    </>
  );
};

export default SinglePostComentsPage;
