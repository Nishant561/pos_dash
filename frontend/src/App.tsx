import { RouterProvider } from "react-router";
import { Routes } from "./router/Routes";

function App() {
  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  );
}

export default App;
