import noImage from "img/no-image-icon-23485.png";
import { INews } from "redux/newsAPI";
import { Grid, Typography } from "@mui/material";

const NewsItem = ({ title, body, id }: INews) => {
  return (
    <Grid container direction="column">
      <Grid item sx={{ my: 1, mx: "auto", p: 2 }}>
        <Typography variant="h4" color="secondary">
          {title}
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="h6">
          ==={id}===
        </Typography>
      </Grid>
      <Grid item container m={2} spacing={2}>
        <Grid item>
          <img src={noImage} alt={title} width="150" height="150" />
        </Grid>
        <Grid item xs>
          <Typography>{body}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NewsItem;
