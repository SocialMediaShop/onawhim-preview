import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Enquire from "./pages/Enquire";
import Safari from "./pages/Safari";

import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
    link.setAttribute("href", `https://onawhim.co.za${cleanPath}`);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/southern-africa" element={<Safari />} /> {/* Same as safari for now */}
          <Route path="/tours" element={<Home />} /> {/* Placeholder */}
          <Route path="/destinations" element={<Home />} /> {/* Placeholder */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
