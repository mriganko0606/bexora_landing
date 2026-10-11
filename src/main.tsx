import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MarketingLanding } from "./app/components/MarketingLanding";
import "./styles/index.css";

// In the real app these open login / onboarding flows. Here they just log,
// so the UI can be worked on without the rest of the app.
const notice = (action: string) => () => {
  console.log(`[preview] ${action}`);
  alert(`"${action}" works in the main app only (UI preview).`);
};

const Landing = () => (
  <MarketingLanding
    onStart={notice("Get started (patient onboarding)")}
    onLoginRequest={notice("Patient login")}
    onStartOnboarding={notice("Doctor onboarding")}
    onDoctorLoginRequest={notice("Doctor login")}
    onAdminLoginRequest={notice("Admin login")}
  />
);

const router = createBrowserRouter([{ path: "*", element: <Landing /> }]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
