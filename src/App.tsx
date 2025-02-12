import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes/routes";

export default function App() {
  const router = createRouter();

  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}
