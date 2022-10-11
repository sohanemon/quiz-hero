import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Layouts/home";
import Main from "./components/Layouts/main";
const QuizPage = lazy(() => import("./components/quiz-page"));
const NotFound = lazy(() => import("./components/not-found"));

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
