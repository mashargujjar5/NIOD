import { useEffect, useState } from 'react';
import Header from './components/Header';
import HomeSections from './components/HomeSections';
import AppLoader from './components/AppLoader';
import BestSellersPage from './pages/BestSellersPage';
import BodyHairPage from './pages/BodyHairPage';
import NewFeaturedPage from './pages/NewFeaturedPage';
import SetsCollectionsPage from './pages/SetsCollectionsPage';
import SkincarePage from './pages/SkincarePage';
import BlogPage from './pages/BlogPage';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const path = window.location.pathname;

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(loaderTimer);
  }, []);

  if (isLoading) {
    return <AppLoader />;
  }

  if (path === '/category/best-sellers') {
    return <BestSellersPage />;
  }

  if (path === '/category/newfeatured') {
    return <NewFeaturedPage />;
  }

  if (path === '/category/skincare') {
    return <SkincarePage />;
  }

  if (path === '/category/body-hair') {
    return <BodyHairPage />;
  }

  if (path === '/category/skincare/skincare-sets') {
    return <SetsCollectionsPage />;
  }

  if (path === '/blog') {
    return <BlogPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomeSections />
    </div>
  );
}

export default App;
