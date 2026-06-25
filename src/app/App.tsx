
import { Header, MenuOverlay } from "../components/layout/header";
import { LocationProvider } from "./providers/locationProvider";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Missions } from "../pages/missions";
import { Membership } from "../pages/membership";
import { Footer } from "../components/layout/footer";
import styles from "./App.module.scss";
import { ByLaws } from "../pages/bylaws";
import { SiteMap } from "../pages/sitemap";
import { About } from "../pages/about";
import { useEffect } from "react";
import { OverlayProvider, useOverlay } from "./providers/overlayProvider";



function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <OverlayProvider>
        <AppContent />
      </OverlayProvider>
    </Router>
  );
}

function AppContent() {
  const { overlayIsOpen } = useOverlay();
  return (
    <LocationProvider>
      <div className={styles.app}>
        <Header />
        {overlayIsOpen ?
          <MenuOverlay />
        :
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/by-laws" element={<ByLaws />} />
              <Route path="/site-map" element={<SiteMap />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </>
        }
      </div>
    </LocationProvider>
  );
}

export default App;
