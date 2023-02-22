import NewsItem from "components/NewsItem";
import { INews } from "redux/newsAPI";

interface INewsProps {
  posts: INews[];
  onDelete: (id: string) => void;
}

const NewsList = ({ posts, onDelete }: INewsProps) => {
  return (
    <>
      News
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <NewsItem
              // poster_path={post.poster_path ?? post.poster_path}
              title={post.title}
              id={post.id}
              body={post.body}
            />
            <button type="button" onClick={() => onDelete(post.id)}>
              Delete
            </button>
          </li>
        ))}
    </>
  );
};
export default NewsList;
