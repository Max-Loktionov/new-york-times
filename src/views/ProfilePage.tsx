import { useTranslation } from "react-i18next";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ava from "img/ava.png";
import backImage from "img/background@2x.jpg";

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography
        variant="h3"
        sx={{ my: 2, mx: "auto", p: 2, textAlign: "center" }}
      >
        {t("profile.profile")}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="200"
          src={backImage}
          alt="user photo"
        />
        <CardContent>
          <Typography
            variant="h3"
            sx={{ my: 2, mx: "auto", p: 2, textAlign: "center" }}
          >
            User
          </Typography>
          <Grid container>
            <Grid item>
              <Avatar
                alt="user photo"
                src={ava}
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
            <Grid item sx={{ flexGrow: 1, my: 4, p: 2 }}>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={6} md={8}>
                  <Typography variant="h5">
                    {t("profile.name")}: admin
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Typography variant="h5">
                    {t("profile.email")}: example@test.com
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Typography variant="h5">
                    {t("profile.birthday")} : 01.06.1995
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default ProfilePage;
