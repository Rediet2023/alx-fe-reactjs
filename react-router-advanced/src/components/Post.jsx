import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();

  return <h3>Displaying post with ID: {postId}</h3>;
}

export default Post;