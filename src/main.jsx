import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";
import TermsOfUse from "./pages/TermsOfUse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/refundcancellationpolicy",
    element: <RefundCancellationPolicy />,
  },
  {
    path: "/termsofuse",
    element: <TermsOfUse />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
