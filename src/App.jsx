import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import OnBoarding from "./pages/OnBoarding";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import MyJobs from "./pages/MyJobs";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import { useState, useEffect } from "react";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoutes>
            <OnBoarding />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoutes>
            <JobListing />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoutes>
            <JobPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoutes>
            <PostJob />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoutes>
            <SavedJob />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoutes>
            <MyJobs />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Only run loader logic once when app first mounts
    if (hasInitialized) return;

    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    const sessionStartTime = sessionStorage.getItem("sessionStartTime");
    const currentTime = Date.now();

    // Check if this is a new browser session (30 minutes timeout)
    const isNewSession =
      !sessionStartTime ||
      currentTime - parseInt(sessionStartTime) > 30 * 60 * 1000;

    if (!hasSeenLoader || isNewSession) {
      // Show loader for new visits or new sessions
      setIsLoading(true);
      setShowContent(false);
      sessionStorage.setItem("sessionStartTime", currentTime.toString());
    } else {
      // Skip loader for same session navigation
      setIsLoading(false);
      setShowContent(true);
    }

    setHasInitialized(true);
  }, [hasInitialized]);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasSeenLoader", "true");
    sessionStorage.setItem("lastLoadTime", Date.now().toString());
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  // Show content immediately if not loading and initialized
  useEffect(() => {
    if (hasInitialized && !isLoading && !showContent) {
      setShowContent(true);
    }
  }, [hasInitialized, isLoading, showContent]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SmoothScroll />
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      {showContent && <RouterProvider router={router} />}
    </ThemeProvider>
  );
}

export default App;
