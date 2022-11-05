import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "components/Loader";
import routes from "config/routes";

const StartPage = lazy(() => import("pages/Start"));
const GamePage = lazy(() => import("pages/Game"));

const routesWithPage = [
  {
    path: routes.start,
    Component: <StartPage />,
  },
  {
    path: routes.game,
    Component: <GamePage />,
  },
];

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routesWithPage.map((route) => (
          <Route key={route.path} path={route.path} element={route.Component} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
