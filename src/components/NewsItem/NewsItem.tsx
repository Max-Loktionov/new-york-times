import noImage from "img/no-image-icon-23485.png";
import { INews } from "redux/newsAPI";

const NewsItem = ({ title, body, id }: INews) => {
  return (
    <>
      <h3>{title}</h3>
      <div>==={id}===</div>
      <div style={{ display: "flex" }}>
        <img src={noImage} alt={title} width="100" height="100" />
        <article>{body}</article>
      </div>
    </>
  );
};
export default NewsItem;
