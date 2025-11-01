import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/artech/Header";
import Footer from "@/components/artech/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 grid place-items-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-heading font-semibold mb-3">404</h1>
          <p className="text-muted-foreground mb-6">The page you’re looking for doesn’t exist.</p>
          <a href="/" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-border hover:bg-muted">
            Back to home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
