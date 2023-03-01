import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import watch from "img/watch.jpeg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h2"
          component="h1"
          color="secondary"
          sx={{ my: 4, p: 2, textAlign: "center" }}
        >
          {t("home.head")}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" p={2}>
          {t("home.title")}
        </Typography>
      </Grid>
      <Grid item>
        <Card>
          <CardMedia
            component="img"
            height="320"
            src={watch}
            alt="pocket watch"
          />
        </Card>
      </Grid>
      <Grid item fontStyle="italic" p={2}>
        <Typography variant="h3" pl={2}>
          {t("home.description.part1")}
        </Typography>
        <Typography variant="h3" pl={4}>
          {t("home.description.part2")}
        </Typography>
      </Grid>
    </Grid>
  );
}
