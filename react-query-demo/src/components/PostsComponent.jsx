import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  // Using useQuery with advanced options
  const { data, isError, isLoading, refetch, error } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // 1 minute before the data is considered stale
    cacheTime: 300000, // 5 minutes cache time (default)
    refetchOnWindowFocus: false, // Do not refetch when window gains focus
    keepPreviousData: true, // Keep the previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;