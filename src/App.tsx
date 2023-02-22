import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { Container } from "./App.styled";
import { Layout } from "./Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const HomePage = lazy(() => import("views/HomePage"));
const LogInPage = lazy(() => import("views/LogInPage"));

const NewsPage = lazy(() => import("views/NewsPage"));
const ProfilePage = lazy(() => import("views/ProfilePage"));
const NotFoundPage = lazy(() => import("views/NotFound"));

export default function App() {
  return (
    <Container>
      <Suspense fallback={<Oval />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route
              path="contacts"
              element={
                <PrivateRoute navTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            /> */}
            <Route
              path="profile"
              element={
                <PrivateRoute navTo="/login">
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />

            <Route
              path="login"
              element={
                <PublicRoute restricted navTo="/profile">
                  <LogInPage />
                </PublicRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
