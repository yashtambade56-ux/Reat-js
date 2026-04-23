import { use, useEffect } from "react";

function ErrorPage() {
    const handleGoHome = () => {
        window.location.href = "/";
    };
    const handleGetHelp = () => {
        window.location.href = "/help";
    };

    
useEffect(() => {
    const timeStamp = window.performance.now();

    return () => {
        const duration = window.performance.now() - timeStamp;
        console.log("Page duration: ", duration);
    };
}, []);


  return (
    <>
      <div className="glitch-wrapper" aria-hidden="true">
        <span className="glitch-text">404</span>
      </div>

      <p className="subtitle">error / page not found</p>

      <h1 id="error-heading" className="headline">
        Lost in the void?
      </h1>

      <p className="description">
        The page you're looking for has vanished into thin air — or maybe it
        never existed. Either way, it's not here.
      </p>
    </>
  );
}

export default ErrorPage;
