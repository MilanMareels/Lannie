import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes/routes";

export default function App() {
  const router = createRouter();

  return (
    <div
      style={{
        backgroundImage: `url('/bg-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}
