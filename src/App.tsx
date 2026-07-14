import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import AccountDeletion from "./pages/legal/AccountDeletion";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="bg-bg-page min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
