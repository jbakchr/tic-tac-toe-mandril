import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GameSetupPage } from "../pages/GameSetupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/game-setup",
    element: <GameSetupPage />,
  },
]);

export { router };
