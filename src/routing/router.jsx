import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GameSetupPage } from "../pages/GameSetupPage";
import { GamePage } from "../pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/game-setup",
    element: <GameSetupPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

export { router };
