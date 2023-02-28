import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Oval } from "react-loader-spinner";
// import { Container } from "./App.styled";
import Layout from "components/Layout";

import {
  PublicRoute,
  PrivateRoute,
} from "components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("views/HomePage"));
const LogInPage = lazy(() => import("views/LogInPage"));

const NewsPage = lazy(() => import("views/NewsPage"));
const ProfilePage = lazy(() => import("views/ProfilePage"));
const NotFoundPage = lazy(() => import("views/NotFound"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<Oval />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />

            <Route element={<PrivateRoute navTo="/login" />}>
              <Route element={<ProfilePage />} path="profile" />
            </Route>

            <Route element={<PublicRoute restricted navTo="/profile" />}>
              <Route element={<LogInPage />} path="login" />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
