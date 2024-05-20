import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import 'animate.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage name="name" />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
