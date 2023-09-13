import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
