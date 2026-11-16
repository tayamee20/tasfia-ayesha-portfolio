import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ScrollManager } from './components/layout/ScrollManager';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const location = useLocation();
  return (
    // reducedMotion="user" turns transform animations off for people who ask their OS for less motion.
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  );
}
