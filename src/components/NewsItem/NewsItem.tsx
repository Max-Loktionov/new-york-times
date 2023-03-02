import noImage from "img/no-image-icon-23485.png";
import { INews } from "helpers/interfaces";
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
      <Grid
        item
        m={2}
        sx={{ flexGrow: 1, display: { xs: "block", md: "flex" } }}
      >
        <Grid item m={2}>
          <img src={noImage} alt={title} width="150" height="150" />
        </Grid>
        <Grid item p={2}>
          <Typography>{body}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NewsItem;
