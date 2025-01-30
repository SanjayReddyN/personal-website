// import { AppShell } from "@mantine/core";
import { lazy, Suspense, useState } from "react";
import { AppShell, LoadingOverlay } from "@mantine/core";
import Navbar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Goals = lazy(() => import("./components/Goals"));
const VectorLogo = lazy(() => import("./components/VectorLogo"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <AppShell>
          <div className="app-content">
            <Navbar />
            <Suspense fallback={<LoadingOverlay visible />}>
              {/* <Navbar /> */}
              <main style={{ scrollBehavior: "smooth" }}>
                {/* <VectorLogo /> */}
                <Suspense fallback={<LoadingOverlay visible />}>
                  <About />
                </Suspense>
                <Suspense fallback={<LoadingOverlay visible />}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<LoadingOverlay visible />}>
                  <Goals />
                </Suspense>
              </main>
            </Suspense>
          </div>
        </AppShell>
      )}
    </>
  );
}

export default App;
