import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Layouts/home";
import Main from "./components/Layouts/main";
import { Topics } from "./components/topics";
const QuizPage = lazy(() => import("./components/quiz-page"));
const NotFound = lazy(() => import("./components/not-found"));
const Statistics = lazy(() => import("./components/statistics"));
const Blogs = lazy(() => import("./components/blogs"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/quiz/:topicId",
        element: (
          <Suspense>
            <QuizPage />
          </Suspense>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          ),
      },
      {
        path: "/topics",
        element: (
          <Suspense>
            <Topics />
          </Suspense>
        ),
      },
      {
        path: "/statistics",
        element: (
          <Suspense>
            <Statistics />
          </Suspense>
        ),
        loader: async ({ params }) =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/blogs",
        element: (
          <Suspense>
            <Blogs />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "*",
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
]);
