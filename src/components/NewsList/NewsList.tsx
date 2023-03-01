import { useTranslation } from "react-i18next";
import NewsItem from "components/NewsItem";
import { INews } from "redux/newsAPI";
import { Grid } from "@mui/material";
import { Button } from "components/LoginForm/LoginForm.styled";

interface INewsProps {
  posts: INews[];
  onDelete: (id: string) => void;
}

const NewsList = ({ posts, onDelete }: INewsProps) => {
  const { t } = useTranslation();
  return (
    <Grid container mb={4}>
      <Grid item>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <NewsItem title={post.title} id={post.id} body={post.body} />
              <Button type="button" onClick={() => onDelete(post.id)}>
                {t("news.del")}
              </Button>
            </li>
          ))}
      </Grid>
    </Grid>
  );
};
export default NewsList;
